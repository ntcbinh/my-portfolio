<script lang="ts">
	import Card from './Card.svelte';

	export let title: string = '';
	export let items: string[] = [];
</script>

<Card {title}>
	<ul class="mt-6 space-y-2 text-gray-300">
		{#each items as item}
			<li class="flex items-center transition-all hover:scale-105 hover:text-teal-400">
				<span class="mr-2 h-2 w-2 rounded-full bg-teal-400/70"></span>
				{item}
			</li>
		{/each}
	</ul>
</Card>
