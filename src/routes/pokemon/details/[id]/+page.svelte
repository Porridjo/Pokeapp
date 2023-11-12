<script>
    export let data;
    console.log(data);
    $: {data}

    // Give hexa color from type name
    const typeToColor = (type) => {
      if (type === 'normal') return '#A8A878'
      else if (type === 'fighting') return '#C03028'
      else if (type === 'flying') return '#A890F0'
      else if (type === 'poison') return '#A040A0'
      else if (type === 'ground') return '#E0C068'
      else if (type === 'rock') return '#B8A038'
      else if (type === 'bug') return '#A8B820'
      else if (type === 'ghost') return '#705898'
      else if (type === 'steel') return '#B8B8D0'
      else if (type === 'fire') return '#F08030'
      else if (type === 'water') return '#6890F0'
      else if (type === 'grass') return '#78C850'
      else if (type === 'electric') return '#F8D030'
      else if (type === 'psychic') return '#F85888'
      else if (type === 'ice') return '#98D8D8'
      else if (type === 'dragon') return '#7038F8'
      else if (type === 'dark') return '#705848'
      else if (type === 'fairy') return '#EE99AC'
      return '#68A090'
    }

    // Captilize first lettere of a string
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

</script>

<style>
  h1 {
    text-align: center;
  }

  .col1 {
    display: flex;
  }

  .types {
    display: flex;
  }
  .type {
    border: 1px black solid;
    border-radius: 20px;
    margin: 0 10px 0 0;
    padding: 2px 10px 2px 8px;
    color: white
  }

  .abilities {
    display: flex;
  }
</style>



<h1> {data.name.toUpperCase()}  </h1>
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

<div>
  <div class="types">
    Types:
    {#each data.types as type}
    <div class="type" style="background-color: {typeToColor(type.type.name)}">
        {capitalizeFirstLetter(type.type.name)}
    </div>
    {/each}
  </div>
  <div>
    Height: {data.height/10} m
  </div>
  <div>
    Weight: {data.weight/10} kg
  </div>
  <div>
    Base Exp.: {data.base_experience}
  </div>
  <div class="abilities">
    Abilities: 
    <div class="abilities-content">
      {#each data.abilities as ability}
      <div>{capitalizeFirstLetter(ability.ability.name)} {ability.is_hidden ? '(hidden ability)' : ''}</div>
      {/each}
    </div>
  </div>

</div>