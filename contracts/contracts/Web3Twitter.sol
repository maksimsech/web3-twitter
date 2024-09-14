// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Web3Twitter {
    address owner;

    mapping(address => Twit[]) twitsByUser;

    struct Twit {
        string text;
        uint createdOn;
    }

    constructor() {
        owner = msg.sender;
    }

    function postTwit(string memory _text) public {
        twitsByUser[msg.sender].push(
            Twit({text: _text, createdOn: block.timestamp})
        );
    }

    function getUserTwits(address _user) external view returns (Twit[] memory) {
        return twitsByUser[_user];
    }
}
