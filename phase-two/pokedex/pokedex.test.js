const Pokedex = require('./pokedex');

describe('Pokedex', () => {

  it('constructs a new pokedex', () => {
    const pokedex = new Pokedex();
    expect(pokedex).toBeInstanceOf(Pokedex);
  });

  it('constructs with an empty pokedex', () => {
    const pokedex = new Pokedex;
    expect(pokedex.all()).toEqual([]);
  });

  it('catches a pokemon and adds it to the pokedex', async () => {
    const pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    expect(pokedex.all()).toContainEqual({"height": 4, "id": 25, "name": "pikachu", "types": ["electric"], "weight": 60});
  });

  it('catches a few pokemon and adds them to the pokedex', async () => {
    const pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');
    expect(pokedex.all()).toContainEqual({"height": 4, "id": 25, "name": "pikachu", "types": ["electric"], "weight": 60}, {"height": 5, "id": 39, "name": "jigglypuff", "types": ["normal", "fairy"], "weight": 55});
  });

});