import SupportData from './../../data/support.js';
import connection from '../../data/connection.js';
import Authentication from '../../authentication/auth.js';

const supportAuthRouters = (router) => {

    const supportData = new SupportData(connection);
    const auth = new Authentication(supportData);


    router.post('/login', async (request, response) => {
        const cpf = request.body.cpf;
        const password = request.body.password;
        try {
            const result = (await supportData.login(cpf, password))[0];
            if (result.length === null) {
                response.status(404).send({ message: "Usuário não encontrado" });
            }
            const token = auth.createToken(result);
            const refreshToken = await auth.createRefreshToken(result);
            response.status(200).send({ token: token, refresh_token: refreshToken });
        } catch (error) {
            response.status(404).send("Usuário não encontrado");
        }
    });

    router.get('/logout', async (request, response) => {

        const refreshToken = request.body.refresh_token;

        try {
            await auth.deleteRefreshToken(refreshToken);
            response.status(200).send();

        } catch (error) {
            response.status(401).send({ message: "Usuário inválido" });
        }
    });

    router.post('/signup', async (request, response) => {
        try {

            const user = {
                name: request.body.name,
                password: request.body.password,
                cpf: request.body.cpf,
            }

            const result = await supportData.insert(user);
            const resultUser = await supportData.selectById(result.insertId);
            console.log("aquiiiiiii")

            const token = auth.createToken(resultUser);
            const refreshToken = await auth.createRefreshToken(resultUser);

            response.append('token', token);
            response.append('refreshToken', refreshToken);

            response.status(201).send(resultUser);
        } catch (error) {
            response.status(400).send("Não foi possível criar usuário!");
        }
    });


    router.get('/refresh', auth.updateTokenWayRefresh, async (request, response) => {

        const token = response.locals.token;

        response.status(200).send({ token: token });
    });

    return router;
}

export default supportAuthRouters;