import * as env from 'dotenv';
env.config();
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { promisify } from 'util';

class Authentication {

    user;
    //tipo de usuário que será autenticado (Support, User)
    constructor(userAuth){
        this.user = userAuth
    }


    auth = async (request, response, next) => {
        const authorization = request.headers['authorization'];
        const token = authorization && authorization.split(' ')[1];
        if (token === null) return response.status(401).send({ message: "Usuário inválido" });

        try {
            const payload = await this._verifyTokens(token, process.env.TOKEN_KEY);
            response.locals.userId = payload.id;
            next();
        } catch (error) {
            return response.status(401).send({ message: "Usuário inválido" });
        }
    }

    _verifyTokens = async (token, key) => {
        try {
            const verify = promisify(jwt.verify);
            return await verify(token, key);
        } catch (error) {
            throw error;
        }
    }

    createToken = (userValue) => {
        return jwt.sign({ id: userValue.id }, process.env.TOKEN_KEY, { expiresIn: '1h' });
    }
    
    createRefreshToken = async (userValue) => {
        const uuid = await this._createUuidRefreshToken(userValue.id);
        return jwt.sign({ id: userValue.id, uuid: uuid }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '30d' });
    }

    _createUuidRefreshToken = async (userId) => {
        const uuid = uuidv4();
        await this.user.updateRefreshTokenId(uuid, userId)
        return uuid;
    }

    deleteRefreshToken = async (refreshToken) => {
        try {
            const payload = await this._verifyTokens(refreshToken, process.env.REFRESH_TOKEN_KEY);
            await this.user.updateRefreshTokenId(" ", payload.id)
        } catch (error) {
            throw error;
        }
    }

    _getValidUuidFromUser = async (userId) => {
        try {
            const validUuid = await this.user.selectRefreshTokenId(userId);
            return validUuid;
        } catch (error) {
            throw error;
        }
    }

    _verifyRefreshToken = async (refreshToken) => {

        try {
            const payload = await this._verifyTokens(refreshToken, process.env.REFRESH_TOKEN_KEY)
            const validUuid = await this._getValidUuidFromUser(payload.id);            
            if (validUuid[0].uuid === payload.uuid) {
                return true;
            }
        } catch (error) {
            throw error;
        }
        return false;
    }

    updateTokenWayRefresh = async (request, response, next) => {
        const refreshToken = request.body.refresh_token;

        try {
            const verifiedRefreshToken = await this._verifyRefreshToken(refreshToken);
            if (verifiedRefreshToken) {
                const userId = (await this._verifyTokens(refreshToken, process.env.REFRESH_TOKEN_KEY)).id;
                response.locals.token = this.createToken({ id: userId });
                next();
            } else {
                return response.status(401).send({ message: "Usuário inválido" });
            }
        } catch (error) {
            return response.status(401).send({ message: "Usuário inválido" });
        }
    }
}

export default Authentication;