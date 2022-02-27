import {
	$body,
	$search,
	$switchBtn,
	$searchIcon,
	$logo,
	$burgerBtn,
	$menu,
} from './selectors.js';
import { timeout } from './utils/timeout.js';

function toggleDarkmode() {
	const $darkModeInput = $switchBtn.querySelector(
		'input[type=checkbox]'
	).checked;

	if ($darkModeInput) {
		$body.classList.add('darkmode');
		$switchBtn.ariaLabel = 'Desactivar modo oscuro';
		$logo.src = './src/assets/images/logo-alt.svg';
		return;
	}

	$body.classList.remove('darkmode');
	$switchBtn.ariaLabel = 'Activar modo oscuro';
	$logo.src = './src/assets/images/logo.svg';
}

function openSearch() {
	$search.classList.add('search--open');
	$search.querySelector('.search__input').focus();
	$switchBtn.style.display = 'none';
	toggleSearch();
}

function closeSearch() {
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

function setColorScheme() {
	if (window.matchMedia) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			$switchBtn.querySelector('input[type=checkbox]').checked = true;
			toggleDarkmode();
		}
	}
}

function menuHandle() {
	const isPressed = $burgerBtn.classList.toggle('is-pressed');

	if (isPressed) {
		$menu.classList.add('is-visible');
		$burgerBtn.ariaPressed = true;
		$burgerBtn.ariaExpanded = true;
		$burgerBtn.ariaLabel = 'Contraer menu';
		return;
	}

	$menu.classList.remove('is-visible');
	$burgerBtn.ariaPressed = false;
	$burgerBtn.ariaExpanded = false;
	$burgerBtn.ariaLabel = 'Expandir menu';
}

function resetMenu() {
	if ($burgerBtn.classList.contains('is-pressed')) {
		$burgerBtn.classList.remove('is-pressed');
		$menu.classList.remove('is-visible');
	}
}

export {
	toggleDarkmode,
	openSearch,
	toggleSearch,
	closeSearch,
	toggleAnimation,
	setColorScheme,
	resetMenu,
	menuHandle,
};
