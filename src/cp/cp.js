import cp from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cpPath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = cp.fork(cpPath, args, {
        stdio: ['pipe', 'pipe', 'ipc']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(process.argv.slice(2));
