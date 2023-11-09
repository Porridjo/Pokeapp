<script>
  import { store } from '../store'
  import { onMount } from 'svelte';

  let pokemons;
  onMount(async () => {
    let id = 0;
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100000");
    const data = await res.json();

    pokemons = data.results.map((item) => {
      id += 1;
      return {
        'id': id,
        'name': item.name
      }
    })
    console.log(pokemons)
  })

  
  // $score = [...$score, 
  // {
  //   id: 1,
  //   name: 'bulbizar'
    
  // }]

  // console.log($score)

  // export let data;
</script>

<!-- {#await getPokemons()}
  <p>Loading...</p>
{:then data} 
  {#each data.results as pokemon}
    <p>{pokemon.name.toUpperCase()}</p>
  {/each}
{/await} -->


  <!-- {#each data.results as pokemon}
    <p>{pokemon.name.toUpperCase()}</p>
  {/each} -->
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/search">search</a>