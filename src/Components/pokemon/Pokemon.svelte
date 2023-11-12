<script>
    import { fade, fly } from "svelte/transition";
    export let id;
    export let imgPath;
    export let name;
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
  }

  .pokemon-id {
    position: absolute;
    top: 3px;
    left: 5px;
  }
  .pokemon-card:hover {
    transform: scale(1.2);
  }
  .pokemon-img {
    background-color: rgb(190, 220, 248);
    border: 1px solid;
    border-color: black;
    border-radius: 50%;
    margin: 12px;
  }

  .pokemon-name {
    text-align: center;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }

  a, a:visited, a:hover, a:active {
  color: inherit;
  }
</style>

<div class="pokemon-card" in:fade>
  <a href={`/pokemon/details/${id}`}>  
      <div class="pokemon-id">
        {id}
      </div>
      <div class="pokemon-content">
        <img class="pokemon-img" src={imgPath} alt="no png">
        <p class="pokemon-name">{name}</p>
      </div> 
  </a> 
</div>


