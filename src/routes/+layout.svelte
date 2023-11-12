<script>
  import { onMount, onDestroy } from 'svelte';
  import { pokemonStore, counterStore, isLoadedStore } from '../store';

  onMount(() => console.log("Layout mounted"))
  onDestroy(() => console.log("Layout destroyed"))
  
  export let data;
  $pokemonStore = data.pokemons
  $isLoadedStore = true
</script>

<style>
  :global(body) { 
      margin: 0; 
      padding: 0; 
      height: 100vh;
      background-image: url('/images/background2.png');
      background-size: 100vw 100vh;
      background-attachment: scroll;
    }

  :global(h1) {
    margin: 0;
    padding: 0;
  }
</style>

<div>
  <a href="/">Home</a>
  <a href="/pokemon">Pokedex</a>
</div>

<slot />