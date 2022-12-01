import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const folderPath = path.join(__dirname, 'files');
    const copyFolderPath = path.join(__dirname, 'files_copy');

    if (fs.existsSync(copyFolderPath)) {
        throw Error('FS operation failed')
    } else {
        fs.cp(folderPath, copyFolderPath, {recursive: true}, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log("success!");
            }
        });
    }
};

copy();