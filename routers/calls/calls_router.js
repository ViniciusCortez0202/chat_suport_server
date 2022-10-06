import CallsData from '../../data/calls.js';
import convertToFile from './../files/file_convert.js';
import connection from './../../data/connection.js';
import FilesData from './../../data/files.js';
import transaction from '../../data/util/transaction.js';

const callsRouters = (router, ioMediator) => {

    router.post('/open', convertToFile, async (require, response) => {

        const title = require.body.title;
        const body = require.body.body;
        const user = require.body.user_id;
        const files = response.locals.files;

        try {
            await transaction({ title: title, body: body, user: user, files: files }, _createCall)
            response.status(201).send("Chamado criado. Atenderemos assim que possível");
        } catch (error) {
            console.log(error)
            response.status(400).send("Não foi possível abrir o chamado.");
        }
    });

    router.get('/all/:status?', async (require, response) => {
        const calls = new CallsData(connection);
        try {
            const result = await calls.selectCalls();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send("Not found");
        }
    });

    router.patch('/close', async (require, response) => {

    });


    return router;
}

const _createCall = async ({ title, body, user, files }) => {
    const calls = new CallsData(connection);
    const filesData = new FilesData(connection);

    try {
        const resultFiles = await filesData.insertFiles(files);
        const resultCall = await calls.insertCalls({ title: title, body: body, user_id: user });
        await calls.insertCallsFiles(resultCall.insertId, resultFiles.insertId, resultFiles.affectedRows);
    } catch (error) {
        throw error;
    }
}

export default callsRouters;