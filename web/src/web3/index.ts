import {
    createConfig,
    getAccount,
    getChainId,
    getConnectors,
    http,
    readContract,
    watchAccount,
    watchChainId,
    watchConnectors,
    writeContract,
    reconnect as reconnectWagmi,
    getConnections,
    watchConnections,
} from '@wagmi/core'
import {get, readable} from 'svelte/store'
import {hardhat} from 'viem/chains'
import {abi} from './abi'
import {checksumAddress, type Address} from 'viem'

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

const chains = [
    hardhat, // Local chain
] as const;

const config = createConfig({
    chains,
    connectors: [],
    transports: {
        [hardhat.id]: http(),
    }
})


export const connectors = readable(getConnectors(config), (set) => 
    watchConnectors(config, { onChange: set })
)

export const chainId = readable(getChainId(config), (set) =>
    watchChainId(config, { onChange: set })
)

export const account = readable(getAccount(config), (set) =>
    watchAccount(config, { onChange: set })
)

export const connections = readable(getConnections(config), (set) =>
    watchConnections(config, { onChange: set })
)

export const provider = readable<unknown | undefined>(undefined, (set) =>
    watchAccount(config, {
        onChange: async (account) => {
            if (!account.connector) {
                return set(undefined)
            }

            set(await account.connector?.getProvider())
        }
    })
)

export async function reconnect() {
    await reconnectWagmi(config)
}

export interface Twit {
    text: string
    createdOn: number
}

export async function getUserTwits(userAddress: Address): Promise<ReadonlyArray<Twit>> {
    userAddress = checksumAddress(userAddress)
    const result = await readContract(config, {
        abi,
        address: contractAddress,
        functionName: 'getUserTwits',
        args: [
            userAddress,
        ],
        account: get(account)?.address
    })
    return result.map(r => ({
        text: r.text,
        createdOn: Number(r.createdOn.toString())
    }))
}

export async function postTwit(text: string) {
    console.log(getChainId(config))
    return await writeContract(config, {
        abi,
        address: contractAddress,
        functionName: 'postTwit',
        args: [
            text,
        ],
        account: get(account)?.address
    })
}
