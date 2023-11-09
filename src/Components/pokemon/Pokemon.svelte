<script>
    import { fade, fly } from "svelte/transition";

    export let id;
    export let imgPath;
    export let name;
</script>

<style>
  .pokemon-card {
    background-color: rgba(185, 214, 228, 0.5);
    margin:10px;
  }
  .pokemon-img {
    background-color: rgba(173, 212, 231, 0.5);
    border: 1px solid;
    border-color: black;
    border-radius: 50%;
    margin: 10px;
  }
  .name-container {
    text-align: center;
  }
  a {
    text-decoration: none;
  }

  a, a:visited, a:hover, a:active {
  color: inherit;
  }
</style>

<div transition:fade class="pokemon-card">
  <a href={`/about/${id}`}>
    <img class="pokemon-img" src={imgPath} alt="no png">
    <p class="name-container">{name}</p>
  </a> 
</div>

