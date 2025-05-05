<script lang="ts">
	import { checked, regions } from "../data";
	import Region from "./Region.svelte";
</script>

<h1 class="py-10 text-center text-3xl">
	<span class="font-bold">{checked.size}</span>
	<span class="text-muted-foreground font-semibold">/ 165</span>
</h1>

<main class="sm:columns-2 columns-1 xl:columns-3 lg:gap-x-8 pb-20">
	{#each Object.entries(regions) as [region, bosses]}
		<Region {region} {bosses} />
	{/each}
</main>
