import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { sepolia, mainnet, foundry } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import * as allChains from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { jsonRpcProvider  } from 'wagmi/providers/jsonRpc'

const { chains, provider } = configureChains([foundry], [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: `http://127.0.0.1:8545/`,
    }),
  }),
],)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  provider
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
