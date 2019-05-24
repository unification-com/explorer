import React, { Component } from 'react';
import Web3 from 'web3';
import './style.css';


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
        var web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-testnet.unification.io:443"));
        web3.eth.getBlockNumber(function (error, result) {
            if (!error)
                console.log(result)
                this.setState({
                    curr_block: result
                });
        }.bind(this));
    }

    render() {
        return (
            <div className="Home">
                <h2>Home</h2>
                Current Block: {this.state.curr_block}
            </div>
        );
    }
}

export default Home;