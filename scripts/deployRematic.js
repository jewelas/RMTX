async function main() {
    const Rematic = await ethers.getContractFactory("Rematic")
  
    // Start deployment, returning a promise that resolves to a contract object
    const myContract = await Rematic.deploy()
    await myContract.deployed()
    console.log("Contract deployed to address:", myContract.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  