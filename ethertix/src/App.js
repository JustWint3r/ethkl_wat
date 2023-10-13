import { ethers } from "ethers"

function App() {

  const getBlock = async() => {

    //get latest block number

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()

    console.log(block)
  }





  return (
    <div>
      <p>Sup</p>
    </div>
  );
}

export default App;
