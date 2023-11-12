<script>
  import { pokemonStore, counterStore, currentPageNumberStore } from '/src/store'
  import Pokemon from '/src/components/Pokemon/Pokemon.svelte';
  import { fade } from 'svelte/transition'
  console.log($counterStore)

  const totalNumberOfPages = Math.ceil($pokemonStore.length / 30);

  $: highestId = $currentPageNumberStore * 30
  $: lowestId = highestId - 30

  const setPageNumber = (pageNumber) => {
      if (pageNumber < 1) {
        currentPageageNumberStore.set(1);
      } else if (pageNumber > totalNumberOfPages) {
        currentPageNumberStore
      } else {
        currentPageNumberStore.set(pageNumber);
      }
  }

</script>

<style>
  :global(body) { 
      margin: 0; 
      padding: 0; 
    }

  h1 {
    margin: 0;
    padding: 0;
  }

  .container {
    height: 100vh;
    background-image: url('/images/background2.png');
    background-size: 100vw 100vh;
  }
  .pokemons-container {
    display: flex;
    flex-wrap: wrap;
    margin: 3% 10% 10% 10%
  }
 
</style>


<div class="container">
  <h1>Welcome to Pokemon Search</h1>
  <a href="/">home</a>
  <div class="flex justify-center">
    <div class="flex justify-between max-w-sm w-10/12 dbr">
      
    </div>
  </div>
  
  <div class="pokemons-container" in:fade={{delay: 200}}>
    {#each $pokemonStore as pokemon, i}
      {#if i+1 <= highestId && i+1 > lowestId}
      <Pokemon id={pokemon.id} imgPath={`/images/${pokemon.id}.png`} name={pokemon.name.toUpperCase()}/>
      {/if}
    {/each}
  </div>

  <div>
    <button on:click={() => setPageNumber($currentPageNumberStore - 1)}>Previous</button>
    <button on:click={() => setPageNumber($currentPageNumberStore + 1)} >Next</button>
  </div>
</div>

