import React, { Component } from 'react';
import {connect} from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>MovieItem!</h1>
       
        <p>We're in movie Item</p>
      </div>
    );
  }
}

export default connect()(MovieItem);