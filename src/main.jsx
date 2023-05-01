import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { DAppProvider, Goerli } from '@usedapp/core';

const config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: 'https://goerli.infura.io/v3/9a543b6692c44e7087362ce2ebfa70b1',
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DAppProvider>
  </React.StrictMode>,
)
