import {
    time,
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";


describe("Web3Twitter", function () {
    async function fixture() {
        const [owner, otherAccount] = await hre.ethers.getSigners();
        const Web3Twitter = await hre.ethers.getContractFactory("Web3Twitter");
        const web3Twitter = await Web3Twitter.deploy();

        return {
            web3Twitter,
            owner,
        }
    }

    describe("Save", function () {
        it("Should save and read data", async function () {
            const { web3Twitter, owner } = await loadFixture(fixture);

            const message = 'test';
            const tx = await web3Twitter.postTwit(message);

            const twits = await web3Twitter.getUserTwits(owner.address);

            expect(twits[0].text).to.be.eq(message)
        })
    })
})
