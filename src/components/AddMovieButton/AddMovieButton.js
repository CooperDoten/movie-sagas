import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './AddMovieButton.css';

class Movies extends Component {
//onClick send user to AddMovie component
toAddMovie = () => {
  this.props.history.push('/AddMovie');
}
sendHome = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <Router>
            <div className="homeHeader">
            <img className = "logo"
        src="images/Netflix_Logo_RGB.png"/>
            <button className="addMovieButton"
                onClick={this.toAddMovie}>Add A Movie</button>
            <button  className="HomeButton"
                onClick={this.sendHome}>Home</button>
            </div>
      </Router>
    );
  }
}

export default connect()(withRouter(Movies));