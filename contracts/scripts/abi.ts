export const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserTwits",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "text",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "createdOn",
              "type": "uint256"
            }
          ],
          "internalType": "struct Web3Twitter.Twit[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_text",
          "type": "string"
        }
      ],
      "name": "postTwit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] as const