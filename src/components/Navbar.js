import React, { Component } from "react";
import Identicon from "identicon.js";
// import logo from "../zap.svg";
// import useMetaMask from "./connector/metamask";

// import { injected } from "./connector/connector";
// import { Button } from "react-bootstrap";
import "./Navbar.css";

class Navbar extends Component {

  render() {
  return (
    <nav className="navbar navbar-transparent bg-dark p-0 text-monospace">
       <a
        className="navbar-brand col-sm-3 col-md-2 mr-0"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <span className="display_font">Coreto </span>
          <span className="chinese_font">分享</span>
        </p>
      </a>
      <div className="navbar-nav px-3 address-btn"> 
        {/* <small id="account">
            <a target="_blank"
               alt=""
               className="text-white "
               rel="noopener noreferrer"
               href={"https://etherscan.io/address/" + this.props.account}>
              {this.props.account.substring(0,6)}..hi.{this.props.account.substring(38,42)}
            </a>
          </small>
          { this.props.account
            ? <img
                alt=""
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
            : <span></span>
          }
           */}
        {/* <Button variant="secondary" onClick={connect} disabled={shouldDisable}>
          Connect Wallet
        </Button>
        <div className="mt-2 mb-2">
          Connected Account:{" "}
          {isActive ? (
            <div>
              <small id="account">
                <a
                  target="_blank"
                  alt=""
                  className="text-white "
                  rel="noopener noreferrer"
                  href={"https://etherscan.io/address/" + account}
                >
                  {account.substring(0, 6)}....{account.substring(38, 42)}
                </a>
              </small>
              <img
                alt=""
                className="ml-2"
                width="30"
                height="30"
                src={`data:image/png;base64,${new Identicon(
                  account,
                  30
                ).toString()}`}
              />
            </div>
          ) : (
            ""
          )}
        </div> */}
        {/* <Button variant="danger" onClick={disconnect}>
        Disconnect MetaMask
      </Button> */}
                {/* <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </small>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          // </li>*/}
          <ul>
          <li>
            <p id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </p>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
  
          </ul>
                </div>
       
    </nav>
  );
}
}
export default Navbar;
