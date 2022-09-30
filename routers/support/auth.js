import SupportData from './../../data/support.js';
import transaction from "../../data/util/transaction.js";
import Authentication from '../../authentication/auth.js';

const supportAuthRouters = (router) => {

    const auth = new Authentication([]);

    router.post('/login', async (request, response) => {

        const supoprtData = new SupportData();
        const name = request.body.password;
        const password = request.body.password;

        try {
            const result = await supoprtData.login(name, password);
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
        const supportData = new SupportData();
        try {

            const result = await supportData.insert(user);
            const resultUser = await supportData.selectById(result.insertId);
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

    return router;
}

export default supportAuthRouters;