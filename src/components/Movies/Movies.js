import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Movies.css';
import MovieItem from '../MovieItem/MovieItem';

class Movies extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
         this.fetchMovieList(); 
}
fetchMovieList = () => {
    this.props.dispatch({
        type: 'FETCH_MOVIELIST'
    });
}
toAddMovie = () => {
  this.props.history.push('/AddMovie');
}
  render() {
     console.log('movielist reduxState', this.props.reduxState);
    return (
      <Router>
        <div className="homePage">
        <h1>Movies!</h1>
        <button onClick={this.toAddMovie}>Add A Movie!</button>
          <div className="movieList">
              {this.props.reduxState.movies.map((movie, i) => 
                  <MovieItem 
                  key={i}
                  movie={movie}/>
              )}
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(Movies));