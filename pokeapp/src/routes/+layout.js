export async function load({ fetch }) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10000");
  const data = await res.json();
  const pokemons = data.results.map((pokemon) => {
    const urlSplit = pokemon.url.split('/');
    const id = urlSplit[urlSplit.length - 2];
    return {
      id,
      name: pokemon.name,
      url: pokemon.url,
      caught: false
    }
  })
  return {
    pokemons
  }
}