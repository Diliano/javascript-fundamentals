const fetchPokemon = require('./api');

describe('fetchPokemon', () => {

  it('returns a promise of the useful pokemon data', () => {
    fetchPokemon('charizard')
      .then((pokemon) => {
        expect(pokemon.id).toEqual(6);
        expect(pokemon.height).toEqual(17);
      });
  });

});