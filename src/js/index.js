import { $switchBtn, $search, $burgerBtn } from './selectors.js';
import { setColorScheme, toggleDarkmode } from './darkmode.js';
import { closeSearch, openSearch, toggleSearch } from './components/search.js';
import { menuHandle, resetMenu } from './components/menu.js';
import { toggleAnimation } from './components/animation.js';

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
