import React, {Component} from 'react';
import Address from './../Address';
import Block from './../Block';
import Home from './../Home';
import Tx from './../Tx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-search">
          <input type="text" id="search" name="search"
                 placeholder="search for address..."/>
        </div>
        <div className="App-header">
          <h2>UND BLOCK EXPLORER</h2>
        </div>

        <div className="App-nav">
          <Router>
            <div>
              <Link to="/">Home</Link>
              <Route exact path="/" component={Home}/>
              <Route path="/block/:blockHash" component={Block}/>
              <Route path="/tx/:tx" component={Tx}/>
              <Route path="/address/:address" component={Address}/>
            </div>
          </Router>
        </div>

        <div className="App-footer">Git
          SHA: {process.env.REACT_APP_GIT_SHA}</div>
      </div>
    );
  }
}

export default App;
