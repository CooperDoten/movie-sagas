import React, { Component } from 'react';
import {connect} from 'react-redux';
import './MovieItem.css';
import {Link} from 'react-router-dom';
import {withRouter, HashRouter as Router} from 'react-router-dom';

class MovieItem extends Component {
state = {
    movie: {}
}
moreDetails = (movie) => {
    console.log('navigate to moreDetails', movie);
    this.setState({
        movie: this.movie
    })
    this.props.dispatch({
        type: 'FETCH_MOVIE',
        payload: movie
    });
    this.props.dispatch({
        type: 'FETCH_GENRE',
        payload: {title: movie.title}
    });
}
  render() {
    return (
      <Router>
       <div className="movieItem"
       onClick={() => this.moreDetails(this.props.movie)}>
           <Link to='/moreDetails'>
         <img src={this.props.movie.poster} alt="movie poster"/>
          </Link>
       </div>
       </Router>
    );
  }
}

export default connect()(withRouter(MovieItem));