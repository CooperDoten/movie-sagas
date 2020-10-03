import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import Movies from '../Movies/Movies';
import MoreDetails from '../MoreDetails/MoreDetails';
import DetailItem from '../DetailItem/DetailItem';
import AddMovie from '../AddMovie/AddMovie';
import AddMovieButton from '../AddMovieButton/AddMovieButton'
class App extends Component {
  
  // Renders the entire app on the DOM
 //send all routes for components
  render() {
    return (
      // <button onClick={this.toAddMovie}>Add A Movie!</button>
      <div className="App">
        <Router>
        <AddMovieButton />
          <Route path= '/' exact>
            <Movies />
          </Route>
          <Route path= '/moreDetails' exact>
            <MoreDetails />
          </Route>
          <Route path= '/detailItem' exact>
            <DetailItem />
          </Route>
          <Route path= '/AddMovie' exact>
            <AddMovie />
          </Route>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
