// import Status from '../../enums/statusCall.js';
import CallsData from '../../data/calls.js';
import convertToFile from './../files/file_convert.js';

const callsRouters = (router, ioMediator) => {

    router.post('/open', convertToFile, async (require, response) => {
     
        const title = require.body.title;
        const body = require.body.body;
        const user = require.body.user_id;
        const files = require.body.files;

        const calls = new CallsData();

        try {
            const result = await calls.insertCalls({title: title, body: body, user_id: user});
            //ioMediator.joinRoom(require.headers.socketid, idCall);   
            console.log(result) 
            response.status(201).send(result);
        } catch (error) {
            console.log(error)
            response.status(400).send("Não foi possível abrir o chamado.");
        }

       
    });

    router.get('/all/:status', async (require, response, next) => {
        const calls = new CallsData();
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

export default callsRouters;