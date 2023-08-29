function pokemonToHtml(pokemon){
  return `
    <li class="pokemon-card">
      <div class="pokemon-details">
        <h2 class="pokemon-name">${pokemon.name}</h2>
        <span class="pokemon-number">#001</span>
      </div>
      <div class="pokemon-details">
        <ol class="types">
          <li class="type-item">Grass</li>
          <li class="type-item">Poison</li>
        </ol>
        <img class="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Uma artwork do ${pokemon.name}">
      </div>
    </li>
  `
} 

const pokemonsList = (document.getElementById('pokemonsList'));

pokeApi.getPokemons().then((pokemonList) => {
  const listItems = []

  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    listItems.push(pokemonToHtml(pokemon));
  }

  console.log(listItems)
});

  