<script lang="ts">
	import { Carousel } from '@skeletonlabs/skeleton-svelte';
    import { CalendarIcon, CircleUserIcon, MenuIcon, SearchIcon,HeartIcon } from '@lucide/svelte';
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition';

    let envelopeImg; // this will hold the <img> element

    // paths for the two open-state images
    const openImage1 = "/img/envelop_open_image_1.png";
    const openImage2 = "/img/envelop_open_image_2.png";

    function handleRSVP() {
        goto('/RSVP');
    }
    let isOpen = $state(false);
    let hoverCard = $state(false);
    let hoverticket = $state(false);
    // auto-pop the card when envelope opens
    $effect(() => {
        if (isOpen) {
            let popCount = 0;
            const popInterval = setInterval(() => {
                hoverCard = popCount % 2 === 0;
                popCount++;
                if (popCount >= 2) clearInterval(popInterval); // pop 3 times (6 toggles)
            }, 300);
        }
    });

	function toggleEnvelope() {
		isOpen = !isOpen;
        console.log(envelopeImg.height);
    }

</script>

<div class="mx-auto w-[clamp(320px,90vw,850px)] relative" >

  <!-- Envelope Image (clickable) -->
  <img
    src="/img/envelop_image.png"
    class="envelope w-full h-auto transition-all object-top duration-500 cursor-pointer"
    class:opacity-0={isOpen}
    class:pointer-events-none={isOpen}
    bind:this={envelopeImg}
    in:fade={{ duration: 800 }}
    on:click={toggleEnvelope}
  />

  {#if isOpen}
    <!-- background open image (behind the card) -->
    <img
      src={openImage2}
      alt="open background"
      class="absolute inset-0 w-full h-full object-cover z-0"
      in:fade={{ duration: 600 }}
    />

    <!-- photo card in middle layer -->
    <!-- <div 
      class="absolute inset-0 flex items-center justify-center pointer-events-none z-12" 
    >
      
    </div> -->

    <div 
      class="absolute inset-0 flex items-center justify-center pointer-events-none z-10" 
    >
        <div class="bg-white bg-opacity-90 p-4 rounded-lg pointer-events-auto shadow-lg w-[clamp(6rem,15vw,20rem)] rotate-5 translate-x-[clamp(80px,37vw,280px)] transition-transform duration-300"
            class:scale-110={hoverCard}
            class:-translate-y-4={hoverCard}
            on:mouseenter={() => hoverCard = true}
            on:mouseleave={() => hoverCard = false}
            out:fade={{ duration: 100 }}
        >
            <img src="/img/photo_card.png" alt="Photo card" class="w-full h-auto object-fit max-h-[80vh]" />
        </div>
        <div class="relative p-4 rounded-lg pointer-events-auto w-[clamp(6rem,10vw,12rem)] -rotate-5 translate-x-[clamp(-50px,50vw,200px)] rotate-80 transition-transform duration-300 cursor-pointer pointer-events-auto"
        on:mouseenter={() => hoverticket = true}
        on:mouseleave={() => hoverticket = false}
        on:click={handleRSVP}
        class:scale-110={hoverticket}
        class:-translate-y-4={hoverticket}
        >
        <img src="/img/ticket.png" alt="Ticket" class="w-full h-auto object-fit max-h-[80vh]" />
        </div>
    </div>

    <!-- foreground open image on top of card -->
    <img
      src={openImage1}
      alt="open foreground"
      class="absolute inset-0 w-full h-full object-cover z-20 cursor-pointer pointer-events-none"
      on:mouseenter={() => hoverCard = true}
      on:mouseleave={() => hoverCard = false}
      on:click={toggleEnvelope}
    />
  {/if}

  <!-- Text Overlay (not clickable) -->
  <!-- <div class="absolute inset-0 flex flex-col justify-start items-center text-center px-4 pt-[clamp(0.1rem,7vw,14vw)] pointer-events-none"> -->
    <!-- <p class="font-robo font-thin text-[clamp(1rem,2vw,1.3rem)] text-[rgb(242,176,98)] transition-opacity duration-500 "
       in:fade={{ duration: 800, delay: 100 }}
       class:opacity-0={isOpen}
       class:opacity-100={!isOpen}>
      Together with their families
    </p>

    <p class="font-alex text-4xl text-[rgb(242,176,98)] mt-1 transition-opacity duration-500"
       in:fade={{ duration: 800, delay: 300 }}
       class:opacity-0={isOpen}
       class:opacity-100={!isOpen}>
      Sanyog Chhetri & Saru Shrestha
    </p> -->
  <!-- </div> -->
  <div class="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pt-[clamp(0.1rem,7vw,15vw)] pointer-events-none">
   <p class="mt-4 font-robo font-thin text-[clamp(1rem,2vw,1.3rem)] text-[rgb(242,176,98)] transition-opacity duration-500"
       class:opacity-0={isOpen}
       class:opacity-100={!isOpen}
       in:fade={{ duration: 600 }}>
      Invite you to celebrate their wedding
    </p>
    </div>
</div>

<!-- <div class="relative z-10  w-full h-full flex items-center justify-center">
                <img 
                    src="/img/flowers_red.png"
                    class="absolute left-[10%] -translate-x-1/2 w-full h-auto -rotate-90 "
                />

                <img 
                    src="/img/flowers_red.png"
                    class="absolute right-[10%] -translate-x-1/2 w-auto h-auto -rotate-90"
                />

                 <img 
                    src="/img/stamp.png"
                    class="absolute top-[50%] left-1/2 -translate-x-1/2 w-[clamp(5rem,2vw,10rem)] h-auto pointer-events-none"
                    class:opacity-0={isOpen}
                    class:opacity-100={!isOpen}
                />
            </div>   -->