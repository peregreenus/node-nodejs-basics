import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256').setEncoding('hex');
    const rs = fs.createReadStream(
        path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    );

    rs.pipe(hash).pipe(stdout);
};

await calculateHash();