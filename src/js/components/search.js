import { $search, $searchIcon, $options } from '../selectors.js';

function openSearch() {
	$search.classList.add('search--open');
	$options.classList.add('menu--search');
	$search.querySelector('.search__input').focus();
	toggleSearch();
}

function closeSearch() {
	$search.classList.remove('search--open');
	$options.classList.remove('menu--search');
	$searchIcon.style.display = 'block';
}

function toggleSearch() {
	$search.querySelector('.search__input').value !== ''
		? ($searchIcon.style.display = 'none')
		: ($searchIcon.style.display = 'block');
}

export { openSearch, closeSearch, toggleSearch };
