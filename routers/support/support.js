import Authentication from '../../authentication/auth.js';
import SupportData from '../../data/support.js';
import SupporCallstData from '../../data/support_calls.js';
import connection from './../../data/connection.js';

const supportRouters = (router) => {

    const support = new SupportData(connection);
    const supportCalls = new SupporCallstData(connection);
    const auth = new Authentication(support)

    router.get('/all', async (require, response, next) => {
        try {
            const result = await support.select();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

    router.route("/call/:id")
        .all(auth.auth)
        .post(async (require, response) => {

            const assignment = {
                support_id: response.locals.userId,
                calls_id: parseInt(require.params.id)
            }

            try {
                const result = await supportCalls.insertCallToSupport(assignment);

                response.status(200).send({ message: "Chamado atribuido" });
            } catch (error) {
                response.status(400).send({ message: "Chamado não encontrado" });
            }
        })
        .delete(async (require, response) => {

            const idSupport = response.locals.userId;
            const idCall = parseInt(require.params.id);

            try {
                await supportCalls.verifyCallFromSupportAndReturnExceptionIfNot(idSupport, idCall);
                await supportCalls.updateStatusCall("Fechado", idCall);
                
                response.status(200).send({ message: "Chamado Fechado" });

            } catch (error) {
                console.log(error)
                response.status(400).send({ message: "Chamado não encontrado" });
            }

        })

    return router;
}

export default supportRouters;