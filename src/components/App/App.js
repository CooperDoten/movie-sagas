import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import MoreDetails from '../MoreDetails/MoreDetails';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route path= '/' exact>
            <Movies />
          </Route>
          <Route path= '/moreDetails' exact>
            <MoreDetails />
          </Route>
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
