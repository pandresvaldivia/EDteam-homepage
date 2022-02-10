import { $switchBtn } from './selectors.js';
import { toggleDarkmode } from './functions.js';

console.log('hola');

$switchBtn.addEventListener('change', (e) => toggleDarkmode(e));
