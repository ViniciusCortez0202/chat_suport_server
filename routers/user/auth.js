import Authentication from "../../authentication/auth.js"
import transaction from "../../data/util/transaction.js";
import UserData from './../../data/user.js';

const userAuthRouters = (router) => {

    const auth = new Authentication([]);

    router.post('/login', async (request, response) => {


        const userData = new UserData();
        const name = request.body.password;
        const password = request.body.password;

        try {
            const result = await userData.login(name, password);
            const token = auth.createToken(result);
            const refreshToken = auth.createRefreshToken(result);

            response.append('token', token);
            response.append('refreshToken', refreshToken);
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Usuário não encontrado")
        }
    })

    router.get('/logout', (request, response) => {

        const refreshToken = request.body.refreshToken;

        auth.deleteRefreshToken(refreshToken);


        response.status(200).send();
    })
    router.post('/signup', async (request, response) => {
        const userData = new UserData();
        try {

            const result = await userData.insert(user);
            const resultUser = await userData.selectById(result.insertId);

            const token = auth.createToken(resultUser);
            const refreshToken = auth.createRefreshToken(resultUser);

            response.append('token', token);
            response.append('refreshToken', refreshToken);

            response.status(201).send(resultUser);
        } catch (error) {
            response.status(400).send("Não foi possível criar usuário!");
        }
    })
    router.post('/refresh', [auth.createToken], (request, response) => {


    })
}

export default userAuthRouters;