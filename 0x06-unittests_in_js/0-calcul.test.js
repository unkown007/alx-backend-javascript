const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('Sum numbers', () => {
  it("Sum 1, 3", () => {
    assert(calculateNumber(1, 3) === 4);
  });

  it("Sum 1, 3.7", () => {
    assert(calculateNumber(1, 3.7) === 5);
  });

  it("Sum 1.2, 3.7", () => {
    assert(calculateNumber(1.2, 3.7) === 5);
  });

  it("Sum 1.5, 3.7", () => {
    assert(calculateNumber(1.5, 3.7) === 6);
  });
});
