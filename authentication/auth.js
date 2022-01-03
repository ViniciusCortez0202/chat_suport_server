require('dotenv').config();
const jwt = require('jsonwebtoken');

class Authentication {
    auth = () => {
        console.log(process.env.TOKEN_KEY)

    }

    createJWT = () => {

    }

    refresh = () => {
        console.log(process.env.REFRESH_TOKEN_KEY);
    }
}

module.exports = Authentication;