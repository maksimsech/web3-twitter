import hre from "hardhat";
import { abi } from './abi'

async function main() {
  // The contract address deployed on your network (replace with your deployed contract address)
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
  // Replace with the user's address you want to query
  const userAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  // Get the signer and provider (uses Hardhat's default provider in this example)
  const provider = hre.ethers.provider;
  const [signer] = await hre.ethers.getSigners();
  console.log('signer.address', signer.address);
  // Create a contract instance
  const contract = new hre.ethers.Contract(contractAddress, abi, signer);
  
  try {
    // Send the transaction to call postTwit
    const tx = await contract.postTwit('test');
    const receipt = await tx.wait();
    console.log(receipt);
    // Call the view method
    const twits = await contract.getUserTwits(userAddress);
    
    // Log the result
    console.log(`User Twits: ${twits}`);
  } catch (error) {
    console.error("Error fetching twits:", error);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
