<script>
	import CardListContent from '$lib/components/atoms/CardListContent.svelte';
	import Switch from '$lib/components/atoms/Switch.svelte';
	import InView from '$lib/components/atoms/with-transition/InView.svelte';
	import { skillsText, categorizedSkills } from '$lib/constants/data';

	let showCategorized = false;
</script>

<div
	id="skills"
	class="mt-0 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-white sm:mt-[50vh]"
>
	<InView from="right" class="mx-auto flex w-max flex-col items-end">
		<h4 class="text-center text-[2.2rem] font-semibold text-darkTextColor">Skills</h4>
		<div class="h-0.5 w-1/2 rounded-full bg-highlightPrimary"></div>
		<div class="mt-1 h-1 w-3/4 rounded-full bg-highlightColor"></div>
	</InView>

	<div class="relative mt-6 inline-flex items-center justify-center gap-4">
		<h2 class="border-r-2 border-gray-600 pr-4 text-center text-3xl font-semibold">
			I turn these skills into beautiful web projects
		</h2>
		<Switch
			bind:value={showCategorized}
			offLabel="Show categorized"
			onLabel="Show scroll animation"
			size="md"
			name="showCategorized"
		/>
	</div>

	{#if showCategorized}
		<div class="mt-6 grid w-full grid-cols-1 gap-4 transition-all sm:grid-cols-4">
			{#each Object.entries(categorizedSkills) as [category, skillsList]}
				<CardListContent title={category} items={skillsList} />
			{/each}
		</div>
	{:else}
		<div class="mt-6 w-full space-y-4">
			{#each skillsText as row, index}
				<div class="scroll-wrapper">
					<div class="scroll-content {index % 2 === 0 ? 'scroll-left' : 'scroll-right'}">
						{#each [...row, ...row, ...row] as skill}
							<span
								class="inline-block transform cursor-default rounded-full border border-gray-600 bg-gray-800 px-4 py-1 font-thin text-gray-300 transition-all duration-300 ease-in-out hover:border hover:border-teal-500 hover:text-white"
							>
								{skill}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
