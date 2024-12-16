import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import './styles/global.css';

import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';
import { RequestAirdrop } from './RequestAirdrop';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="container">
            <div className="wallet-buttons">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            
            <div className="section-card">
              <h2 className="section-title">Request Airdrop</h2>
              <RequestAirdrop />
            </div>

            <div className="section-card">
              <h2 className="section-title">Sign Message</h2>
              <SignMessage />
            </div>

            <div className="section-card">
              <h2 className="section-title">Send Tokens</h2>
              <SendTokens />
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;