const Auth = require('../../authentication/auth');
const SingRepository = require('../repositories/sing_repositories/sing_repository');
require('dotenv').config();

sing = (router) => {
    const data = {
        refreshList: [

        ]
    }
    const auth = new Auth(data);

    router.post('/login', async (request, response) => {

        const user = {
            email: request.body.email,
            password: request.body.password
        }

        const repository = new SingRepository();
        if (await repository.logIn(user)) {
            const token = auth.createToken({email: user.email});
            const refresh = auth.createRefreshToken({email: user.email});
            data.refreshList.push(refresh);
            console.log(token)
            response.status(200).send({ token: token, refresh: refresh });
        }
    });

    router.post('/logout', (request, response) => {

    });

    router.post('/refresh', auth.refresh ,(request, response, next) => {
      
    });

    return router;
}

module.exports = sing;