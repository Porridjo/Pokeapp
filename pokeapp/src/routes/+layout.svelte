<script>
  import { onMount, onDestroy } from 'svelte';
  import { pokemonStore, counterStore, isLoadedStore } from '../store';
  import Footer from '/src/components/Footer/Footer.svelte';
	import Sidebar from '/src/components/Sidebar/Sidebar.svelte';

  onMount(() => console.log("Layout mounted"))
  onDestroy(() => console.log("Layout destroyed"))
  
  export let data;
  $pokemonStore = data.pokemons
  $isLoadedStore = true

  let showSidebar = false;
</script>

<style>
  :global(body) { 
      margin: 0; 
      padding: 0; 
      min-height: 100vh;
      background-image: url('/images/background2.png');
      background-size: 100vw 100vh;
      background-attachment: fixed;
      font-family: 'Poppins', sans-serif;
    }

  :global(h1) {
    margin: 0;
    padding: 0;
  }

  .container {
    position: relative;
    min-height: 100vh;
    caret-color: transparent;
  }

  .toggle-sidebar-btn {
    position: relative;
    z-index: 10;
  }

</style>

<div class="container">
  <button class="toggle-sidebar-btn" on:click={() => showSidebar = !showSidebar}>{showSidebar ? "Hide" : "Show" } sidebar</button>
  <Sidebar bind:show={showSidebar}/>
  <slot />
</div>
<Footer />
