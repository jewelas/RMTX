const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

const proxyAddress = ''
async function main() {
  console.log(proxyAddress," original Rematic(proxy) address")
  const RematicUpdated = await ethers.getContractFactory("RematicUpdated")
  console.log("Preparing upgrade to RematicUpdated...");
  const rematicUpdatedAddress = await upgrades.prepareUpgrade(proxyAddress, RematicUpdated);
  console.log(rematicUpdatedAddress, " RematicUpdated implementation contract address");
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})