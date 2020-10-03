import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, HashRouter as Router} from 'react-router-dom';

class DetailItem extends Component {
  sendHome = () => {
    this.props.history.push('/');
  }
  render() {
    // check out reduxState
    console.log('made it into detailItem', this.props.reduxState)
    return (
      <Router>
          <div>
              <h1>{this.props.movie.title}</h1>
              {/* loop over our genre item that was sent from movieItem
              to append specific genre(s) associated with movie */}
              <ul> Genre(s): {this.props.reduxState.genre.map((type, i) => 
                  <li key={i}>{type.name}</li> )}
              </ul>
              {/* props.movie is the movie passed from MoreDetails
              append poster and description for more details
              onClick of Home button sends user back to homepage */}
              <img src={this.props.movie.poster} alt="movie poster"/>
              {this.props.movie.description}
              <button  onClick={this.sendHome}>Home</button>
          </div>
       </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(DetailItem));