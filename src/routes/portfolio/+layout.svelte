<script lang="ts">
	import SpeedDial from '$lib/components/atoms/menu/SpeedDial.svelte';
	import Breadcrumb from '$lib/components/atoms/navigation/Breadcrumb.svelte';

	let { children } = $props();
</script>

<Breadcrumb />
{@render children()}
<SpeedDial />
