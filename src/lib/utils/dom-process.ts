export function smoothScroll(node: HTMLAnchorElement|HTMLButtonElement) {
	node.addEventListener('click', (e) => {
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
export function clickOutSide(node: HTMLElement) {
	interface ClickOutsideDetail {
		target: EventTarget | null;
		node: HTMLElement;
	}

	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent<ClickOutsideDetail>('click_outside', {
					detail: { target: event.target, node }
				})
			);
		}
	};
	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
