<script>
  import { fade } from 'svelte/transition';
</script>

<style>
  .loading {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>

<div class="loading">
  <img src="images/ash-now.gif" alt="" out:fade>
</div>