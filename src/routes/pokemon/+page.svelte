<script>
  import { pokemonStore, counterStore, currentPageNumberStore } from '/src/store'
  import Pokemon from '/src/components/Pokemon/Pokemon.svelte';
  import { fade, fly } from 'svelte/transition'
  console.log($counterStore)

  let searchedPokemonName = "";

  const totalNumberOfPages = Math.ceil($pokemonStore.length / 30);

  $: filteredPokemon = $pokemonStore.filter((pokemon) => pokemon.name.includes(searchedPokemonName.toLowerCase()))
  $: highestId = $currentPageNumberStore * 30
  $: lowestId = highestId - 30

  const setPageNumber = (pageNumber) => {
      if (pageNumber < 1) {
        currentPageageNumberStore.set(1);
      } else if (pageNumber > totalNumberOfPages) {
        currentPageNumberStore.set(totalNumberOfPages)
      } else {
        currentPageNumberStore.set(pageNumber);
      }
  }
</script>

<style>
  .pokemons-container {
    display: flex;
    flex-wrap: wrap;
    margin: 3% 10% 10% 10%;
  }
  .search-bar {
    padding: 6px;
    border: 1px black solid;
    border-radius:4px;
  }
 
</style>


<div class="container">
  <h1>Welcome to Pokemon Search</h1>
  <a href="/">home</a>
  <div class="">
    <input class="search-bar" type='text' on:input={() => setPageNumber(1)} bind:value={searchedPokemonName} placeholder="Pokemon name"/>
  </div>
  
  <div class="pokemons-container" in:fade>
    {#each filteredPokemon as pokemon, i}
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

