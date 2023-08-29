const pokeApi = {}

pokeApi.getPokemonDetail = async (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())  
}

pokeApi.getPokemons = async (offset = 0, limit = 100) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}