import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Movies.css';
import MovieItem from '../MovieItem/MovieItem';
class Movies extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <MovieItem />
        <p>Empty Page</p>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(Movies);