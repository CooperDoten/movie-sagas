import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, HashRouter as Router} from 'react-router-dom';

class DetailItem extends Component {
  sendHome = () => {
    this.props.history.push('/');
  }
  render() {
    console.log('made it into detailItem', this.props.reduxState)
    return (
      <Router>
        <div>
            <h1>{this.props.movie.title}</h1>
            <ul> Genre(s): {this.props.reduxState.genre.map((type, i) => 
                <li key={i}>{type.name}</li> 
              )}</ul>
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