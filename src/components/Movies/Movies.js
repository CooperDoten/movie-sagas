import React, { Component } from 'react';
import {connect} from 'react-redux';
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
  render() {
     console.log('movielist reduxState', this.props.reduxState);
    return (
      <div className="App">
        <h1>Movies!</h1>
        <div className="movieList">
            {this.props.reduxState.movies.map((movie, i) => 
                <MovieItem 
                key={i}
                movie={movie}
                />
        )}
        </div>
        <p>Empty Page</p>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(Movies);