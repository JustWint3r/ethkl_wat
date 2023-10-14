import { useState } from 'react';
import { ethers } from 'ethers'; // You'll need ethers.js or web3.js for Ethereum interaction


const NFTTimeLockForm = ({ contractAddress, abi, signer }) => {
    const [unlockTimestamp, setUnlockTimestamp] = useState('');

    const handleUnlockTimestampChange = (event) => {
        setUnlockTimestamp(event.target.value);
    };

    const handleSetUnlockTimestamp = async () => {
        try {
            // Convert the date and time input to a Unix timestamp (in seconds)
            const desiredTimestamp = Math.floor(Date.parse(unlockTimestamp) / 1000);

            // Connect to the smart contract
            const contract = new ethers.Contract(contractAddress, abi, signer);

            // Call the setUnlockTimestamp function
            const tx = await contract.setUnlockTimestamp(desiredTimestamp);
            await tx.wait();

            alert('Unlock timestamp set successfully!');
        } catch (error) {
            console.error('Error setting unlock timestamp:', error);
        }
    };

    return (
        <div>
            <h1>Set Unlock Timestamp for NFT</h1>
            <input
                type="datetime-local"
                value={unlockTimestamp}
                onChange={handleUnlockTimestampChange}
            />
            <button onClick={handleSetUnlockTimestamp}>Set Unlock Timestamp</button>
        </div>
    );
};

export default NFTTimeLockForm;
