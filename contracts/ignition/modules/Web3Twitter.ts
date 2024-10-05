import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const Web3TwitterModule = buildModule("Web3TwitterModule", (m) => {
  const web3twitter = m.contract("Web3Twitter");

  return { web3twitter };
});

export default Web3TwitterModule;
