export function smoothScroll(node: HTMLAnchorElement) {
	node.addEventListener('click', (e: MouseEvent) => {
		e.preventDefault();
		const targetId = node.getAttribute('href')?.slice(1);
		if (targetId) {
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
}
