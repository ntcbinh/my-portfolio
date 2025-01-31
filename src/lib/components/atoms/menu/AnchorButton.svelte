<script>
	import { smoothScroll } from '$lib/utils/dom-process';

	export let action;
	export let pos;
	export let isOpen;
</script>

<a
	use:smoothScroll
	href={action.href}
	class="absolute bottom-0 right-1 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-transparent text-yellow-50 shadow-md transition-all duration-300 hover:opacity-70"
	style="transform: translate({isOpen ? pos.x : 0}px, {isOpen ? pos.y : 0}px);"
	class:opacity-0={!isOpen}
>
	<svelte:component this={action.icon} class="h-8 w-8 font-thin" />
</a>
