<script lang="ts">
	import { HomeIcon } from 'heroicons-svelte/24/solid';
	import '../app.css';
	import { smoothScroll } from '$lib/utils/dom-process';
	let { children } = $props();
</script>

<div
	class="smooth-scroll flex min-h-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black text-white"
>
	<div class="fixed inset-0 h-full bg-gradient-to-br from-blue-900 via-black to-gray-900"></div>

	<div class="absolute inset-0">
		<div
			class="left-1/5 absolute top-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 blur-3xl"
		></div>
		<div
			class="absolute left-1/3 top-3/4 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 opacity-30 blur-2xl"
		></div>
		<div
			class="top-1/5 absolute right-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-red-800 to-red-200 opacity-30 blur-2xl"
		></div>
	</div>

	<div class="relative z-10 h-full p-10">
		{@render children()}
	</div>
	<a
		href="#home"
		class="fixed bottom-5 right-5 z-20 h-fit w-fit animate-pulse cursor-pointer hover:opacity-80"
		use:smoothScroll
	>
		<HomeIcon class="h-10 w-10 text-white" />
	</a>
</div>
