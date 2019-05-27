import React, {Component} from 'react';
import Block from './../Block';
import Home from './../Home';
import Tx from './../Tx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './style.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>UND Block Explorer</h2>
                </div>
                <div className="App-nav">
                    <Router>
                        <div>
                            <Link to="/">Home</Link>
                            <Route exact path="/" component={Home}/>
                            <Route path="/block/:blockHash" component={Block}/>
                            <Route path="/tx/:tx" component={Tx}/>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;
