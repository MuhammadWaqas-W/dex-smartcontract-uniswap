require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
     hardhat:{
      forking:{
         url:"your-alchemy-api-key"
      }
     }
  }
};
