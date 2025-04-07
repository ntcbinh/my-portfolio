<script>
	import { navItems as items } from '$lib/constants/data';
	import { smoothScroll } from '$lib/utils/dom-process';
</script>

<nav
	class="fixed left-4 top-1/3 z-50 my-auto hidden h-96 flex-col-reverse items-center justify-center text-gray-300 sm:flex"
>
	{#each items as item}
		<div
			class="group relative flex justify-center rounded-full shadow-inner shadow-highlightPrimary backdrop-blur-lg"
		>
			<button
				type="button"
				on:click={() => (window.location.href = item.href)}
				class="flex items-center justify-center rounded-full p-2 transition hover:scale-150"
				use:smoothScroll
			>
				<svelte:component this={item.icon} class="h-6 w-6" />
			</button>

			<span
				class="absolute left-12 top-1/2 -translate-y-1/2 scale-0 text-nowrap rounded-full bg-highlightPrimary px-3 py-1 text-xs font-thin text-white opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
			>
				{item.label}
			</span>
		</div>
	{/each}
</nav>
