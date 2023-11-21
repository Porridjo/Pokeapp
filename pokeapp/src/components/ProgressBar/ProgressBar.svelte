<script>
  import { tweened } from 'svelte/motion';
  
  export let statValue;
  export let statName;

  let percentage = tweened(0)

  $: percentage.set((statValue/255*100))

  const nameToColor = (name) => {
    if (name === "hp") return "#FF0000"
    else if (name === "attack") return "#F08030"
    else if (name === "defense") return "#F8D030"
    else if (name === "special-attack") return "#6890F0"
    else if (name === "special-defense") return "#78C850"
    else return "#F85888"
  }
  
</script>

<style>
  .progress-bar {
    
    border-radius: 7px;
    padding-left: 10px;
    color: white;
  }
</style>

<div class="progress-bar" style="width: {$percentage}%; background-color: {nameToColor(statName)}">
  <span>{statValue}</span>
</div>