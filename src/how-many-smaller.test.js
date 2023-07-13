const smaller = require('./how-many-smaller');

describe('Story 1 user test cases', () => {
  it('when given string, it should return exception', () => {
    expect(() => smaller('')).toThrow();
  });
  it('when given empty array, it should return [0]', () => {
    expect(smaller([])).toEqual([0]);
  });
  it('when given integer, it should return exception', () => {
    expect(() => smaller(10)).toThrow();
  });
});

describe('Story 2 user test cases', () => {
  it('when given [1], it should return [0]', () => {
    expect(smaller([1])).toEqual([0]);
  });
  it('when given [0], it should return [0]', () => {
    expect(smaller([0])).toEqual([0]);
  });
  it('when given [10], it should return [0]', () => {
    expect(smaller([10])).toEqual([0]);
  });
});

describe('Story 3 user test cases', () => {
  it('when given [0,0], it should return [0,0]', () => {
    expect(smaller([0,0])).toEqual([0,0]);
  });
  it('when given [1,1], it should return [0,0]', () => {
    expect(smaller([1,1])).toEqual([0,0]);
  });
  it('when given [2,2], it should return [0,0]', () => {
    expect(smaller([2,2])).toEqual([0,0]);
  });
});

describe('Story 4 user test cases', () => {
  it('when given [0,1], it should return [0,0]', () => {
    expect(smaller([0,1])).toEqual([0,0]);
  });
  it('when given [1,2], it should return [0,0]', () => {
    expect(smaller([1,2])).toEqual([0,0]);
  });
  it('when given [9,10], it should return [0,0]', () => {
    expect(smaller([9,10])).toEqual([0,0]);
  });
});

describe('Story 5 user test cases', () => {
  it('when given [1,0], it should return [1,0]', () => {
    expect(smaller([1,0])).toEqual([1,0]);
  });
  it('when given [4,3], it should return [1,0]', () => {
    expect(smaller([4,3])).toEqual([1,0]);
  });
  it('when given [9,3], it should return [1,0]', () => {
    expect(smaller([9,3])).toEqual([1,0]);
  });
});

describe('Story 6 user test cases', () => {
  it('when given [5,5,5], it should return [0,0,0]', () => {
    expect(smaller([5,5,5])).toEqual([0,0,0]);
  });
});
