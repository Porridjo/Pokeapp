<script>
	import { fade, fly } from 'svelte/transition';

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

    const officialArtwork = data.sprites.other["official-artwork"]

</script>

<style>
  .pokemon-artwork-container {
    border: 1px black solid;
  }

  .types {
    display: flex;
  }
  .type {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px black solid;
    border-radius: 17px;
    margin: 0 10px 0 0;
    padding: 2px 10px 2px 8px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    height: 25px;
    width: 50px;
    text-transform: capitalize;
  }

  .abilities {
    display: flex;
  }

  .name-container {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin-left: 10%;
    margin-right: 10%;
    padding: 0 10px;
    width: 75%;
    height: 100px;
    border-radius: 5px;
    background: linear-gradient(135deg, #4797d8 10%, black 10%);
  }

  .pokemon-id {
    flex: 0 0 5%;
    display: flex;
    justify-content: center;
  }

  .pokemon-name {
    flex: 0 0 95%;
    display: flex;
    justify-content: center;
  }

  .pokemon-content {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px
  }

  .pokemon-infos {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 350px;
  }

  .pokedex-data {
    background-color: rgb(223, 217, 217);
    border-radius: 10px;
  }

  
  .pokedex-data > div {
    border: 1px solid black;
    padding: 7px;
    display: flex;
  }

  .pokedex-data > :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .pokedex-data > :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }


  .pokedex-data > div > div:first-child {
    flex: 0 0 25%
  }

  .ability-name {
    text-transform: capitalize;
  }

  .base-stats {
    background-color: #fff;
    border-radius: 10px;
  }
  .base-stats > div {
    display: flex;
    border: 1px black solid;
    justify-content: space-between;
    padding: 5px
  }

  .base-stats > :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .base-stats > :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .stat {
    text-transform: capitalize;
    
  }
</style>

<div >
  <div class="name-container" in:fly={{delay:200, duration:800, y:-200}}>
    <p class="pokemon-id">{data.id}</p>
    <p class="pokemon-name">{data.name.toUpperCase()}</p>
  </div>
  
  <div class="pokemon-content">
    <div class="pokemon-artwork-container" in:fly={{delay:200, duration:1300, x:-200}}>
      <img class="pokemon-artwork" src={officialArtwork.front_default} alt="pokemon artwork" />
    </div>
  
    <div class="pokemon-infos" in:fly={{delay:200, duration:1500, x:200}}>
      <div class="pokedex-data">
        <div class="types">
          <div>
            Types
          </div>
          {#each data.types as type}
          <div class="type" style="background-color: {typeToColor(type.type.name)}">
            {type.type.name}
          </div>
          {/each}
        </div>
        <div>
          <div>
            Height
          </div>
          <div>
            {data.height/10} m
          </div>
        </div>
        <div>
          <div>
            Weight 
          </div>
          <div>
            {data.weight/10} kg
          </div>
        </div>
        <div>
          <div>
            Base Exp.
          </div>
          <div>
            {data.base_experience}
          </div>
        </div>
        <div class="abilities">
          <div>
            Abilities
          </div>
          <div class="abilities-content">
            {#each data.abilities as ability}
            <div class="ability-name">{ability.ability.name} {ability.is_hidden ? '(hidden ability)' : ''}</div>
            {/each}
          </div>
        </div>
      </div>
  
      <div class="base-stats">
        {#each data.stats as stat}
          <div class="stat">
            <div>
              {stat.stat.name} 
            </div>
            <div class="stat-value">
              {stat.base_stat}
            </div>  
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>






