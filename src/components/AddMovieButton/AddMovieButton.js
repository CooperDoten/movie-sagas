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
                    src="images/Netflix_Logo_RGB.png"
                    alt="Netflix logo"/>
                    
              <div className="buttonWrapper">   
                <button className="HeaderButton" 
                        onClick={this.toAddMovie}>Add A Movie</button>
              
                <button className="HeaderButton"
                        onClick={this.sendHome}>Home</button>
               </div> 
            </div>
      </Router>
    );
  }
}

export default connect()(withRouter(Movies));