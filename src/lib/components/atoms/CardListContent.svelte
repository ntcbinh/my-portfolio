<script lang="ts">
	export let title: string = '';
	export let items: string[] = [];
</script>

<div class="group relative">
	<div
		class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-30 blur transition duration-300 group-hover:opacity-40"
	></div>

	<div
		class="relative h-full rounded-3xl border border-transparent p-8 transition-all duration-300 ease-linear group-hover:scale-110 group-hover:border-highlightPrimary"
	>
		<h2
			class="mx-auto mb-6 w-full cursor-default rounded-lg bg-blue-400/50 text-center text-lg text-white"
		>
			{title}
		</h2>

		<ul class="h-full space-y-4">
			{#each items as item}
				<li
					class="flex cursor-default items-center text-gray-300 transition-colors hover:text-blue-400/50"
				>
					<span class="mr-4 h-2 w-2 rounded-full bg-blue-400/50"></span>
					{item}
				</li>
			{/each}
		</ul>
	</div>
</div>
