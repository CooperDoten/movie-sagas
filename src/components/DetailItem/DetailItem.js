import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, HashRouter as Router} from 'react-router-dom';
import './DetailItem.css';

class DetailItem extends Component {
  
  render() {
    // check out reduxState
    console.log('made it into detailItem', this.props.reduxState)
    return (
      <Router>
          <div className="detailsDiv">
              <h1>{this.props.movie.title}</h1>
              {/* props.movie is the movie passed from MoreDetails.js
              DetailItem is appending that information
              onClick of Home button sends user back to homepage */}
              <img className="detailsPoster" 
                src={this.props.movie.poster} alt="movie poster"/>
               {/* loop over our genre item that was sent from movieItem
              to append specific genre(s) associated with movie */}
              <ul id="genreUl"> For fans of: {this.props.reduxState.genre.map((type, i) => 
                  <li key={i}>{type.name}</li> )}
              </ul>
              <p className="detailsPara">{this.props.movie.description}</p>
          </div>
       </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(DetailItem));