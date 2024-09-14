import Web3 from 'web3'
import abi from './abi.json'
import {get, writable, type Writable} from 'svelte/store'


const contractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

const web3 = new Web3('http://127.0.0.1:8545/')

const contractInstance = new web3.eth.Contract(abi, contractAddress)

export interface Twit {
    text: string
    createdOn: number
}

export const account = writable<string | null>(null)

export async function initialize() {
    if (!window.ethereum) {
        throw new Error('no metamask')
    }

    const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (!accounts.length) {
        throw new Error('no accounts')
    }

    account.set(accounts[0])

    return account as Writable<string>
}

export async function postTwit(text: string) {
    try {
        const gasEstimation = await contractInstance.methods.postTwit(text).estimateGas()
        await contractInstance.methods.postTwit(text).send({ from: getAccountSnapshot(), gas: gasEstimation.toString() });
    } catch (e) {
        console.error(e)
    }
}

export async function getUserTwits(account: string): Promise<Twit[]> {
    try {
        const gasEstimation = await contractInstance.methods.getUserTwits(account).estimateGas()
        console.log(gasEstimation)
        return await contractInstance.methods.getUserTwits(account).call({ from: getAccountSnapshot(), gas: gasEstimation.toString() });
    } catch (e) {
        console.error(e)
        return []
    }
}

function getAccountSnapshot() {
    const currentAccount = get(account)
    if (!currentAccount) {
        throw new Error('not initialized')
    }

    return currentAccount
}