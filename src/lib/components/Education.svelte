<script>
	import educationDetails from '../data/education.json';
</script>

<section class="mx-auto max-w-3xl rounded-lg text-white shadow-lg">
	<ul class="space-y-6">
		{#each educationDetails as detail}
			<li
				class="relative space-y-2 rounded-lg bg-slate-700/10 p-4 shadow transition hover:scale-105 hover:shadow-lg"
			>
				<span class="rounded {detail.dateClass} px-3 py-1 text-sm font-bold text-black">
					{detail.dateRange}
				</span>
				<h3 class="text-xl font-semibold {detail.titleClass}">
					{detail.title}
				</h3>
				{#if detail.institution}
					<span class="text-lg text-gray-300">{detail.institution}</span>
				{/if}
				{#if detail.gpa}
					<span class="text-sm {detail.gpaClass}">
						{detail.gpaLabel} <span class="font-bold {detail.gpaColor}">{detail.gpa}</span>
					</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>
