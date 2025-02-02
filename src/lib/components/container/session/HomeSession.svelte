<script lang="ts">
	import { getRandomIcon } from '$lib';
	import { iconSKills } from '$lib/constants/data';
	import PERSONAL_INFO from '../../../data/personal-info.json';
	import { onMount, onDestroy } from 'svelte';
	import InView from '../../atoms/with-transition/InView.svelte';

	let currentIcon: (typeof iconSKills)[0] = iconSKills[0];
	let intervalId: number | null = null;

	const startIconAnimation = () => {
		currentIcon = getRandomIcon(currentIcon);
		intervalId = setInterval(() => {
			currentIcon = getRandomIcon(currentIcon);
		}, 2000);
	};

	onMount(() => {
		startIconAnimation();
	});

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div
	id="home"
	class="relative flex min-h-screen flex-col items-center justify-between gap-12 transition-all duration-500 sm:gap-16 lg:flex-row lg:gap-0"
>
	<InView from="left" class="relative w-full pt-12 lg:w-[60%] lg:pt-0">
		<p class="text-[1.5rem] font-[500] text-darkDisableColor">
			Hi, I'm {PERSONAL_INFO.NAME}
		</p>

		<h1
			class="overflow-hidden text-[2.5rem] font-[700] leading-[45px] text-darkTextColor sm:text-[3rem] sm:leading-[60px]"
		>
			{PERSONAL_INFO.TITLE}
		</h1>

		<p class="mt-2 w-full text-[1rem] text-darkDisableColor sm:w-[70%]">
			{PERSONAL_INFO.DESCRIPTION}
		</p>

		{#each iconSKills as icon (icon.name)}
			{#if currentIcon?.name === icon.name}
				<img alt={icon.name} {...icon} />
			{/if}
		{/each}
	</InView>

	<InView
		from="right"
		class="relative flex w-[80%] flex-col items-end sm:w-[90%] sm:items-center lg:w-[40%] lg:items-end"
	>
		<div
			class="absolute -left-10 top-10 flex w-max animate-pulse flex-col items-center justify-center rounded-full bg-slate-900 px-4 py-1 shadow-sm transition-all duration-300 sm:top-[50px] sm:px-8 sm:py-2.5 md:left-8"
		>
			<h6 class="text-[1.2rem] font-[600] leading-[35px] text-highlightPrimary sm:text-[1.8rem]">
				BE
			</h6>
			<p class="text-[0.7rem] text-darkDisableColor sm:text-[0.9rem]">
				{PERSONAL_INFO.TECH.BE}
			</p>
		</div>
		<div
			class="absolute -right-14 -top-8 flex h-fit w-max animate-bounce flex-col items-center justify-center rounded-full bg-slate-900 px-4 py-1 shadow-sm transition-all duration-300 sm:bottom-[220px] sm:px-8 sm:py-2.5 lg:right-80 lg:top-52 lg:animate-pulse"
		>
			<h6 class="text-[1.2rem] font-[600] leading-[35px] text-highlightPrimary sm:text-[1.8rem]">
				FE
			</h6>
			<p class="text-[0.7rem] text-darkDisableColor sm:text-[0.9rem]">
				{PERSONAL_INFO.TECH.FE}
			</p>
		</div>
		<div
			class="absolute -left-[15%] bottom-[20px] flex w-max animate-bounce flex-col items-center justify-center rounded-full bg-slate-900 px-4 py-1 shadow-sm transition-all duration-300 sm:bottom-[50px] sm:animate-pulse sm:px-8 sm:py-2.5 md:left-8"
		>
			<h6 class="text-[1.2rem] font-[600] leading-[35px] text-highlightColor sm:text-[1.8rem]">
				{PERSONAL_INFO.NUM_OF_YEAR_EXPERIENCE}+
			</h6>
			<p class="text-[0.7rem] text-darkDisableColor sm:text-[0.9rem]">Years of experience</p>
		</div>

		<img
			alt="bn"
			src="/images/bn.png"
			class="w-96 border-collapse rounded-full border border-double border-green-700 bg-contain"
		/>
	</InView>
</div>
