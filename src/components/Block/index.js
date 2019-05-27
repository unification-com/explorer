import React, { Component } from 'react';
import './style.css';

import Web3 from 'web3';
import { Link } from 'react-router-dom'


var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unification.io:443"));


class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: [],
      transactions: []
    }
  }

  getBlockState(block_hash) {
    web3.eth.getBlock(block_hash, function (error, currBlockObj) {
      if (error)
          console.log(error);
      else {
        this.setState({
          block_id: currBlockObj.number,
          block_hash: currBlockObj.hash,
          block_ts: Date(parseInt(this.state.block.timestamp, 10)).toString(),
          block_txs: parseInt(currBlockObj.transactions.slice().length, 10),
          block: currBlockObj,
          transactions: currBlockObj.transactions,
        })
      }
    }.bind(this));
  }

  componentWillMount() {
    // Get the block hash from URL arguments (defined by Route pattern)
    var block_hash = this.props.match.params.blockHash;
    this.getBlockState(block_hash);
  }

  componentWillReceiveProps(nextProps) {
    var block_hash_old = this.props.match.params.blockHash;
    var block_hash_new = nextProps.match.params.blockHash;
    if (block_hash_old !== block_hash_new)
    this.getBlockState(block_hash_new);
  }

  render() {
    const block = this.state.block;

    let txRows = this.state.transactions;

    return (
      <div className="Block">
        <h2>Block Info</h2>
        <div>
          <table>
            <tbody>
              <tr><td className="tdLabel">Height: </td><td className="tdContents">{this.state.block.number}</td></tr>
              <tr><td className="tdLabel">Timestamp: </td><td className="tdContents">{this.state.block_ts}</td></tr>
              <tr><td className="tdLabel">Transactions: </td><td className="tdContents">{this.state.block_txs}</td></tr>
              <tr><td className="tdLabel">Hash: </td><td className="tdContents">{this.state.block.hash}</td></tr>
              <tr><td className="tdLabel">Parent hash: </td>
              <td><Link to={`../block/${this.state.block.parentHash}`}>{this.state.block.parentHash}</Link></td></tr>
              <tr><td className="tdLabel">Nonce: </td><td className="tdContents">{this.state.block.nonce}</td></tr>
              <tr><td className="tdLabel">Size: </td><td className="tdContents">{this.state.block.size} bytes</td></tr>
              <tr><td className="tdLabel">Gas Limit: </td><td className="tdContents">{block.gasLimit}</td></tr>
              <tr><td className="tdLabel">Gas Used: </td><td className="tdContents">{block.gasUsed}</td></tr>
              <tr><td className="tdLabel">Sha3Uncles: </td><td className="tdContents">{block.sha3Uncles}</td></tr>
              <tr><td className="tdLabel">Extra data: </td><td className="tdContents">{block.extraData}</td></tr>
            </tbody>
          </table>
        </div>
        <h2>Trasnactions</h2>
        <div>
          <table>
            <tbody>
            {txRows.map((r, idx) => (
              <tr key={r}>
                <td>{idx}</td>
                <td><Link to={`../tx/${r}`}>{r}</Link></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}


export default Block;