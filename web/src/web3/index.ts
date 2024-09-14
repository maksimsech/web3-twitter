import Web3 from 'web3'
import abi from './abi.json'
import {get, writable} from 'svelte/store'


const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const web3 = new Web3('http://127.0.0.1:8545/')

const contractInstance = new web3.eth.Contract(abi, contractAddress)

export interface Twit {
    text: string
    createdOn: number
}

export const initialized = writable<boolean>(false)
export const account = writable<string | null>(null)
export const accounts = writable<string[]>([])

export async function initialize() {
    if (!window.ethereum) {
        throw new Error('no metamask')
    }

    const userAccounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" });
    if (!userAccounts.length) {
        throw new Error('no accounts')
    }

    accounts.set(userAccounts)
    account.set(userAccounts[0])
    initialized.set(true)
}

export async function postTwit(text: string) {
    try {
        const gasEstimation = await contractInstance.methods.postTwit(text).estimateGas()
        await contractInstance.methods.postTwit(text).send({ from: getCurrentAccount(), gas: gasEstimation.toString() });
    } catch (e) {
        console.error(e)
    }
}

export async function getUserTwits(account: string): Promise<Twit[]> {
    try {
        const gasEstimation = await contractInstance.methods.getUserTwits(account).estimateGas()
        const result = await contractInstance.methods.getUserTwits(account).call({ from: account, gas: gasEstimation.toString() });
        return result as Twit[] || [];
    } catch (e) {
        console.error(e)
        return []
    }
}

export function getCurrentAccount() {
    const currentAccount = get(account)
    if (!currentAccount) {
        throw new Error('not initialized')
    }

    return currentAccount
}

export async function refreshAccounts(): Promise<void> {
    try {
        if (!window.ethereum) {
            throw new Error('no metamask')
        }
        initialized.set(false)
        const userAccounts: string[]  = await window.ethereum.request({ method: 'eth_accounts' });
        if (userAccounts.length > 0) {
            accounts.set(userAccounts)
            account.set(userAccounts[0])
        }
    } catch (error) {
        console.error('Failed to refresh accounts', error);
    }
    initialized.set(true)
}

export function listenForAccountChanges(): () => void {
    if (!window.ethereum) {
        throw new Error('no metamask')
    }

    const callback = (userAccounts: string[]) => {
        accounts.set(userAccounts)

        const currentAccount = getCurrentAccount()
        if (!!currentAccount && userAccounts.includes(currentAccount)) {
            
        }
        if (userAccounts.length > 0) {
            account.set(userAccounts[0]);
        } else {
            account.set(null);
        }
    }

    window.ethereum.on('accountsChanged', callback);
    return () => window.ethereum?.removeListener('accountsChanged', callback);
  }