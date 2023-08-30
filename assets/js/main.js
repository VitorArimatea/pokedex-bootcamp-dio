const pokemonList = (document.getElementById('pokemonList'));
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;

function pokemonToList(pokemon) {
  return `
          <li class="pokemon-card ${pokemon.types[0]}">
            <div class="pokemon-details">
              <h2 class="pokemon-name">${pokemon.name}</h2>
              <span class="pokemon-number">${pokemon.number}</span>
            </div>
        
            <div class="pokemon-details">
          
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type-item ${type}">${type}</li>`).join('')}
            </ol>
          
            <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.number}.png" alt="Uma artwork do ${pokemon.name}">
        </div>
      </li>
      
    `
}

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newList = pokemons.map((pokemonToList)).join('');
    pokemonList.innerHTML += newList;
  });
};

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
  offset += limit

  const recordNextPage = offset + limit

  if (recordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItems(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  }
  else {
    loadPokemonItems(offset, limit)
  }
})

  