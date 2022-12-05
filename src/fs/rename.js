import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const wrongFilenamePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFilenamePath = path.join(__dirname, 'files', 'properFilename.md');

    let isNoExistWrongFilename = !fs.existsSync(wrongFilenamePath)
    let isExistProperFilename = fs.existsSync(properFilenamePath)

    if (isNoExistWrongFilename || isExistProperFilename) {
        throw Error('FS operation failed')
    } else {
        fs.rename(properFilenamePath, wrongFilenamePath, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("success!");
            }
        });
    }
};

await rename();