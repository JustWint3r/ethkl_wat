import { ethers } from "ethers"
import './App.css'

function App() {

  const getBlock = async() => {

    //get latest block number

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()

    console.log(block)
  }





  return (
   
      <div className = "title">
        <p>we so ded wtf</p>
        <h1>EtherTix</h1>
      </div>
  
  );
}

export default App;
