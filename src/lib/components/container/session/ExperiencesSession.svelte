<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import experiences from '../../../data/experience.json';
	import InView from '../../atoms/with-transition/InView.svelte';

	let selectedCategory = 'All';
	let experiencesContainer: HTMLDivElement;

	const categories = ['All', ...new Set(experiences.map((exp) => exp.category))];

	function filterExperiences() {
		return selectedCategory === 'All'
			? experiences
			: experiences.filter((exp) => exp.category === selectedCategory);
	}

	function handleFilterClick(category: string) {
		selectedCategory = category;
		experiencesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
</script>

<div
	id="experiences"
	class="min-h-screen w-full bg-transparent p-8 text-white"
	bind:this={experiencesContainer}
>
	<div class="mx-auto mb-10 flex w-max flex-col items-end">
		<h4 class="text-center text-[2.2rem] font-[600] text-darkTextColor">Experiences</h4>
		<div class="h-0.5 w-1/2 rounded-full bg-highlightPrimary"></div>
		<div class="mt-1 h-1 w-3/4 rounded-full bg-highlightColor"></div>
	</div>

	<div class="mb-10 flex justify-center space-x-1 sm:space-x-4">
		{#each categories as category}
			<button
				class="text-nowrap rounded-full border border-gray-400 px-5 py-0 text-gray-300 shadow-lg transition
		  duration-300 hover:bg-highlightPrimary/50 hover:text-white sm:py-2.5"
				class:selected={selectedCategory === category}
				on:click={() => handleFilterClick(category)}
			>
				{category}
			</button>
		{/each}
	</div>

	<div class="relative mx-auto max-w-6xl">
		<div
			class="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform rounded-lg bg-gradient-to-b from-highlightPrimary to-blue-300 sm:block"
		></div>

		{#each filterExperiences() as exp, index (exp.title)}
			<div
				class="relative mb-12 flex w-full items-center"
				transition:fly={{ y: 20, duration: 300, delay: index * 10 }}
			>
				<div
					class="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-4 border-white bg-highlightPrimary shadow-lg sm:block"
				></div>

				<div
					class="relative w-full sm:w-[calc(50%-2rem)]"
					class:right={index % 2 === 1}
					class:highlight={index === 0}
					transition:fade
				>
					<InView
						from={index % 2 === 1 ? 'right' : 'left'}
						class="w-full truncate text-wrap rounded-xl border border-gray-300 bg-transparent p-6 shadow-lg backdrop-blur-md transition-all duration-200 ease-in-out sm:text-nowrap "
					>
						<h2 class="text-xl font-bold text-highlightPrimary">{exp.title}</h2>
						<p class="text-gray-300">
							{exp.company} | <span class="text-sm">{exp.duration}</span>
						</p>
						<p class="text-sm text-gray-500">Team Size: {exp.teamSize}</p>

						<h3 class="mt-3 text-sm font-semibold">Responsibilities:</h3>
						<ul class="list-disc pl-5 text-sm text-gray-300">
							{#each exp.responsibilities as responsibility}
								<li>{responsibility}</li>
							{/each}
						</ul>

						<h3 class="mt-3 text-sm font-semibold">Technologies:</h3>
						<p class="text-sm text-gray-300 max-w-full text-wrap">{exp.technologies.join(', ')}</p>

						<h3 class="mt-3 text-sm font-semibold">Tools:</h3>
						<p class="text-sm text-gray-300">{exp.tools.join(', ')}</p>
					</InView>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.selected {
		@apply bg-highlightPrimary/50 text-white;
	}

	.right {
		@apply ml-auto;
	}

	.highlight {
		@apply border-highlightPrimary;
	}
</style>
