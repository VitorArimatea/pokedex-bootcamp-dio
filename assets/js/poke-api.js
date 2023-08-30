const pokeApi = {}

function pokedexDetails(pokeDetail) {
  const pokemon = new Pokedex()
  pokemon.name = pokeDetail.name
  pokemon.number = pokeDetail.id

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  return pokemon
}

pokeApi.getPokemonDetail = async (pokemon) => {
  return fetch(pokemon.url)
          .then((response) => response.json())
          .then(pokedexDetails)
}

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}