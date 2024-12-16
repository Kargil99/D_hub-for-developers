import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const [message, setMessage] = useState('');
    const [signature, setSignature] = useState('');

    const handleSign = async () => {
        try {
            if (!publicKey) throw new Error('Wallet not connected!');
            const encodedMessage = new TextEncoder().encode(message);
            const signedMessage = await signMessage(encodedMessage);
            setSignature(Buffer.from(signedMessage).toString('hex'));
        } catch (error) {
            console.error('Error signing message:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message to sign"
            />
            <button onClick={handleSign} disabled={!publicKey}>
                Sign Message
            </button>
            {signature && (
                <div className="success-message">
                    <p>Signature: {signature}</p>
                </div>
            )}
        </div>
    );
}