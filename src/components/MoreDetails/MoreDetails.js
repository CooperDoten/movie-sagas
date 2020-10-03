import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetailItem from '../DetailItem/DetailItem';


class MoreDetails extends Component {

  render() {
      console.log('this is our reduxState', this.props.reduxState)
    return (
       <div>
           {this.props.reduxState.movie.map((movie, i) => 
            < DetailItem 
            key={i}
            movie={movie}/>
           )}

       </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(MoreDetails);