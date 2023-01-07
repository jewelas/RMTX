// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// require("dotenv").config();
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-waffle");
// require("@openzeppelin/hardhat-upgrades");
// require("hardhat-contract-sizer");
// const { API_URL_ROPSTEN, API_URL_RINKEBY, PRIVATE_KEY, API_KEY } = process.env;
// module.exports = {
//   solidity: {
//     version: "0.8.13",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 1,
//       },
//     },
//   },
//   defaultNetwork: "ropsten",
//   allowUnlimitedContractSize:true,
//   networks: {
//     hardhat: {},
//     ropsten: {
//       url: API_URL_ROPSTEN,
//       accounts: [`0x${PRIVATE_KEY}`],
//     },
//     rinkeby: {
//       url: API_URL_RINKEBY,
//       accounts: [`0x${PRIVATE_KEY}`],
//     },
//   },
//   etherscan: {
//     apiKey: {
//       ropsten: API_KEY,
//       rinkeby: API_KEY,
//     },
//   },
// };

/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("hardhat-contract-sizer");
const { mnemonic } = require('./secrets.json');
const { BSC_API_KEY } = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
   defaultNetwork: "testnet",
   networks: {
      localhost: {
         url: "http://127.0.0.1:8545"
      },
      hardhat: {
         // throwOnTransactionFailures: true,
         // throwOnCallFailures: true,
         // allowUnlimitedContractSize: true,
         // blockGasLimit: 0x1fffffffffffff,
         // accounts: { mnemonic: mnemonic },
      },
      testnet: {
         url: "https://data-seed-prebsc-1-s1.binance.org:8545",
         chainId: 97,
         gasPrice: 20000000000,
         accounts: { mnemonic: mnemonic },
      },
      mainnet: {
         url: "https://bsc-dataseed.binance.org/",
         chainId: 56,
         gasPrice: 20000000000,
         accounts: { mnemonic: mnemonic }
      }
   },
   etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://bscscan.com/
      apiKey: BSC_API_KEY
   },
   solidity: {
      version: "0.8.13",
      settings: {
         optimizer: {
            enabled: true,
            runs: 1
         }
      }
   },
   paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
   },
   mocha: {
      timeout: 2000000
   }
};
