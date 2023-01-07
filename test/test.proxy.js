// test/Rematic.proxy.js
// Load dependencies
const { expect } = require('chai');

let Rematic;
let rematic;

// Start test block
describe('Rematic (proxy)', function () {
  beforeEach(async function () {
    Token1DividendTracker = await ethers.getContractFactory("Token1DividendTracker")

    token1DividendTracker = await Token1DividendTracker.deploy()
    await token1DividendTracker.deployed()
    await token1DividendTracker.__Token1DividendTracker_init();

    Token2DividendTracker = await ethers.getContractFactory("Token2DividendTracker")

    token2DividendTracker = await Token2DividendTracker.deploy()
    await token2DividendTracker.deployed()
    await token2DividendTracker.__Token2DividendTracker_init();


    Rematic = await ethers.getContractFactory("Rematic")
    rematic = await Rematic.deploy()
    await rematic.deployed()

    await token1DividendTracker.transferOwnership(rematic.address);
    await token2DividendTracker.transferOwnership(rematic.address);

    rematic.__Rematic_init([token1DividendTracker.address, token2DividendTracker.address]);
  });

  // Test case
  it('retrieve returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await rematic.symbol()).toString()).to.equal('RMTX');
  });
});