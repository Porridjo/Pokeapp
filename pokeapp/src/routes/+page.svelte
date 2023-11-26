<script>
  import {isLoadingStore, counterStore, isLoadedStore } from '../store';
  import { onMount, onDestroy } from 'svelte';
  import Loading from '/src/components/Loading/Loading.svelte';
  import { fade } from 'svelte/transition'
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

  .home-container {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-elements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-bottom: 50px;
  }

  .pokedex {
    display: flex;
    justify-content: center;
    background-color: rgba(180, 215, 241, 0.5);
    border-radius: 10px;
    padding: 10px;
    width: 200px;
  }

  .pokedex:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  .pokedex > a {
    text-decoration: none;
  }

  .pokedex > a > p {
    color: black;
    text-align: center;
  }


  .pokeball-img {
    width: 100px;
    height: 100px;
  }



</style>

<div class="home-container">
  {#if $isLoadingStore}
  <Loading />
  <!-- <img id = "loader" src="/gif/sasha.gif" alt = "no gif"> -->
  {:else}
  <div class="home-elements" in:fade={{delay: 1000}}>
    <h1>A pokedex made with Svelte</h1>   
    <div class="pokedex">
      <a href="/pokemon">
        <img class="pokeball-img" src="/images/pokeball.png" alt="">
        <p>Pokedex</p>
      </a>
    </div>
  </div>
  {/if}


</div>
