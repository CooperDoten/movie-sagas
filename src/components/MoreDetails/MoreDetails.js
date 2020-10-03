import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetailItem from '../DetailItem/DetailItem';
import {withRouter, HashRouter as Router} from 'react-router-dom';
import './MoreDetails.css';

class MoreDetails extends Component {
  render() {
      //check our reduxState
      console.log('this is our reduxState', this.props.reduxState)
    return (
      <Router>
        <div className="moreDetails">
          {/* map over reduxState.movie to access the movie that was passed
          onClick from movieItem */}
            {this.props.reduxState.movie.map((movie, i) => 
              < DetailItem 
              key={i}
              movie={movie}/>
            )}
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(MoreDetails));