import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  typechain: {
    outDir: "typechain",   // This is where the generated typings will be stored
    target: "web3-v1",   // Use ethers.js as the target
  },
};

export default config;
