const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name)
      };
      return pokemon;
    });
};

module.exports = fetchPokemon;