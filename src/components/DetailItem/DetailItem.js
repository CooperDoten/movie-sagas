import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class DetailItem extends Component {

  render() {
    console.log('made it into detailItem', this.props.reduxState)
    return (
       <div>
           <h1>{this.props.movie.title}</h1>
           {this.props.reduxState.genre.map((type, i) => 
               <p key={i}
               >Genres: {type.name}</p>
            )}
           <img src={this.props.movie.poster} alt="movie poster"/>
           {this.props.movie.description}
           <button><Link to="/">Home</Link></button>
       </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(DetailItem);