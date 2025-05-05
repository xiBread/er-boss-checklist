<script lang="ts">
	import { onMount } from "svelte";
	import { mode, toggleMode } from "mode-watcher";
	import { checked, regions } from "../data";
	import Region from "./Region.svelte";
	import mod from "astro/zod";

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

<div class="absolute flex gap-2 top-4 right-4">
	<button
		class="flex items-center justify-center px-3 py-2 rounded-md border border-border hover:bg-accent hover:cursor-pointer"
		type="button"
		onclick={() => checked.clear()}
	>
		<svg class="fill-foreground size-4" width="32" height="32" viewBox="0 0 256 256">
			<path
				d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z"
			></path>
		</svg>

		<span class="font-medium text-sm ml-2">Reset list</span>
	</button>

	<button
		class="flex items-center justify-center px-3 py-2 rounded-md border border-border hover:bg-accent hover:cursor-pointer"
		type="button"
		onclick={() => toggleMode()}
	>
		{#if mode.current === "light"}
			<svg class="fill-foreground size-4" width="32" height="32" viewBox="0 0 256 256">
				<path
					d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
				></path>
			</svg>
		{:else}
			<svg class="fill-foreground size-4" width="32" height="32" viewBox="0 0 256 256"
				><path
					d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
				></path>
			</svg>
		{/if}

		<span class="font-medium text-sm ml-2">
			Toggle {mode.current === "dark" ? "light" : "dark"} mode
		</span>
	</button>
</div>

<h1 class="py-10 text-center text-3xl">
	<span class="font-bold">{checked.size}</span>
	<span class="text-muted-foreground font-semibold">/ 165</span>
</h1>

<main class="sm:columns-2 columns-1 xl:columns-3 lg:gap-x-8 pb-20">
	{#each Object.entries(regions) as [region, bosses]}
		<Region {region} {bosses} />
	{/each}
</main>
