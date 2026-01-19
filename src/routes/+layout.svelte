<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { CalendarIcon, CircleUserIcon, MenuIcon, SearchIcon,HeartIcon,CalendarHeart,Book,Navigation } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	let { children } = $props();
</script>
<!-- <div class="container h-full mx-auto flex justify-center items-center "> -->
 <div class="h-full flex justify-center items-center">
<AppBar class="rounded-xl bg-rose-100 h-18" >
	<AppBar.Toolbar class="grid-cols-[auto_1fr_auto] " >
		<AppBar.Lead class="preset-tonal-warning flex items-center">
		</AppBar.Lead>
		<AppBar.Headline class="w-full text-center">
			<p class="text-[23px] sm:text-[25px] md:text-[48px] lg:text-[50px] font-alex inline-flex justify-center items-center gap-2 text-black relative md:-top-2 md:left-20">Saru<HeartIcon class=""/>Sanyog Wedding</p>
		</AppBar.Headline>

		<AppBar.Trail class="flex gap-2 text-black ">
			<a href="/Tidbits" class="btn-icon hover:preset-tonal cursor-pointer" title="Read tidbits about us"><Book class="size-6" /></a>
			<a href="/api/save-the-date" class="btn-icon hover:preset-tonal cursor-pointer" title="Add to calendar"><CalendarHeart class="size-6" /></a>
			<a href="/Navigation" class="btn-icon hover:preset-tonal cursor-pointer" title="View venue location"><Navigation class="size-6" /></a>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>

</div>

<div class="min-h-screen flex justify-center relative">
    <div class="bg-white rounded-xl shadow-xl w-[100%] max-w-[1600px] p-4 relative z-10">
        {@render children()}
    </div>
</div>

<!-- Flowers box decoration at bottom right - no glow -->
<div class="fixed bottom-[-100px] right-[-70px] w-70 h-60 bg-[url('/img/flowers-box.png')] bg-no-repeat bg-contain opacity-70 pointer-events-none" style="filter: brightness(1) sepia(0.5) hue-rotate(280deg) saturate(1.2)"></div>

<!-- Flowers box decoration at bottom left - no glow -->
<div class="fixed bottom-[-100px] left-[-50px] w-70 h-60 bg-[url('/img/flowers-box.png')] bg-no-repeat bg-contain opacity-70 pointer-events-none" style="filter: brightness(1) sepia(0.5) hue-rotate(280deg) saturate(1.2)"></div>




<!-- <svelte:head><link rel="icon" href={favicon} /></svelte:head> -->
