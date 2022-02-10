import { $switchBtn, $search } from './selectors.js';
import {
	toggleDarkmode,
	openSearch,
	toggleSearch,
	closeSearch,
	toggleAnimation,
} from './functions.js';

$switchBtn.addEventListener('change', (e) => toggleDarkmode(e));

$search.addEventListener('click', openSearch);

$search.addEventListener('input', (e) => toggleSearch(e));

$search.addEventListener('focusout', closeSearch);

toggleAnimation();

setInterval(() => {
	toggleAnimation();
}, 10000);
