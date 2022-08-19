import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { promisify } from 'util';

const convertToFile = (request, response, next) => {
    let files = [];
    let filesPath = [];
    let filesBase64 = request.body.files;
    const promiseWriteFile = promisify(fs.writeFile);
    for (let element of filesBase64) {
        const mimetype = '.' + element.match(/[^:/]\w+(?=;|,)/)[0];
        element = element.substring(element.indexOf(',') + 1);
        const bitmap = new Buffer.from(element, 'base64');
        const name = uuidv4();
        const path = 'public/images/calls/' + name + mimetype;
        files.push(promiseWriteFile(path, bitmap, 'binary'));
        filesPath.push({
            path: path,
            type: mimetype
        })
    }
        Promise.all(files).then((data) => {
        response.locals.files = filesPath;
        next();
    }).catch((err) => {
        response.status(400).send("Não foi possível carregar as imagens");
    })
}

export default convertToFile;