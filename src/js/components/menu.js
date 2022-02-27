import { $burgerBtn, $menu } from '../selectors.js';

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

export { menuHandle, resetMenu };
