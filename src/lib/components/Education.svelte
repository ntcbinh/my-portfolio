<script>
	import educationDetails from '../data/education.json';
</script>

<section class="mx-auto max-w-3xl rounded-lg text-white shadow-lg">
	<ul class="space-y-6">
		{#each educationDetails as { dateRange, title, institution, gpa, gpaLabel }}
			<li
				class="relative space-y-2 rounded-lg bg-slate-700/10 p-4 shadow transition hover:scale-105 hover:shadow-lg"
			>
				<span class="rounded bg-highlightYellow px-3 py-1 text-sm font-bold text-black">
					{dateRange}
				</span>
				<h3 class="text-xl font-semibold text-highlightPrimary">
					{title}
				</h3>
				{#if institution}
					<span class="text-lg text-gray-300">{institution}</span>
				{/if}
				{#if gpa}
					<span class="text-sm text-gray-400">
						{gpaLabel} <span class="text-highlightYellow">{gpa}</span>
					</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>
