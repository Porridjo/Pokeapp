export async function load({ fetch }) {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1017")
  const data = await res.json()
  return data;
}