import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filenamePath = path.join(__dirname, 'files', 'fileToRead.txt');

    let isNoExistFilename = !fs.existsSync(filenamePath)

    if (isNoExistFilename) {
        throw Error('FS operation failed')
    } else {
        fs.unlink(filenamePath, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("success!");
            }
        });
    }
};

await remove();