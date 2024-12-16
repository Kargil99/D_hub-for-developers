import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export function SendTokens() {
    const { publicKey } = useWallet();
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const handleSend = async () => {
        // Add your token sending logic here
    };

    return (
        <div>
            <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Recipient address"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                min="0"
            />
            <button onClick={handleSend} disabled={!publicKey}>
                Send Tokens
            </button>
        </div>
    );
}