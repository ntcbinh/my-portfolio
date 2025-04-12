<script>
	import { authHandlers } from '$lib/stores/auth';

	let authenticating = false;

	async function handleAuthenticate() {
		if (authenticating) {
			return;
		}
		authenticating = true;

		try {
			await authHandlers.login();
		} catch (err) {
			console.log('There was an auth error', err);
			authenticating = false;
		}
	}
</script>

<button on:click={handleAuthenticate} type="button">
	{#if authenticating}
		<i class="fa-solid fa-spinner loadingSpinner"></i> Loading...
	{:else}
		Login with Google
	{/if}
</button>
