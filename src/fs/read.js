import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filenamePath = path.join(__dirname, 'files', 'fileToRead.txt');

    let isNoExistFilename = !fs.existsSync(filenamePath)

    if (isNoExistFilename) {
        throw Error('FS operation failed')
    } else {
        fs.readFile(filenamePath, 'utf8', function (err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    }
};

await read();