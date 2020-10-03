import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Movies.css';
import MovieItem from '../MovieItem/MovieItem';

class Movies extends Component {
  // Fetch our movieList!!!
  componentDidMount() {
         this.fetchMovieList(); 
}
fetchMovieList = () => {
    this.props.dispatch({
        type: 'FETCH_MOVIELIST'
    });
}
//onClick send user to AddMovie component
toAddMovie = () => {
  this.props.history.push('/AddMovie');
}
  render() {
     console.log('movielist reduxState', this.props.reduxState);
    return (
      <Router>
        <div className="homePage">
            <button onClick={this.toAddMovie}>Add A Movie!</button>
            {/* loop through our movieList and send to MovieItem component */}
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