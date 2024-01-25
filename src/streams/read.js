import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const rs = fs.createReadStream(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        { encoding: 'utf8' }
    );

    rs.pipe(stdout);
};

await read();