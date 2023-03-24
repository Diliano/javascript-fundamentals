const fetchPokemon = require('./api');

class Pokedex {

  constructor() {
    this.pokedex = [];
  }

  async catch(pokemon) {
    const caughtPokemon = await fetchPokemon(pokemon);
    this.pokedex.push(caughtPokemon);
  };

  all() {
    return this.pokedex;
  };

};

module.exports = Pokedex;