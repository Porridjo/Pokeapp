<script>
  import { pokemonStore, counterStore, currentPageNumberStore } from '/src/store'
  import Pokemon from '/src/components/Pokemon/Pokemon.svelte';
  import { fade, fly } from 'svelte/transition'
  
  console.log($counterStore)

  let searchedPokemonName = "";

  let form = {
    pageNumber: ''
  }

  $: filteredPokemon = $pokemonStore.filter((pokemon) => pokemon.name.includes(searchedPokemonName.toLowerCase()));
  $: totalPokemon = filteredPokemon.length;
  $: totalNumberOfPages = Math.ceil(filteredPokemon.length / 30);
  $: highestId = $currentPageNumberStore * 30;
  $: lowestId = highestId - 30;
  $: form.pageNumber = $currentPageNumberStore

  const setPageNumber = (pageNumber) => {
      if (pageNumber < 1) {
        currentPageNumberStore.set(1);
      } else if (pageNumber > totalNumberOfPages) {
        currentPageNumberStore.set(totalNumberOfPages);
      } else {
        currentPageNumberStore.set(pageNumber);
      }
      console.log(`page number ${$currentPageNumberStore}`)
  }
</script>

<style>

  .pokemon-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .pokemon-page-container > div {
    margin-bottom: 10px;
  }

  .pokemons-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10% 10% 10%;
  }
  .search-bar {
    padding: 6px;
    border: 1px black solid;
    border-radius:4px;
  }

  .page-navigation-elements {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .page-navigation-elements > *{
    margin-right: 50px;
    align-self: center;
  }

  .nav-btn {
    width: 80px;
    height: 35px;
    border: 1px black solid;
    border-radius: 5px;
  }

  .nav-btn:active {
  background-color: #7cbadf;
  color: white;
  transform: translateY(3px);
}
  
  .go-to-page-form {
    display: flex;
    align-items: center;
  }
  .go-to-page-form > * {
    margin-left: 10px;
  }

  .page-search-box {
    width: 30px;
    height: 20px;
  }

 
</style>


<div class="pokemon-page-container">
  <div>
    <h1>{totalPokemon} pokemons found</h1>
  </div>
  <div class="search-bar-container">
    <input class="search-bar" type='text' on:input={() => setPageNumber(1)} bind:value={searchedPokemonName} placeholder="Search a pokemon"/>
  </div>
  <div class="page-navigation-elements">
    <button class="nav-btn" on:click={() => setPageNumber($currentPageNumberStore - 1)}>Previous</button>
    <form class="go-to-page-form" on:submit|preventDefault={() => setPageNumber(parseInt(form.pageNumber))}>
      <p>Go to page: </p>
      <input class="page-search-box" type="text" bind:value={form.pageNumber} >
      <input type="submit" value="Go">
    </form>
    <button class="nav-btn" on:click={() => setPageNumber($currentPageNumberStore + 1)} >Next</button>
  </div>
  
  
  <div class="pokemons-container" in:fade>
    {#each filteredPokemon as pokemon, i}
      {#if i+1 <= highestId && i+1 > lowestId}
      <Pokemon id={pokemon.id} imgPath={`/images/${pokemon.id}.png`} name={pokemon.name.toUpperCase()}/>
      {/if}
    {/each}
  </div>
</div>

