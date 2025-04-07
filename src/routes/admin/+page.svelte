<script lang="ts">
	import { onMount } from 'svelte';
	import { user } from '$lib/stores/user-store';
	import { goto } from '$app/navigation';
	import { ROUTES } from '$lib/constants/routes.constant';
	import { logout } from '$lib/services/firebase';

	onMount(() => {
		const unsubscribe = user.subscribe((currentUser) => {
      if (!currentUser) {
        goto(ROUTES.ADMIN_LOGIN);
      }
    });
    return () => {
      unsubscribe();
    };
	});

  async function handleLogout() {
    await logout();
    return goto(ROUTES.ADMIN_LOGIN);
  }

</script>

{#if $user}
	<p>Welcome, {$user.displayName}</p>
  <button on:click={handleLogout} class="bg-red-500 text-white px-4 py-2 rounded">
    Logout
  </button>
{/if}
