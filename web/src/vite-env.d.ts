/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Window {
    ethereum?: MetaMaskEthereumProvider;
}

// You can use this as a basic type for the Ethereum provider from MetaMask
interface MetaMaskEthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (eventName: string, callback: (...args: any[]) => void) => void;
    removeListener: (eventName: string, callback: (...args: any[]) => void) => void;
}