import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import './style.css';


var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unification.io:443"));
var max_blocks = 10;


export function addBlock(blockList, block, max_blocks) {
    if (blockList.length >= max_blocks) {
      blockList.pop()
    }

    blockList.unshift(block);
    return blockList
  }

 export function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
  }

 export function blocksToFetch(head, blockList, block_list_length) {
    var ret = [];

    if (blockList.length === 0) {
        for (var i = head - block_list_length + 1; i <= head; i++) {
            ret.push(i)
          }
        return ret;
    }
    var local_head = blockList[0];

    if (local_head.number === head) {
      return ret;
    }

    for (var j = local_head.number + 1; j <= head; j++) {
      ret.push(j)
    }
    return ret;
  }


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curr_block: null,
            blockList: []
        }
    }

    fetchAll(){
        web3.eth.getBlockNumber(function (error, curr_block_no) {
            if (!error)
                this.setState({
                    curr_block: curr_block_no
                });

                var xs = blocksToFetch(curr_block_no, this.state.blockList, max_blocks)

                xs.forEach(function (item, index) {
                    web3.eth.getBlock(item, function (error, block) {
                        if (error)
                            console.log(error);
                        else {
                            var blockList = addBlock(this.state.blockList, block, max_blocks);
                            blockList = sortByKey(blockList, "number")
                            this.setState(
                                {blockList: blockList}
                            )
                        }
                    }.bind(this));
                }.bind(this));
        }.bind(this));
    }

    componentWillMount() {
        this.fetchAll();
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.fetchAll()
        }, 15000);
      }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var tableRows = [];
        _.each(this.state.blockList, (value, index) => {
            tableRows.push(
                <tr key={this.state.blockList[index]["number"]}>
                    <td className="tdCenter">{this.state.blockList[index]["number"]}</td>
                    <td><Link to={`/block/${this.state.blockList[index]["number"]}`}>{this.state.blockList[index]["hash"]}</Link></td>
                </tr>
            )
        });

        return (
            <div className="Home">
                <h2>Home</h2>
                Current Block: {this.state.curr_block}
                <div>
                    <table>
                        <thead><tr>
                            <th>Block No</th>
                            <th>Hash</th>
                        </tr></thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home;
