require('dotenv').config();
import { verify, sign } from 'jsonwebtoken';

export class Authentication {

    data;

    constructor(data){
        this.data = data;
    }

    auth = (request, response, next) => {
        const authorization = request.heard['authorization'];
        const token = authorization && authorization.split(' ')[1];
        if (token == null) return response.sendStatus(401);
        console.log(process.env.TOKEN_KEY)

        verify(token, process.env.TOKEN_KEY, (err, user) => {
            if (err) return response.sendStatus(403);
            request.user = user;
            next();
        });
    }

    createToken = (user) => {
        return sign(user, process.env.TOKEN_KEY, {expiresIn: '5s'});
    }
    createRefreshToken = (user) => {
        return sign(user, process.env.REFRESH_TOKEN_KEY, {expiresIn: '30d'});
    }

    deleteRefreshToken = (refreshToken) => {
        
    }

    refresh = (request, response, next) => {
        let refreshToken = request.body.refresh_token;
             
        if(this.data.refreshList.includes(refreshToken)){
            verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
                if (err) return response.sendStatus(403); 
                console.log(user);               
                return response.status(200).send({token: this.createToken({email: user.email})});
            })
        }
        else return response.sendStatus(404);
        
    }
}