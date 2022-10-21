import * as env from 'dotenv';
env.config();
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import UserData from './../data/user.js'
import connection from './../data/connection.js';
import { promisify } from 'util';

class Authentication {

    auth = async (request, response, next) => {
        const authorization = request.heard['authorization'];
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

    createToken = (user) => {
        return jwt.sign({ id: user.id }, process.env.TOKEN_KEY, { expiresIn: '1h' });
    }
    
    createRefreshToken = async (user) => {
        const uuid = await this._createUuidRefreshToken(user.id);
        return jwt.sign({ id: user.id, uuid: uuid }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '30d' });
    }

    _createUuidRefreshToken = async (userId) => {
        const uuid = uuidv4();
        const userData = new UserData(connection)
        userData.updateRefreshTokenId(uuid, userId)
        return uuid;
    }

    deleteRefreshToken = async (refreshToken) => {
        try {
            const payload = await this._verifyTokens(refreshToken, process.env.REFRESH_TOKEN_KEY);
            const userData = new UserData(connection);
            await userData.updateRefreshTokenId('', payload.id)
        } catch (error) {
            throw error;
        }
    }

    _getValidUuidFromUser = async (userId) => {
        try {
            const userData = new UserData(connection);
            const validUuid = await userData.selectRefreshTokenId(userId);
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
                const user = (await this._verifyTokens(refreshToken, process.env.REFRESH_TOKEN_KEY)).id;
                response.locals.token = this.createToken({ id: user.id });
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