import Status from '../../enums/statusCall';
import Calls from '../../data/calls';

export default callsRouters = (router, ioMediator) => {

    router.post('/open', (require, response) => {
        console.log(require.body);
        console.log(require.headers.socketid);

        idCall = "001";

        ioMediator.joinRoom(require.headers.socketid, idCall);
        response.set('Location', `http://10.0.0.104/calls?callid=545&token=${require.body.token}`);
        response.status(201).end();
    });

    router.get('/all', async (require, response, next) => {
        const calls = new Calls();
        try {
            result = await calls.selectCalls();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

    router.patch('/close', async (require, response) => {

    });


    return router;
}