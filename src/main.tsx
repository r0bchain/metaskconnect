import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import '@rainbow-me/rainbowkit/styles.css';

// 1. Create a new QueryClient instance
const queryClient = new QueryClient()

// 1. Configure chains
const projectId = 'e5076ec19c150fd7a8a3f5fd3bbb99d2';
const chains = [mainnet, polygon, optimism, arbitrum] as const;

// 2. Configure default wallets (MetaMask, Coinbase, etc.)
const { connectors } = getDefaultWallets({
  appName: 'My App',
  projectId,
});

// 3. Create Wagmi configuration
const config = createConfig({
  chains,
  connectors,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
});

// 5. Render the app with all required providers
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} initialChain={mainnet}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </StrictMode>
);