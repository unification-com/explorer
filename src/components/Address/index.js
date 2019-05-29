import React, { Component } from 'react';
import './style.css';
import Web3 from 'web3';
import { MAINCHAIN_ABIS } from '../../constants'

var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unification.io:443"));

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      transactions: [],
      abi: [],
      code: null,
      storage: null,
      balance: 0,
      type: null,
      txCount: 0,
    }
  }

  getBalance(address) {
      web3.eth.getBalance(address, function (error, balance) {
      if (error)
          console.log(error);
      else {
        this.setState({
          balance: balance,
        })
      }
    }.bind(this));
  }

  getCode(address) {
    web3.eth.getCode(address, function (error, code) {
      if (error)
          console.log(error);
      else {
        if(code !== '0x') {
          this.setState({
            code: code,
            abi: MAINCHAIN_ABIS[address],
            type: 'contract'
          })
        } else {
          this.setState({
            type: 'account'
          })
        }
      }
    }.bind(this));
  }

  getTransactionCount(address) {
    web3.eth.getTransactionCount(address, function (error, txCount) {
      if (error)
          console.log(error);
      else {
        this.setState({
          txCount: txCount,
        })
      }
    }.bind(this));
  }

  componentWillMount() {
    // Get the address from URL arguments (defined by Route pattern)
    let address = this.props.match.params.address;
    this.setState({
      address: address,
    })
    this.getBalance(address);
    this.getCode(address);
    this.getTransactionCount(address);
  }

  componentWillReceiveProps(nextProps) {
    let address_old = this.props.match.params.address;
    let address_new = nextProps.match.params.address;
    if (address_old !== address_new)
    this.setState({
      address: address_new,
    })
    this.getBalance(address_new);
    this.getCode(address_new);
    this.getTransactionCount(address_new);
  }

  render() {
    const balance = this.state.balance;
    const balance_und = web3.utils.fromWei(String(this.state.balance), "ether").toString(10);
    const address = this.state.address;
    const type = this.state.type;
    const code = this.state.code;
    const txCount = this.state.txCount;
    let code_row = null;

    if(type === 'contract') {
        code_row = (
          <tr>
            <td className="tdLabel">Code: </td>
            <td className="tdContents">
              {code}
            </td>
          </tr>
        )
    }

    return (
      <div className="Tx">
        <h2>Address Info: {address}</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="tdLabel">Balance: </td>
                <td className="tdContents">
                  {balance}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Balance UND: </td>
                <td className="tdContents">
                  {balance_und} UND
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Type: </td>
                <td className="tdContents">
                  {type}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Tx count: </td>
                <td className="tdContents">
                  {txCount}
                </td>
              </tr>
              {code_row}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default Address;
