const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type === SUM', () => {
    it('floating point whole numbers', () => {
      expect(calculateNumber('SUM', 1.0, 2.0)).to.equal(3);
    });

    it('rounding down b\'s floating point fractional number', () => {
      expect(calculateNumber('SUM', 1.0, 2.4)).to.equal(3);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
      expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
    });

    it('rounding down a\'s floating point fractional number', () => {
      expect(calculateNumber('SUM', 1.4, 2.0)).to.equal(3);
    });

    it('rounding up b\'s floating point fractional numbers', () => {
      expect(calculateNumber('SUM', 1.0, 2.5)).to.equal(4);
    });

    it('rounding up a and b\'s floating point fractional numbers', () => {
      expect(calculateNumber('SUM', 2.6, 2.5)).to.equal(6);
    });

    it('rounding up a\'s floating point fractional numbers', () => {
      expect(calculateNumber('SUM', 2.6, 2.0)).to.equal(5);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
    });
  });

  describe('type === SUBTRUCT', () => {
    it('floating point whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.0)).to.equal(-1);
    });

    it('rounding down b\'s floating point fractional number', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.4)).to.equal(-1);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.4)).to.equal(-1);
    });

    it('rounding down a\'s floating point fractional number', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 2.0)).to.equal(-1);
    });

    it('rounding up b\'s floating point fractional numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.0, 2.5)).to.equal(-2);
    });

    it('rounding up a and b\'s floating point fractional numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2.5)).to.equal(0);
    });

    it('rounding up a\'s floating point fractional numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.6, 2.0)).to.equal(1);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
    });
  });

  describe('type === SUBTRUCT', () => {
    it('floating point whole numbers', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.0)).to.equal(0.5);
    });

    it('rounding down b\'s floating point fractional number', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.4)).to.equal(0.5);
    });

    it('rounding down a and b\'s floating point fractional number', () => {
      expect(calculateNumber('DIVIDE', 1.4, 2.4)).to.equal(0.5);
    });

    it('rounding down a\'s floating point fractional number', () => {
      expect(calculateNumber('DIVIDE', 1.4, 2.0)).to.equal(0.5);
    });

    it('rounding up b\'s floating point fractional numbers', () => {
      expect(calculateNumber('DIVIDE', 1.0, 2.5)).to.equal(0.3333333333333333);
    });

    it('rounding up a and b\'s floating point fractional numbers', () => {
      expect(calculateNumber('DIVIDE', 2.6, 2.5)).to.equal(1);
    });

    it('rounding up a\'s floating point fractional numbers', () => {
      expect(calculateNumber('DIVIDE', 2.6, 2.0)).to.equal(1.5);
    });

    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber('DIVIDE', 2.499999, 3.499999)).to.equal(0.6666666666666666);
    });

    it('rouding down', () => {
      expect(calculateNumber('DIVIDE', 0.222, 1)).to.equal(0);
    });

    it('rouding down', () => {
      expect(calculateNumber('DIVIDE', 1, 0.222)).to.equal('error');
    });
  });
});
