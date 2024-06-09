const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spying;

  beforeEach(() => {
    if (!spying) {
      spying = sinon.spy(console);
    }
  });

  afterEach(() => {
    spying.log.resetHistory();
  });

  it('test math payment called with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spying.log.calledWith('The total is: 120')).to.be.true;
    expect(spying.log.callCount).to.be.equal(1);
  });

  it('test math payment called with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spying.log.calledWith('The total is: 20')).to.be.true;
    expect(spying.log.callCount).to.be.equal(1);
  });
});
