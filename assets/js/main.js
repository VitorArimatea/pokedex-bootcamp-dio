function pokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type-item">${typeSlot.type.name}</li>`)
}

function pokemonToHtml(pokemon){
  return `
    <li class="pokemon-card">
      <div class="pokemon-details">
        <h2 class="pokemon-name">${pokemon.name}</h2>
        <span class="pokemon-number">${pokemon.id}</span>
      </div>
      <div class="pokemon-details">
        <ol class="types">
          ${pokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="Uma artwork do ${pokemon.name}">
      </div>
    </li>
  `
} 

const pokemonList = (document.getElementById('pokemonList'))

pokeApi.getPokemons().then((pokemons = []) => {
  const newHtml = pokemons.map(pokemonToHtml).join('');
  pokemonList.innerHTML = newHtml;
})

  