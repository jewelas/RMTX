const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

const proxyAddress = ''

async function main() {
  console.log(proxyAddress," original Rematic(proxy) address")
  const RematicV2 = await ethers.getContractFactory("RematicV2")
  console.log("upgrade to RematicV2...")
  const rematicV2 = await upgrades.upgradeProxy(proxyAddress, RematicV2)
  console.log(rematicV2.address," RematicV2 address(should be the same)")

  console.log(await upgrades.erc1967.getImplementationAddress(rematicV2.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(rematicV2.address), " getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})