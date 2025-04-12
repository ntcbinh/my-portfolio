<script lang="ts">
	import { authHandlers } from '$lib/stores/auth';

	const handleLogOut = async () => {
		await authHandlers.logout();
	};
</script>

<h1>Welcome to Dashboard</h1>
<button on:click={handleLogOut} type="button"> Logout </button>
