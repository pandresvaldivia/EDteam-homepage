import { $switchBtn, $search, $burgerBtn } from './selectors.js';
import {
	toggleDarkmode,
	openSearch,
	toggleSearch,
	closeSearch,
	toggleAnimation,
	setColorScheme,
	resetMenu,
	menuHandle,
} from './functions.js';

document.addEventListener('DOMContentLoaded', setColorScheme);

$switchBtn.addEventListener('change', (e) => toggleDarkmode(e));

$search.addEventListener('click', openSearch);

$search.addEventListener('input', (e) => toggleSearch(e));

$search.addEventListener('focusout', closeSearch);

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 1024 && resetMenu();
});

toggleAnimation();

setInterval(() => {
	toggleAnimation();
}, 10000);
