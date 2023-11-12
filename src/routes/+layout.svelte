<script>
  import { onMount, onDestroy } from 'svelte';
  import { pokemonStore, counterStore, isLoadedStore } from '../store';
  import Footer from '/src/components/Footer/Footer.svelte';

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
      min-height: 100vh;
      background-image: url('/images/background2.png');
      background-size: 100vw 100vh;
      background-attachment: fixed;
    }

  :global(h1) {
    margin: 0;
    padding: 0;
  }

  .container {
    position: relative;
    min-height: 100vh;
  }

</style>

<div class="container">
  <div>
    <a href="/">Home</a>
    <a href="/pokemon">Pokedex</a>
  </div>
  <slot />
  <Footer />
</div>
