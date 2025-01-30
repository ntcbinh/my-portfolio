<script>
	import { fulfillmentMessage, hobbies } from '$lib/constants/data';
</script>

<section>
	<h2 class="mb-4 text-xl font-bold">
		I have a diverse range of hobbies that bring me joy and keep me inspired.
	</h2>

	<ul class="list-none p-0">
		{#each hobbies as { icon, title, description }}
			<li class="mb-4 flex items-center gap-2">
				<span class="text-2xl">{icon}</span>
				<div class="text-left">
					<h3 class="text-lg font-bold">{title}</h3>
					<p class="text-base">{description}</p>
				</div>
			</li>
		{/each}
	</ul>

	<p class="mt-4 italic">{fulfillmentMessage}</p>
</section>
