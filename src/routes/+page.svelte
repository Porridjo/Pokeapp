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

<style>
  :global(body) { 
      margin: 0; 
      padding: 0; 
    }

  :global(h1) {
    margin: 0;
    padding: 0;
  }

  :global(.container){
    height: 100vh;
    background-image: url('/images/background2.png');
    background-size: 100vw 100vh;

  }
</style>

<div class="container">

  <h1>Welcome to Pokemon Search</h1>
  <a href="/pokemon">pokemons</a>
  <ul>
    {#if $isLoadingStore}
    <Loading />
    <!-- <img id = "loader" src="/gif/sasha.gif" alt = "no gif"> -->
    {:else}
    <div>
      <p>Loaded</p>
    </div>
    {/if}
  </ul>

</div>
