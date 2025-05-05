<script lang="ts">
	import { onMount } from "svelte";
	import { checked, regions } from "../data";
	import Region from "./Region.svelte";

	onMount(() => {
		const stored: string[] = JSON.parse(localStorage.getItem("checked") ?? "[]");

		for (const key of stored) {
			checked.add(key);
		}
	});

	$effect(() => {
		localStorage.setItem("checked", JSON.stringify(Array.from(checked)));
	});
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
