import React, { Component } from 'react';
import {connect} from 'react-redux';


class DetailItem extends Component {

  render() {
    console.log('made it into detailItem')
    return (
       <div>
           <h1>{this.props.movie.title}</h1>
           <img src={this.props.movie.poster} alt="movie poster"/>
           {this.props.movie.description}

       </div>
    );
  }
}
export default connect()(DetailItem);