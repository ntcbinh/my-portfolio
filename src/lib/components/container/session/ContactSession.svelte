<script lang="ts">
	import { env } from '$env/dynamic/public';
	import InView from '$lib/components/atoms/with-transition/InView.svelte';
	import { iconContacts } from '$lib/constants/data';
	import { downloadPDF } from '$lib/utils/helpers';
	import { EyeIcon } from 'heroicons-svelte/20/solid';
	import { ArrowDownTrayIcon } from 'heroicons-svelte/24/outline';
	let isShowCV = false;
</script>

<div
	id="contacts"
	class="mt-0 flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-16 text-white sm:mt-[50vh]"
>
	<InView class="mx-auto flex w-max flex-col items-end">
		<h4 class="text-center text-[2.2rem] font-semibold text-darkTextColor">Keep In Touch.</h4>
		<div class="h-0.5 w-1/2 rounded-full bg-highlightPrimary"></div>
		<div class="mt-1 h-1 w-3/4 rounded-full bg-highlightColor"></div>
	</InView>
	<InView from="right">Feel free to get in touch and talk more about your projects.</InView>

	<div class="mx-auto inline-flex w-full justify-center gap-3">
		{#each iconContacts as { icon, href }}
			<a
				class="decoration-none w-fit rounded-md border p-1.5 hover:scale-105 hover:bg-highlightPrimary/20 hover:opacity-80"
				{href}
				target="_blank"
				rel="noreferrer"
			>
				<svelte:component this={icon} width={24} height={24} />
			</a>
		{/each}
	</div>
	<div class="flex flex-col gap-[15px] sm:flex-row sm:items-center">
		{#if !isShowCV}
			<button
				type="button"
				class="button-gradient-primary inline-flex items-center hover:scale-105"
				on:click={() => (isShowCV = !isShowCV)}
			>
				View CV
				<EyeIcon class="ml-2 h-4 w-4" />
			</button>
		{:else}
			<button
				type="button"
				class="button-gradient-primary inline-flex items-center hover:scale-105"
				on:click={() => downloadPDF('/pdf/cv.pdf', 'cv.pdf')}
			>
				Download CV
				<ArrowDownTrayIcon class="ml-2 h-4 w-4 animate-bounce" />
			</button>
		{/if}
		<a
			href={`mailto:${env.PUBLIC_EMAIL_LINK}`}
			target="_blank"
			rel="noreferrer"
			class="button-outline"
		>
			Hire Me
		</a>
	</div>
	{#if isShowCV}
		<iframe
			src="/pdf/cv.pdf#toolbar=0"
			class="h-[80vh] w-fit min-w-[50vw] sm:h-[90vh]"
			style="border: none;"
			title="CV"
		></iframe>
	{/if}
</div>
