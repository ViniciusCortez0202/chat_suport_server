// import Status from '../../enums/statusCall.js';
import CallsData from '../../data/calls.js';
import convertToFile from './../files/file_convert.js';
import connection from './../../data/connection.js';
import FilesData from './../../data/files.js';

const callsRouters = (router, ioMediator) => {

    router.post('/open', convertToFile, async (require, response) => {
     
        const title = require.body.title;
        const body = require.body.body;
        const user = require.body.user_id;
        const files = response.locals.files;

        const calls = new CallsData(connection);
        const filesData = new FilesData(connection);

        try {
            const resultFiles = await filesData.insertFiles(files);
            console.log(resultFiles)
            const result = await calls.insertCalls({title: title, body: body, user_id: user});
            response.status(201).send(result);
        } catch (error) {
            console.log(error)
            response.status(400).send("Não foi possível abrir o chamado.");
        }
        
        //ioMediator.joinRoom(require.headers.socketid, idCall);   
       
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