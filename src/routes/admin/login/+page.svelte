<script lang="ts">
	import { goto } from '$app/navigation';
	import { ROUTES } from '$lib/constants/routes.constant';
	import { signInWithGoogle } from '$lib/services/firebase';
	import { user } from '$lib/stores/user-store';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($user) {
			return goto(ROUTES.ADMIN_DASHBOARD);
		}
	});
</script>

<button on:click={signInWithGoogle} class="rounded bg-green-500 px-4 py-2 text-white">
	Sign in with Google
</button>
