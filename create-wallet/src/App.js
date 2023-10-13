import {ethers} from 'ethers';


function App() {
  
  // Connect wallet
  const connectWallet = async () => {
    const wallet = new ethers.BrowserProvider(window.ethereum);
    const accounts = await wallet.listAccounts();
    console.log(accounts);
  }

  connectWallet();

  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default App;
