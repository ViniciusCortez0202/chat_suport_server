const Status = require('../../enums/statusCall')
const Client = require('../../data/client')

clientsRouters = (router) => {

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

module.exports = clientsRouters;