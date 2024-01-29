import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import os from 'os';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const cpusLen = os.cpus().length;
    const logs = {};

    for (let i = 0; i < cpusLen; i++) {
        const worker = new Worker(workerPath, { workerData: `${i + 10}` });
        worker.on('message', (msg) => logs[i] = { status: 'resolved', data: msg });
        worker.on('error', () => logs[i] = { status: 'error', data: null });
        worker.on('exit', () => {
            if (i === cpusLen - 1) console.log(Object.values(logs));
        });
    }
};

await performCalculations();
