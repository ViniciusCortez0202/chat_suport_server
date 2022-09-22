// import Status from '../../enums/statusCall.js';
import Support from '../../data/support.js';

const supportRouters = (router) => {

    router.get('/all', async (require, response, next) => {
        const support = new Support();
        try {
            result = await support.selectSupport();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

    return router;
}

export default supportRouters;