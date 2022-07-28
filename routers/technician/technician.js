import Status from '../../enums/statusCall';
import Technician from '../../data/technician';

export default techniciansRouters = (router) => {

    router.get('/all', async (require, response, next) => {
        const technician = new Technician();
        try {
            result = await technician.selectTechnician();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

    return router;
}