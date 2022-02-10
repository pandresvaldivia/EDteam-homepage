import { $body } from './selectors.js';

function toggleDarkmode(e) {
	e.target.checked
		? $body.classList.add('darkmode')
		: $body.classList.remove('darkmode');
}

export { toggleDarkmode };
