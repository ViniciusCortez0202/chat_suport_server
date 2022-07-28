import Status from '../../enums/statusCall';
import Client from '../../data/client';

export default clientsRouters = (router) => {

    router.get('/all', async (require, response, next) => {
        const client = new Client();
        try {
            result = await client.selectClient();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

   

    return router;
}