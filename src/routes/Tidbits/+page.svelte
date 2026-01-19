<script lang="ts">
	import { Users, Heart, Trash2, Calendar, Sparkles, Plane, Map } from '@lucide/svelte';

	const tidbits = [
		{
			question: 'How did we meet?',
			component: Users
		},
		{
			question: 'Who made the first move? How?',
			component: Heart
		},
		{
			question: "Who's going to take the bin out?",
			component: Trash2
		},
		{
			question: 'What was your most memorable date?',
			component: Calendar
		},
		{
			question: "What's your favourite activity together?",
			component: Sparkles
		},
		{
			question: 'Where are you going for your honeymoon?',
			component: Plane
		},
		{
			question: "What's the most memorable trip you've taken together?",
			component: Map
		}
	];

	let expandedIndex: number | null = null;

	function toggleCard(index: number) {
		expandedIndex = expandedIndex === index ? null : index;
	}
</script>

<div class="w-full max-w-4xl mx-auto p-6">
	<h1 class="text-[32px] md:text-[48px] font-alex text-black mb-4 text-center">Tidbits About Us</h1>
	<p class="text-center text-gray-700 mb-8 text-sm md:text-base">Click on a card to reveal our answers!</p>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each tidbits as tidbit, index (index)}
			<button
				on:click={() => toggleCard(index)}
				class="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-xl p-6 text-left hover:shadow-lg hover:border-rose-400 transition-all cursor-pointer"
			>
				<div class="flex items-start gap-4">
					<div class="text-rose-500">
						<svelte:component this={tidbit.component} size={32} />
					</div>
					<div class="flex-1">
						<p class="text-lg md:text-xl font-semibold text-gray-800">{tidbit.question}</p>
						{#if expandedIndex === index}
							<div class="mt-4 pt-4 border-t border-rose-200">
								<p class="text-gray-700 italic">
									{#if index === 0}
										We met at a wonderful moment in our lives...
									{:else if index === 1}
										One of us took a leap of faith...
									{:else if index === 2}
										That's a decision we're still figuring out!
									{:else if index === 3}
										Every moment with you is memorable...
									{:else if index === 4}
										We love spending time together...
									{:else if index === 5}
										We're looking forward to our dream destination...
									{:else if index === 6}
										Our travels have been unforgettable...
									{/if}
								</p>
							</div>
						{/if}
					</div>
				</div>
			</button>
		{/each}
	</div>

	<div class="mt-12 text-center">
		<a
			href="/"
			class="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-8 rounded-lg transition"
		>
			Back Home
		</a>
	</div>
</div>

<style>
	:global(body) {
		background-color: #fafafa;
	}
</style>
