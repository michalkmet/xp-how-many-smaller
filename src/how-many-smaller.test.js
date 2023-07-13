const smaller = require('./how-many-smaller');

describe('Story 1 user test cases', () => {
  it('when given string, it should return exception', () => {
    expect(() => smaller('')).toThrow();
  });
  it('when given empty array, it should return [0]', () => {
    expect(smaller([])).toEqual([0]);
  });
});
