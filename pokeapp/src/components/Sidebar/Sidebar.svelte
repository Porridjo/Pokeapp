<script>
  import { fly } from "svelte/transition";
  export let show;
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(94, 157, 209, 0.527);
    height: 100%;
    width: 10rem;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: larger;
    margin-bottom: 5px;
  }

  a:hover {
    color: white;
  }

  .navigation-paths {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
</style>


{#if show}
  <nav transition:fly={{x:-250}}>

    <div class="navigation-paths">
      <a href="/">Home</a>
      <a href="/pokemon">Pokedex</a>
      <a href="/chatbot">Chatbot</a> 
    </div>
  </nav>
{/if}