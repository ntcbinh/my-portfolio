<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte';
	import LanguagePercent from '$lib/components/atoms/LanguagePercent.svelte';
	import InView from '$lib/components/atoms/with-transition/InView.svelte';
	import projects from '$lib/data/projects.json';
	import { camelToKebab } from '$lib/utils/helpers';
</script>

<div
	id="projects"
	class="mt-0 flex min-h-screen flex-col items-center justify-start gap-20 px-6 py-16 text-white sm:mt-[50vh]"
>
	<InView class="mx-auto flex w-max flex-col items-end">
		<h4 class="text-center text-[2.2rem] font-semibold text-darkTextColor">Projects</h4>
		<div class="h-0.5 w-1/2 rounded-full bg-highlightPrimary"></div>
		<div class="mt-1 h-1 w-3/4 rounded-full bg-highlightColor"></div>
	</InView>

	<div class="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
		{#each Object.entries(projects) as [key, value]}
			<Card title={key}>
				<div class="group relative">
					<img
						src={`/images/projects/${camelToKebab(key)}.png`}
						alt={key}
						class="h-auto w-full rounded-xl object-contain shadow-xl transition-all duration-300 ease-in-out group-hover:rounded-xl group-hover:opacity-80"
					/>
					<div
						class="absolute inset-0 h-0 rounded-xl bg-black bg-opacity-50 opacity-0 transition-all duration-300 ease-linear group-hover:h-full group-hover:opacity-100"
					></div>
					<a
						href={value.href}
						target="_blank"
						rel="noopener noreferrer"
						class="absolute left-1/2 top-1/2 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-highlightPrimary to-highlightColor px-3 py-1 text-white opacity-0 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-highlightColor hover:shadow-xl group-hover:opacity-100"
					>
						Live Demo
					</a>
				</div>
				<LanguagePercent slot="description" label="Languages" items={value.description} />
			</Card>
		{/each}
	</div>
</div>
