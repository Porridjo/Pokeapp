<script>
  import { onMount, onDestroy } from 'svelte';
  import { pokemonStore, counterStore, isLoadedStore } from '../store';

  onMount(() => console.log("Layout mounted"))
  onDestroy(() => console.log("Layout destroyed"))
  
  export let data;
  $pokemonStore = data.pokemons
  $isLoadedStore = true

</script>


<slot />