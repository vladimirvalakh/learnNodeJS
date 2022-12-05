import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const folderPath = path.join(__dirname, 'files');

    let isNoExistFilesFolder = !fs.existsSync(folderPath)

    if (isNoExistFilesFolder) {
        throw Error('FS operation failed')
    } else {
        fs.readdir(folderPath, function (err, files) {
            if (err) {
                console.error(err);
            } else {
                if (err) {
                    return console.log('Unable to read folder: ' + err);
                }
                files.forEach(function (file) {
                    console.log(file);
                });
            }
        });
    }
};

await list();