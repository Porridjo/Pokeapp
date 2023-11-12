<script>
    export let data;
    console.log(data);
    $: {data}
</script>

<style>
  h1 {
    text-align: center;
  }

  .col1 {
    display: flex;
  }
</style>



<h1>  {data.name.toUpperCase()}  </h1>
<div>
  <div class="stats">
    {#each data.stats as stat}
      <div class="col1">
        <div>
          {stat.stat.name} 
        </div>
        <div>
          {stat.base_stat}
        </div>  
      </div>
    {/each}
  </div>
</div>