<script>
  import Pokemon from "../../components/Pokemon/Pokemon.svelte";
	import { pokemonStore } from "../../store";
</script>

<style>
  .my-pokemons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .my-pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 300px;
  }
</style>

<div class="my-pokemons-container">
  <h1>My pokemons</h1>
  <div class="my-pokemons">
    {#each $pokemonStore as pokemon}
    {#if pokemon.caught}
    <Pokemon id={pokemon.id} imgPath={`/images/${pokemon.id}.png`} name={pokemon.name.toUpperCase()} caught={pokemon.caught} />
    {/if}
    {/each}
  </div>
  
</div>

