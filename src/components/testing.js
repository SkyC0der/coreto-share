import React, { Component } from "react";
// import DStorage from '../abis/DStorage.json'
// import Reactfrom 'react';
// // import Navbar from './Navbar'
// import Main from './Main'
import Web3 from "web3";
// import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import Web3Modal from "web3modal";

function Testing() {
  async function connectWallet(){
    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "3301d686897144a0a5c35b06cf14967b" // required
          }
        }
      };
    
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });
    
      const provider = await web3Modal.connect();
    
      const web3 = new Web3(provider);
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default Testing;
