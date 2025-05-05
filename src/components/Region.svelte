<script lang="ts">
	import { checked, type Boss } from "../data";

	interface Props {
		region: string;
		bosses: Boss[];
	}

	const { region, bosses }: Props = $props();

	const attributes = [
		{
			key: "legend",
			color: "bg-amber-400 dark:bg-amber-600",
			tooltip: "This boss is a Legend / Demigod",
		},
		{
			key: "achievement",
			color: "bg-blue-400 dark:bg-sky-600",
			tooltip: "This boss gives an achievement",
		},
	] as const;
</script>

<ul class="space-y-2 break-inside-avoid-column">
	<li class="w-full flex border-b rounded-b-none pb-0.5">
		<h2 class="text-2xl font-bold">{region}</h2>
	</li>

	<ul class="overflow-hidden space-y-1.5">
		{#each bosses as boss}
			{@const bossName = typeof boss === "string" ? boss : boss.name}
			{@const key = `${region}:${bossName}`}

			<li class="flex gap-x-2 items-center last:pb-6">
				<input
					class="size-4 hover:cursor-pointer accent-primary"
					type="checkbox"
					checked={checked.has(key)}
					value={key}
					onchange={(event) => {
						const key = event.currentTarget.value;

						if (checked.has(key)) {
							checked.delete(key);
						} else {
							checked.add(key);
						}
					}}
				/>

				<div class="flex items-center gap-x-2 ml-1">
					<span class="text-sm">{bossName}</span>

					{#each attributes as attr}
						{#if typeof boss === "object" && boss[attr.key]}
							<span
								class={["block rounded-full size-2.5", attr.color]}
								title={attr.tooltip}
							></span>
						{/if}
					{/each}
				</div>
			</li>
		{/each}
	</ul>
</ul>
