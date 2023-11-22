<script>
  import { onMount, onDestroy } from 'svelte';
  import { pokemonStore, counterStore, isLoadedStore, myPokemonCountStore } from '../store';
  import Footer from '/src/components/Footer/Footer.svelte';
	import Sidebar from '/src/components/Sidebar/Sidebar.svelte';
	import Chatbot from '/src/components/Chatbot/Chatbot.svelte';
  import Icon from '@iconify/svelte';
  

  onMount(() => {
    console.log("Layout mounted")
    const pokemons = JSON.parse(localStorage?.getItem('pokemons'));
    const pokemonCount = JSON.parse(localStorage?.getItem('pokemon-count'));
    if (pokemons && pokemonCount) {
      pokemonStore.set(pokemons)
      myPokemonCountStore.set(pokemonCount)
    }
  })
  onDestroy(() => console.log("Layout destroyed"))
  
  export let data;
  $pokemonStore = data.pokemons
  $isLoadedStore = true

  let showSidebar = false;

  let showChatbot = false;

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

  @media (max-width: 1113px) {
    .container {
      margin-bottom: 60px;
    }
  }

  .toggle-sidebar-btn {
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 10;
    border-radius: 5px;
    border: 1px solid black;
  }

  .toggle-chatbot-btn {
    position: fixed;
    bottom: 5px;
    right: 10px;
    z-index: 4;
    border-radius: 5px;
    border: 1px solid black;
  }
  
</style>


<div class="container">
  <button class="toggle-sidebar-btn" on:click={() => showSidebar = !showSidebar}>
    <Icon icon="ion:menu" height="24px" />
  </button>
  <Sidebar bind:show={showSidebar}/>
  <slot />
  
</div>
<button class="toggle-chatbot-btn" on:click={() => showChatbot = !showChatbot}>
  <Icon icon="tabler:message" height="24px" />
</button>
<Chatbot bind:show={showChatbot} />
<Footer />
