<script>
  import { pokemonStore, isFirstLoadingStore, isLoadingStore, counterStore, isLoadedStore } from '../store';
  import { onMount, onDestroy } from 'svelte';
  import Loading from '/src/components/Loading/Loading.svelte';
  import { goto } from '$app/navigation';

  console.log(`loadingstore: ${$isLoadingStore}`)
  console.log(`loadedstore: ${$isLoadedStore}`)

  onMount(() => console.log("I'm mounted"))

  $: $isLoadingStore = ($counterStore <= 1);
  
  if ($isLoadingStore) {
    const interval = setInterval(() => $counterStore += 0.5, 500);
    onDestroy(() => 
    {
      clearInterval(interval)
    });
  }

  
</script>

<div class="container">
  {#if $isLoadingStore}
  <Loading />
  <!-- <img id = "loader" src="/gif/sasha.gif" alt = "no gif"> -->
  {:else}
  <div>
    <p>Loaded</p>
    <div>
      <img src="" alt="">
    </div>
  </div>
  {/if}


</div>
