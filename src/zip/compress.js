import {createGzip} from 'node:zlib';
import pipeline from 'node:stream';

import fs from 'node:fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compress = async () => {
    const filenamePath = path.join(dirname, 'files', 'fileToCompress.txt');
    const filenameZipPath = path.join(dirname, 'files', 'archive.gz');
    const gzip = createGzip();
    const source = fs.createReadStream(filenamePath);
    const destination = fs.createWriteStream(filenameZipPath);

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('Error:', err);
            process.exitCode = 1;
        }
    });
};

await compress();