import { ethers } from "ethers"
import './App.css'
import logo from './logo.png'
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Subpage from './viewHistory.js';


function App() {

  const getBlock = async() => {

    //get latest block number

    const wallet = new ethers.BrowserProvider(window.ethereum)
    const block = await wallet.getBlockNumber()

    console.log(block)
  }





  return (
   
    <div class="main-menu">
    <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    <img src={logo} alt="EtherTix Logo" />
    <h1 class="title">EtherTix</h1>
    <p class="slogan">Your ticket, your NFT, your experience.</p>
    <div class="buttons">
        <button class="button">
          Connect Wallet
        <div class ="hoverEffect">
          <div>
          </div>
        </div></button>
        <button class="button">
          Buy Tickets
        <div class="hoverEffect">
          <div>
          </div>
        </div></button>
        <button class="button">
          View History
        <div class="hoverEffect">
          <div>
          </div>
        </div></button>

<div class="hoverEffect">
<div>
</div>
</div>
    </div>
  </div>
  );
}

export default App;

