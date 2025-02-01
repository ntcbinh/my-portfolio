<script lang="ts">
	import { onMount } from 'svelte';

	export let threshold = 0.1;
	export let from: 'left' | 'right' | 'top' | 'bottom' = 'left';
	export let duration = 500;
	export let debounceTime = 300;

	export { _class as class };
	let _class = '';

	let isVisible = false;
	let element: HTMLElement | null = null;
	$: customClass = ['animate-in transform-none sm:transform opacity-100 sm:opacity-0', _class].join(
		' '
	);
	let debounceTimeout: number | null = null;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (debounceTimeout) clearTimeout(debounceTimeout);
					debounceTimeout = setTimeout(() => {
						isVisible = entry.isIntersecting;
					}, debounceTime);
				}
			},
			{ threshold }
		);

		if (element) observer.observe(element);

		return () => {
			observer.disconnect();
			if (debounceTimeout) clearTimeout(debounceTimeout);
		};
	});
</script>

<div
	bind:this={element}
	class={customClass}
	class:in-show={isVisible}
	class:-translate-x-80={from === 'left'}
	class:translate-x-80={from === 'right'}
	class:-translate-y-80={from === 'top'}
	class:translate-y-80={from === 'bottom'}
	style="--duration: {duration}ms;"
>
	<slot />
</div>

<style>
	.animate-in {
		transition:
			transform var(--duration) ease-out,
			opacity var(--duration) ease-out;
	}

	.in-show {
		@apply !translate-x-0 !translate-y-0 !opacity-100;
	}

	:global(:root) {
		--duration: 500ms;
	}
</style>
