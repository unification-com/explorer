import React, { Component } from 'react';
import './style.css';
import _ from 'lodash';
import Web3 from 'web3';
import { Link } from 'react-router-dom'
import { MAINCHAIN_ABIS } from '../../constants'
const InputDataDecoder = require('ethereum-input-data-decoder');


var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unification.io:443"));


class Tx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: [],
      receipt: [],
      from_abi: [],
      to_abi: [],
      latestBlock: 0,
    }
  }

  getTxState(tx) {
    web3.eth.getTransaction(tx, function (error, transactionObj) {
      if (error)
          console.log(error);
      else {
        this.setState({
          transaction: transactionObj,
          from_abi: MAINCHAIN_ABIS[transactionObj.from],
          to_abi: MAINCHAIN_ABIS[transactionObj.to],
        })
      }
    }.bind(this));
  }

  getLatestBlock() {
    web3.eth.getBlockNumber(function(error, result){
      if(!error){
        this.setState({
          latestBlock: result,
        });
      } else {
        console.error(error);
      }
    }.bind(this));
  }

  getTxReceipt(tx) {
    web3.eth.getTransactionReceipt(tx, function (error, transactionReceiptObj) {
      if (error)
          console.log(error);
      else {
        this.setState({
          receipt: transactionReceiptObj,
        })
      }
    }.bind(this));
  }

  componentWillMount() {
    // Get the block hash from URL arguments (defined by Route pattern)
    var tx = this.props.match.params.tx;
    this.getLatestBlock();
    this.getTxState(tx);
    this.getTxReceipt(tx);
  }

  componentWillReceiveProps(nextProps) {
    var tx_old = this.props.match.params.tx;
    var tx_new = nextProps.match.params.tx;
    if (tx_old !== tx_new)
    this.getTxState(tx_new);
  }

  render() {
    const transaction = this.state.transaction;
    const receipt = this.state.receipt;

    var inputDecoder;
    let txInput = transaction.input;
    if(this.state.to_abi) {
        inputDecoder = new InputDataDecoder(this.state.to_abi);
        let decodedInput = inputDecoder.decodeData(transaction.input);

        let inputs = [];

        for( var i = 0; i < decodedInput.inputs.length; i++) {

            let thisInput = '';
            switch(decodedInput.types[i]) {
              case 'uint256':
                thisInput = decodedInput.inputs[i].toString();
                break;
              case 'bytes32':
              case 'address':
                thisInput = web3.utils.bytesToHex(decodedInput.inputs[i]);
                break;
              default:
                break;
            }

            inputs.push(
              <tr key={decodedInput.names[i]}>
                <td>{decodedInput.names[i]}</td>
                <td>{decodedInput.types[i]}</td>
                <td>{thisInput}</td>
              </tr>
            );
        }

        txInput = (
            <table>
              <tbody>
                <tr>
                  <td>Method:</td>
                  <td>{decodedInput.method}()</td>
                  <td></td>
                </tr>
                {inputs}
              </tbody>
            </table>
        )

    }


    let txLogs = [];
    _.each(receipt.logs, (value, index) => {

      let txLogTopics = [];
      _.each(value["topics"], (topic, idx) => {
        txLogTopics.push(
            <li key={topic}>{topic}</li>
        )
      });

      txLogs.push(
        <table key={value["logIndex"]}>
          <tbody>
            <tr>
              <td className="tdLabel">Log Index</td>
              <td className="tdContents">
                {value["logIndex"]}
              </td>
            </tr>
            <tr>
              <td className="tdLabel">Log ID</td>
              <td className="tdContents">
                {value["id"]}
              </td>
            </tr>
            <tr>
              <td className="tdLabel">Removed</td>
              <td className="tdContents">
                {value["removed"]}
              </td>
            </tr>
            <tr>
              <td className="tdLabel">Data</td>
              <td className="tdContents">
                {value["data"]}
              </td>
            </tr>
            <tr>
              <td className="tdLabel">Topics</td>
              <td className="tdContents">
                <ul>
                  {txLogTopics}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      )
    });

    return (
      <div className="Tx">
        <h2>Transaction Info</h2>
        <h3>{this.state.latestBlock - transaction.blockNumber} Confirmations</h3>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="tdLabel">Tx Hash: </td>
                <td className="tdContents">
                  {transaction.hash}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Tx Index: </td>
                <td className="tdContents">
                  {transaction.transactionIndex}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Block: </td>
                <td className="tdContents">
                  <Link to={`../block/${transaction.blockHash}`}>
                    {transaction.blockNumber}
                  </Link> ({transaction.blockHash})
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Value: </td>
                <td className="tdContents">
                  {transaction.value} UND
                </td>
              </tr>
              <tr>
                <td className="tdLabel">From: </td>
                <td className="tdContents">
                  <Link to={`../address/${transaction.from}`}>
                    {transaction.from}
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="tdLabel">To: </td>
                <td className="tdContents">
                  <Link to={`../address/${transaction.to}`}>
                    {transaction.to}
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Nonce: </td>
                <td className="tdContents">
                  {transaction.nonce}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Gas: </td>
                <td className="tdContents">
                  {transaction.gas}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Gas Price: </td>
                <td className="tdContents">
                  {transaction.gasPrice}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Input: </td>
                <td className="tdContents">
                  {txInput}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Tx Signature</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="tdLabel">r: </td>
                <td className="tdContents">
                  {transaction.r}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">s: </td>
                <td className="tdContents">
                  {transaction.s}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">v: </td>
                <td className="tdContents">
                  {transaction.v}
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <h2>Tx Receipt</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <td className="tdLabel">Status: </td>
                <td className="tdContents">
                  {receipt.status}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Contract Address: </td>
                <td className="tdContents">
                  {receipt.contractAddress}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Cumulative Gas Used: </td>
                <td className="tdContents">
                  {receipt.cumulativeGasUsed}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Gas Used: </td>
                <td className="tdContents">
                  {receipt.gasUsed}
                </td>
              </tr>
              <tr>
                <td className="tdLabel">Logs Bloom: </td>
                <td className="tdContents">

                    {receipt.logsBloom}

                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Logs</h2>
        <div>
          {txLogs}
        </div>
      </div>
    );
  }

}

export default Tx;
