import { $body, $search, $switchBtn, $searchIcon } from './selectors.js';
import { timeout } from './utils/timeout.js';

function toggleDarkmode(e) {
	e.target.checked
		? $body.classList.add('darkmode')
		: $body.classList.remove('darkmode');
}

function openSearch() {
	$search.classList.add('search--open');
	$search.querySelector('.search__input').focus();
	$switchBtn.style.display = 'none';
	toggleSearch();
}

function closeSearch() {
	console.log('out');
	$search.classList.remove('search--open');
	$switchBtn.style.display = 'block';
	$searchIcon.style.display = 'block';
}

function toggleSearch() {
	$search.querySelector('.search__input').value !== ''
		? ($searchIcon.style.display = 'none')
		: ($searchIcon.style.display = 'block');
}

async function toggleAnimation() {
	const techItems = document.querySelectorAll('.tech-animation__float-item');
	for (const techItem of techItems) {
		await timeout(1000);

		techItem.classList.toggle('active');
	}
}

export {
	toggleDarkmode,
	openSearch,
	toggleSearch,
	closeSearch,
	toggleAnimation,
};
