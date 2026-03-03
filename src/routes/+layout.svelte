<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { CalendarIcon, CircleUserIcon, MenuIcon, SearchIcon,HeartIcon,CalendarHeart,Book,Navigation } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	let { children } = $props();
	export const ssr = false;

	
</script>
<!-- <div class="container h-full mx-auto flex justify-center items-center "> -->
 <!-- <div class="h-full flex justify-center items-center">
<AppBar class="rounded-xl bg-rose-100 h-18" >
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto] " >
		<AppBar.Lead class="preset-tonal-warning flex items-center">
		</AppBar.Lead>
		<AppBar.Headline class="w-full text-center">
			<a
				class="inline-flex md:flex justify-center items-center gap-2 font-alex text-black
					text-[22px] sm:text-[28px] md:text-[42px] lg:text-[45px]
					leading-none tracking-tight
					relative md:-top-1 md:left-20"
				href="/"
				>
					Saru
					<HeartIcon class="w-[1em] h-[1em]" />
					Sanyog Wedding
				</a>
		</AppBar.Headline>

		<AppBar.Trail class="flex gap-2 z-20 text-black ">
			<a href="/Tidbits" class="btn-icon hover:preset-tonal cursor-pointer" title="Read tidbits about us"><Book class="size-6" /></a>
			<a href="/api/save-the-date" class="btn-icon hover:preset-tonal cursor-pointer" title="Add to calendar"><CalendarHeart class="size-6" /></a>
			<a href="/Navigation" class="btn-icon hover:preset-tonal cursor-pointer" title="View venue location"><Navigation class="size-6" /></a>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

</div> -->




<!-- Flowers box decoration at bottom right - no glow -->
<!-- <div class="fixed bottom-[-100px] right-[-70px] w-70 h-60 bg-[url('/img/flowers-box.png')] bg-no-repeat bg-contain opacity-70 pointer-events-none" style="filter: brightness(1) sepia(0.5) hue-rotate(280deg) saturate(1.2)"></div> -->

<!-- Flowers box decoration at bottom left - no glow -->
<!-- <div class="fixed bottom-[-100px] left-[-50px] w-70 h-60 bg-[url('/img/flowers-box.png')] bg-no-repeat bg-contain opacity-70 pointer-events-none" style="filter: brightness(1) sepia(0.5) hue-rotate(280deg) saturate(1.2)"></div> -->


<div class="min-h-screen bg-[url('/img/red-linen-fabric-texture-background_38607-884.avif')] bg-no-repeat bg-cover flex flex-col justify-center text-center">	
		{#key $page.url.pathname}
		<div in:fade={{ duration: 800 }}>
			<slot />
		</div>
	{/key}	
</div>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
