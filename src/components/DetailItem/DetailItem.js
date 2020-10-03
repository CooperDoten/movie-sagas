import React, { Component } from 'react';
import {connect} from 'react-redux';


class DetailItem extends Component {

  render() {
    console.log('made it into detailItem', this.props.reduxState)
    return (
       <div>
           <h1>{this.props.movie.title}</h1>
           <img src={this.props.movie.poster} alt="movie poster"/>
           {this.props.movie.description}

       </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(DetailItem);