<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { auth } from '$lib/firebase/firebase';
	import { authMiddleware } from '$lib/middleware/auth';

	let { children } = $props();

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async () => {
			await authMiddleware(window.location.pathname);
		});
		return unsubscribe;
	});
</script>

<div
	class="smooth-scroll relative flex min-h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black text-white"
>
	<div
		class="fixed inset-0 h-full w-screen bg-gradient-to-br from-blue-900 via-black to-gray-900"
	></div>

	<div class="absolute inset-0 w-full">
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
	<div class="relative z-10 ml-auto h-full w-full p-4 sm:w-[calc(100%-2.5rem)] sm:p-10">
		{@render children()}
	</div>
</div>
