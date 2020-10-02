import React, { Component } from 'react';
import {connect} from 'react-redux';
import './MovieItem.css';
import {Link} from 'react-router-dom';

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
    })
    
}
  render() {
    return (
       <div className="movieItem"
       onClick={() => this.moreDetails(this.props.movie)}>
           <Link to='/moreDetails'>
         <img src={this.props.movie.poster} alt="movie poster"/>
         {/* <Route path= '/moreDetails' exact>
            <MoreDetails />
          </Route> */}
          </Link>
       </div>
    );
  }
}

export default connect()(MovieItem);