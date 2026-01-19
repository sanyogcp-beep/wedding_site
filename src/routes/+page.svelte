<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';
    import { CalendarIcon, CircleUserIcon, MenuIcon, SearchIcon,HeartIcon } from '@lucide/svelte';
    import { goto } from '$app/navigation';

	const slides = [
		// { title: 'Image' , image: "/img/img1.gif"},
		{ title: 'video' , video: "/video/vid1.mp4"},
		// { title: 'Image' , image: ""},
	];

    function handleRSVP() {
        goto('/RSVP');
    }
</script>

<div class="container  mx-auto flex justify-center items-center">
    
    <Carousel class="rounded-xl bg-rose-100 h-full mx-auto justify-center items-center" slideCount={slides.length} slidesPerPage={1} spacing="16px" loop>
        <Carousel.Control class="flex justify-between">
            <!-- <Carousel.PrevTrigger class="btn preset-tonal hover:preset-tonal-secondary">
                <span>&larr;</span>
                <span>Back</span>
            </Carousel.PrevTrigger> -->
            <!-- <Carousel.AutoplayTrigger class="btn preset-tonal ">Toggle Autoplay</Carousel.AutoplayTrigger> -->
            <!-- <Carousel.NextTrigger class="btn preset-tonal hover:preset-tonal-secondary">
                <span>Next</span>
                <span>&rarr;</span>
            </Carousel.NextTrigger> -->
        </Carousel.Control>
        <Carousel.ItemGroup>
            {#each slides as slide, i}
                <Carousel.Item index={i} class="card bg-surface-100-900 h-full p-4 flex justify-center items-center">
                    {#if slide.title === "video"}
                        <video
                            src={slide.video}
                            controls
                            class="w-full h-120 object-cover object-[50%_40%] rounded-lg"
                            autoplay
                            loop
                            muted
                            playsinline
                        ></video>
                    
                    {:else}
                        <!-- <img
                            src={slide.image}
                            alt=""
                            class="card w-full h-full object-cover object-[50%_30%] rounded-lg flex justify-center items-center"
                        /> -->
                    {/if}

                </Carousel.Item>
            {/each}
        </Carousel.ItemGroup>
        <!-- <Carousel.IndicatorGroup>
            <Carousel.Context>
                {#snippet children(carousel)}
                    {#each carousel().pageSnapPoints as _, index}
                        <Carousel.Indicator {index} />
                    {/each}
                {/snippet}
            </Carousel.Context>
        </Carousel.IndicatorGroup> -->
    </Carousel>
</div>
<div class="container mx-auto flex justify-center items-center mt-12">
    <p class="text-[22px] sm:text-[25px] md:text-[48px] lg:text-[50px] font-alex text-black ">Thursday 12th of March</p>
    </div>
<div class="container mx-auto flex justify-center items-center mt-12">
    <p class="text-[17px] sm:text-[23px] md:text-[48px] lg:text-[28px] font-alex text-black ">We can't wait to celebrate with all our favorite people! Don't forget to help us capture the laughter, love, and joy of our big day.</p>
    </div>
<div class="container mx-auto flex justify-center items-center mt-12">
    <button type="button" on:click={handleRSVP} class="btn-icon border-2 border-black px-12 py-4 flex justify-center items-center hover:preset-tonal text-black">RSVP</button>
</div>

