<script>
    import { fade, fly } from "svelte/transition";
    import Icon from '@iconify/svelte';
    import { pokemonStore, myPokemonCountStore, currentPageNumberStore } from "../../store";

    export let id;
    export let imgPath;
    export let name;
    export let caught;
    export let searchTerm;
    export let order;

    const addPokemon = () => {
      caught ? myPokemonCountStore.set($myPokemonCountStore - 1) : myPokemonCountStore.set($myPokemonCountStore + 1)
      pokemonStore.set(
        $pokemonStore.map(pokemon => {
          if (pokemon.id === id) {
            return {...pokemon, caught: !caught}
          }
          return pokemon
        })
        )
      localStorage.setItem("pokemons", JSON.stringify($pokemonStore))
      localStorage.setItem("pokemon-count", JSON.stringify($myPokemonCountStore))
    }

    $: transitionFunction = (node) => {
      if (searchTerm !== '') return fade(node);
      else return fly(node, { x: 2000, duration:850, delay: 50 * (order - ($currentPageNumberStore - 1) * 30), })
    } 
</script>

<style>
  .pokemon-card {
    background-color: rgba(180, 215, 241, 0.7);
    border-radius: 10px;
    margin:10px;
    transition: transform .2s;
    position:relative;
    width: 120px;
    height: 170px;
    flex-wrap: wrap;
    flex-basis: 8%;
  }

  .pokemon-content {
    display:flex;
    flex-direction: column;
    padding: 10px;
  }

  .pokemon-id {
    position: absolute;
    top: 3px;
    left: 5px;
  }

  .pokeball-icon {
    position: absolute;
    top: 3px;
    right: 0;
    background-color: transparent;
    border: none;
  }

  .pokeball-icon:hover {
    transform: scale(1.5);
  }


  .pokemon-card:hover {
    transform: scale(1.2);
  }
  .pokemon-img {
    background-color: rgb(190, 220, 248);
    border: 1px solid;
    border-color: black;
    border-radius: 50%;
    margin-top: 12px;
  }

  .pokemon-name {
    text-align: center;
    font-weight: bold;
    text-wrap: nowrap;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  a, a:visited, a:hover, a:active {
  color: inherit;
  }
</style>

<div class="pokemon-card" in:transitionFunction>
  <a href={`/pokemon/details/${id}`}>  
      <div class="pokemon-id">
        {id}
      </div>
      <button class="pokeball-icon" on:click|preventDefault|stopPropagation={addPokemon}>
        {#if caught}
        <Icon icon="mdi:pokeball" color="red" height="20px" />
        {:else}
        <Icon icon="mdi:pokeball" height="20px" />
        {/if}
      </button>
      <div class="pokemon-content">
        <img class="pokemon-img" src={imgPath} onerror="this.onerror=null; this.src='/images/0.png';" alt="no png">
        <p class="pokemon-name">{name}</p>
      </div> 
  </a> 
</div>


