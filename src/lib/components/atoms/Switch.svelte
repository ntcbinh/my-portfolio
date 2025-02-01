<script lang="ts">
	import { writable } from 'svelte/store';

	let checked = writable(false);

	export let value = false;
	export let onLabel = '';
	export let offLabel = '';
	export let disabled = false;
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let name = '';

	function handleToggle() {
		if (!disabled) {
			checked.set(!$checked);
		}
	}

	$: value = $checked;

	const sizes = {
		sm: {
			switch: 'w-8 h-4',
			thumb: 'w-2 h-2',
			translate: 'translate-x-2'
		},
		md: {
			switch: 'w-11 h-6',
			thumb: 'w-4 h-4',
			translate: 'translate-x-4'
		},
		lg: {
			switch: 'w-14 h-7',
			thumb: 'w-5 h-5',
			translate: 'translate-x-5'
		}
	};
</script>

<div class="inline-flex items-center">
	<button
		type="button"
		role="switch"
		aria-checked={$checked}
		aria-label={$checked ? onLabel : offLabel}
		{disabled}
		class={`
        relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent
        transition-colors duration-200 ease-in-out
        ${disabled ? 'cursor-not-allowed opacity-50' : ''}
        ${$checked ? 'bg-highlightPrimary' : 'bg-gray-200'}
        ${sizes[size].switch}
      `}
		on:click={handleToggle}
	>
		<span
			class={`
		  pointer-events-none my-auto ml-1 inline-block transform rounded-full
		  bg-white shadow ring-0 transition duration-200 ease-in-out
		  ${$checked ? sizes[size].translate : 'translate-x-0'}
		  ${sizes[size].thumb}
		`}
			aria-hidden="true"
		></span>
	</button>
	{#if onLabel && offLabel}
		<span class="ml-3 text-sm {disabled ? 'text-gray-500' : 'text-white'}">
			{$checked ? onLabel : offLabel}
		</span>
	{/if}
</div>

{#if name}
	<input type="hidden" {name} value={$checked} />
{/if}
