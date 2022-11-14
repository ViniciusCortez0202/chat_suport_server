import { response } from 'express';
import Authentication from '../../authentication/auth.js';
import SupportData from '../../data/support.js';
import connection from './../../data/connection.js';

const supportRouters = (router) => {

    const support = new SupportData(connection);
    const auth  = new Authentication(support)

    router.get('/all', async (require, response, next) => {
        try {
            const result = await support.select();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

    router.put("/call/:id", auth.auth, async (require, response) => {
        const assignment = {
            support_id: response.locals.userId,
            calls_id: parseInt(require.params.id)
        }

        try {

            const result = await support.insertCallToSupport(assignment);
            
            response.status(200).send({message: "Chamado atribuido"});
            
        } catch (error) {
            response.status(400).send({message: "Chamado não encontrado"}); 
        }

    })

    return router;
}

export default supportRouters;