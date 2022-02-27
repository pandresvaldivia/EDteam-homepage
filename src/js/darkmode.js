import { $body, $switchBtn, $logo } from './selectors.js';

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

function setColorScheme() {
	if (window.matchMedia) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			$switchBtn.querySelector('input[type=checkbox]').checked = true;
			toggleDarkmode();
		}
	}
}

export { toggleDarkmode, setColorScheme };
