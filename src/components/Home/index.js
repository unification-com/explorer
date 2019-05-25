import React, { Component } from 'react';
import Web3 from 'web3';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import './style.css';


var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unification.io:443"));


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            block_ids: [],
            block_hashes: [],
            curr_block: null
        }
    }

    componentWillMount() {
        web3.eth.getBlockNumber(function (error, curr_block_no) {
            if (!error)
                this.setState({
                    curr_block: curr_block_no
                });

                var max_blocks = 10;
                const block_ids = this.state.block_ids.slice();
                const block_hashes = this.state.block_hashes.slice();

                for (var i = 0; i < max_blocks; i++ , curr_block_no--) {
                    web3.eth.getBlock(curr_block_no, function (error, block) {
                        if (error)
                            console.log(error);
                        else {
                            block_ids.push(block.number);
                            block_hashes.push(block.hash);
                            this.setState({
                                block_ids: block_ids,
                                block_hashes: block_hashes
                            });
                        }
                    }.bind(this));
                }
        }.bind(this));
    }

    render() {
        var tableRows = [];
        _.each(this.state.block_ids, (value, index) => {
            tableRows.push(
                <tr key={this.state.block_hashes[index]}>
                    <td className="tdCenter">{this.state.block_ids[index]}</td>
                    <td><Link to={`/block/${this.state.block_hashes[index]}`}>{this.state.block_hashes[index]}</Link></td>
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
