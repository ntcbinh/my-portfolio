<script lang="ts">
	export let title: string = '';

	let card: HTMLElement;
	let x = 0;
	let y = 0;

	function handleMouseMove(event: MouseEvent) {
		if (!card) return;

		const rect = card.getBoundingClientRect();
		x = event.clientX - rect.left;
		y = event.clientY - rect.top;

		card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(45, 212, 191, 0.15), transparent)`;
	}

	function handleMouseLeave() {
		if (card) {
			card.style.backgroundImage = 'none';
		}
	}
</script>

<div
	bind:this={card}
	class="relative w-full cursor-default rounded-2xl border border-teal-500/30 bg-gray-800/80 p-6 shadow-lg transition hover:scale-105"
	on:mousemove={handleMouseMove}
	on:mouseleave={handleMouseLeave}
	role="region"
	aria-label="Card content"
>
	<div class="absolute -top-3 left-4 rounded-md bg-teal-900 px-4 py-1 font-semibold text-white">
		{title}
	</div>
	<slot />
	<slot name="description" />
</div>
