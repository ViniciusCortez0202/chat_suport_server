import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const convertToFile = (request, response, next)  => {
    let files = [];
    let filesBase64 = request.body.files;
    filesBase64.forEach(element => {
        const mimetype = '.'+element.match(/[^:/]\w+(?=;|,)/)[0];
        element = element.substring(element.indexOf(',')+1);
        const bitmap = new Buffer.from(element, 'base64');
        const name = uuidv4();
        const path = 'public/images/calls/' + name + mimetype;
       fs.writeFile(path, bitmap, 'binary', (err) => {
        if(err){
            response.status(400).send("Não foi possível carregar as imagens");        
        }
        files.push(path)
       });
    });
    request.body.files = files;
    next();
}

export default convertToFile;