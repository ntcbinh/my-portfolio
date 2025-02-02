<script context="module">
	export interface ILanguage {
		name: string;
		percentage: number;
		color: string;
	}
</script>

<script lang="ts">
	export let label: string = '';
	export let items: Array<ILanguage> = [];
</script>

<div class="mt-5 flex flex-col gap-4 text-white">
	<h2 class="text-2xl font-bold">{label}</h2>

	<div class="flex h-2 items-center overflow-hidden rounded-full bg-gray-300">
		{#each items as item}
			<div
				class="inline-block h-full"
				style="width: {item.percentage}%; background-color: {item.color};"
			></div>
		{/each}
	</div>

	<div class="gap-auto grid grid-cols-2">
		{#each items as item}
			<div class="flex items-center gap-2">
				<span class="h-3 w-3 rounded-full" style="background-color: {item.color};"></span>
				<span class="font-thin">{item.name}</span>
				<span class="text-xs font-thin text-gray-400">{item.percentage}%</span>
			</div>
		{/each}
	</div>
</div>
