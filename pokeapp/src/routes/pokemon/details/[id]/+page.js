const apiCache = {};
export async function load({fetch, params}){
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${params.id}`
    // returns data if already cached
    if (apiCache[endpoint]) return apiCache[endpoint]

    console.log("api fetching pokemon ...")
    // fetch data
    const res = await fetch(endpoint);
    const data = await res.json();

    // cache data fetched
    apiCache[endpoint] = data;

    return data;
}