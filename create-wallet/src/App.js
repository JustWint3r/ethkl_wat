import { ethers } from 'ethers';
import { useState } from 'react';

function App() {
  const [wallet, setWallet] = useState(null);
  const [accounts, setAccounts] = useState([]);

  // Check if wallet is installed and enabled
  const isWalletInstalled = window.ethereum && window.ethereum.isMetaMask;

  // Connect wallet
  const connectWallet = async () => {
    if (!isWalletInstalled) {
      throw new Error('Please install and enable MetaMask');
    }

    try {
      const newWallet = new ethers.BrowserProvider(window.ethereum);
      setWallet(newWallet);
      const newAccounts = await newWallet.listAccounts();
      setAccounts(newAccounts);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
      {wallet && accounts.length > 0 && (
        <p>Connected to account: {accounts[0].address}</p>
      )}
    </div>
  );

}

export default App;
