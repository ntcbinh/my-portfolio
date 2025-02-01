<script lang="ts">
	import AnchorButton from './AnchorButton.svelte';
	import { clickOutSide } from '$lib/utils/dom-process';
	import { getSpeedDialPosition } from '$lib/utils/helpers';
	import { navItems as speedDialActions } from '$lib/constants/data';

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<div class="fixed bottom-6 right-6 z-50">
	<div class="relative h-fit w-fit">
		{#each speedDialActions as action, i}
			{@const pos = getSpeedDialPosition(i, speedDialActions)}
			<AnchorButton {action} {pos} {isOpen} />
		{/each}

		<button
			on:click={toggleMenu}
			on:mouseover={toggleMenu}
			on:focus={toggleMenu}
			on:click_outside={() => (isOpen = false)}
			use:clickOutSide
			class="absolute bottom-0 right-0 z-50 flex h-14 w-14 animate-pulse cursor-pointer items-center justify-center rounded-full border-none text-white shadow-lg outline-none transition-all duration-300 hover:opacity-70"
		>
			<img src="/favicon.png" alt="logo" />
		</button>
	</div>
</div>
