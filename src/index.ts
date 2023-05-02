import { add } from './utils.js';

const app = document.getElementById('app');
app!.innerHTML = `<h1>1 + 1 = ${add(1, 1)}</h1>`;
