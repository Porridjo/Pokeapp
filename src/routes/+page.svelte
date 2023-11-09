<script>
  import { store, isLoading } from '../store'
  import { onMount } from 'svelte';
  import Pokemon from '../Components/pokemon/Pokemon.svelte';

  onMount(async () => {
    let id = 0;
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1017");
    const data = await res.json();

    $store = data.results.map((item) => {
      id += 1;
      return {
        'id': id,
        'name': item.name
      }
    })
    $isLoading = false;
  })

</script>

<style>
  .pokemon-container {
    display: flex;
    flex-wrap: wrap
  }
</style>


<h1>Welcome to Pokemon Search</h1>
<a href="/search">search</a>
<ul>
  {#if $isLoading}
  <img id = "loader" src="/gif/sasha.gif" alt = "no gif">
  {:else}
  <div class="pokemon-container">
    {#each $store as s, i}
    <Pokemon id={s.id} imgPath={`/images/${s.id}.png`} name={s.name.toUpperCase()}/>
    {/each}
  </div>
  {/if}
</ul>