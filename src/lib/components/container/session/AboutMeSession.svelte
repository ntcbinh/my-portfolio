<script lang="ts">
	import { fly } from 'svelte/transition';
	import AboutMe from './about-me/AboutMe.svelte';
	import InView from '../../atoms/with-transition/InView.svelte';
	import Education from './about-me/Education.svelte';
	import Hobby from './about-me/Hobby.svelte';

	let tabs = ['about_me', 'education', 'hobby'];
	let activeTab = 'about_me';
	let direction = 'right';

	function handleActiveTab(tab: string) {
		const currentIndex = tabs.indexOf(activeTab);
		const newIndex = tabs.indexOf(tab);
		direction = newIndex > currentIndex ? 'right' : 'left';
		activeTab = tab;
	}
</script>

<div
	id="about-me"
	class="flex min-h-screen flex-col justify-center pt-16 transition-all duration-500 lg:pt-8"
>
	<InView from="left" class="mx-auto flex w-max flex-col items-end">
		<h4 class="text-center text-[2.2rem] font-[600] text-darkTextColor">About Me</h4>
		<div class="h-0.5 w-1/2 rounded-full bg-highlightPrimary"></div>
		<div class="mt-1 h-1 w-3/4 rounded-full bg-highlightColor"></div>
	</InView>

	<div class="grid w-full grid-cols-1 gap-0 space-y-10 pt-10 lg:grid-cols-2 lg:gap-[25px] lg:pt-14">
		<InView from="bottom" threshold={0.5}>
			<img
				alt="bn-hand"
				src="/images/hand.jpg"
				class="h-full max-h-[460px] min-h-[460px] w-full rounded-md object-contain"
			/>
		</InView>

		<InView from="top" threshold={0.5}>
			<div class="relative grid w-full grid-cols-3 rounded-full border border-darkTextColor/40">
				<div
					class="absolute top-[50%] h-[90%] w-[33%] translate-y-[-50%] transform rounded-full bg-highlightPrimary/50 transition-all duration-700 sm:h-[85%] {activeTab ===
					'about_me'
						? 'translate-x-[2%]'
						: activeTab === 'education'
							? 'translate-x-[100%]'
							: 'translate-x-[201.4%]'}"
				></div>

				<button
					class="px-4 py-3.5 text-center text-[1rem] font-[400] text-darkTextColor transition-all duration-700"
					class:activeTab={activeTab === 'about_me'}
					on:click={() => handleActiveTab('about_me')}>About me</button
				>
				<button
					class="px-4 py-3.5 text-center text-[1rem] font-[400] text-darkTextColor transition-all duration-700"
					class:activeTab={activeTab === 'education'}
					on:click={() => handleActiveTab('education')}>Education</button
				>
				<button
					class="px-4 py-3.5 text-center text-[1rem] font-[400] text-darkTextColor transition-all duration-700"
					class:activeTab={activeTab === 'hobby'}
					on:click={() => handleActiveTab('hobby')}>Hobby</button
				>
			</div>

			<div class="relative max-h-[398px] overflow-y-auto">
				{#if activeTab === 'about_me'}
					<div
						class="px-2 pt-6 transition-all duration-700"
						in:fly={{ x: direction === 'right' ? 200 : -200, duration: 500 }}
					>
						{#key activeTab}<AboutMe />{/key}
					</div>
				{:else if activeTab === 'education'}
					<div
						class="px-2 pt-6 transition-all duration-700"
						in:fly={{ x: direction === 'right' ? 200 : -200, duration: 500 }}
					>
						{#key activeTab}<Education />{/key}
					</div>
				{:else}
					<div
						class="px-2 pt-6 transition-all duration-700"
						in:fly={{ x: direction === 'right' ? 200 : -200, duration: 500 }}
					>
						{#key activeTab}<Hobby />{/key}
					</div>
				{/if}
			</div>
		</InView>
	</div>
</div>

<style>
	button.activeTab {
		color: var(--highlightPrimary);
	}
</style>
