const searchCandies = require('./searchCandies');

describe('searchCandies', () => {

  it('returns candies with name starting "Ma" and price less than 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns candies with name starting "Ma" and price less than 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns candies with name starting "S" and price less than 10', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns candies with name starting "S" and price less than 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it('still returns candies with name starting "Ma" when given lowecase "ma" search', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

});