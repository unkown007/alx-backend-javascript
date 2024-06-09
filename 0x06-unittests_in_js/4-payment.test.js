const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('test math', () => {
    sinon.stub(
      Utils,
      'calculateNumber'
    ).callsFake(() => 10);
    const spying = sinon.spy(console);

    sendPaymentRequestToApi(100, 20);
    expect(spying.log.calledWith('The total is: 10')).to.be.true;
    expect(spying.log.callCount).to.be.equal(1);

    spying.log.restore();
  });
});
