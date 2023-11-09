<script>
  import { store } from '../store'
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
    console.log($store.name)
  })

</script>


<h1>Welcome to Pokemon Search</h1>
<a href="/search">search</a>
<ul>

  <table>
    {#each $store as s, i}
    <Pokemon id={s.id} imgPath={`/images/${s.id}.png`} name={s.name.toUpperCase()}/>
    {#if i % 4 == 0}
    <tr></tr>
    {/if}
    {/each}
  </table>

</ul>