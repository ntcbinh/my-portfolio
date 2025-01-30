<script lang="ts">
	import { iconContacts, PERSONAL_INFO } from '$lib/constants/data';
</script>

<div class="whitespace-pre-line">
	{@html PERSONAL_INFO.ABOUT_ME}
</div>
<div class="inline-flex w-full gap-3 py-5">
	{#each iconContacts as { icon, href }}
		<a
			class="decoration-none w-fit rounded-md border p-1.5 hover:bg-highlightPrimary/20 hover:opacity-80"
			{href}
			target="_blank"
			rel="noreferrer"
		>
			<svelte:component this={icon} width={24} height={24} />
		</a>
	{/each}
</div>
