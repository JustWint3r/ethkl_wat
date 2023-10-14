import { ethers } from "ethers"
import './App.css'
import logo from './logo.png'

function App() {

  const getBlock = async() => {

    //get latest block number

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()

    console.log(block)
  }





  return (
   
    <div class="main-menu">
    <img src={logo} alt="EtherTix Logo" />
    <h1 class="title">EtherTix</h1>
    <p class="slogan">Your ticket, your NFT, your experience.</p>
    <div class="buttons">
        <button class="connect-wallet">Connect Wallet</button>
        <button class="buy-tickets">Buy Tickets</button>
        <button class="view-history">View History</button>
    </div>
  </div>
  );
}

export default App;
