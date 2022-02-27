import { timeout } from '../utils/timeout.js';

async function toggleAnimation() {
	const techItems = document.querySelectorAll('.tech-animation__float-item');
	for (const techItem of techItems) {
		await timeout(1000);

		techItem.classList.toggle('active');
	}
}

export { toggleAnimation };
