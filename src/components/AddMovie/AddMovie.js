import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './AddMovie.css';


class AddMovie extends Component {

    componentDidMount() {
        this.fetchGenres();
    }
    state = {
        movie: {
            title: '',
            poster: '',
            description: '',
            genre_id: 'selected'
        }
    }
    fetchGenres = () => {
        this.props.dispatch({
            type: 'FETCH_GENRES'
        })
    }
    sendHome = () => {
        this.props.history.push('/');
      }
    addMovie = () => {
        console.log('we gon add a movie', this.state.movie);
        this.props.dispatch({
            type: 'CREATE_MOVIE',
            payload: this.state.movie
        });
        this.setState({
            movie: {
                title: '',
                poster: '',
                description: '',
                genre_id: 'selected'
            }
        });
    }
    onChange = (event, propertyName) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [propertyName]: event.target.value
            }
        });
        console.log(this.state.movie);
    }
    onChangeGenre = (event) => {
        console.log('made it into onChangeGenre', event.target.value);
        this.setState({
            movie: {
                ...this.state.movie,
                genre_id: event.target.value
            }
        })
    }
  render() {
    return (
      <Router>
          <div>
             In add movie
             <form onSubmit={this.addMovie}>
             <input type="text" placeholder="Title" 
                value={this.state.movie.title}
                onChange={(event)=> this.onChange(event, 'title')}/>
             <input type="text" placeholder="Image URL" 
             value={this.state.movie.poster}
             onChange={(event)=> this.onChange(event, 'poster')}/>
             <input type="text" placeholder="Synopsis" 
             value={this.state.movie.description}
             onChange={(event)=> this.onChange(event, 'description')}/>
             <label>Choose a Genre:</label>
             <select  value={this.state.movie.genre_id} onChange={(event) => this.onChangeGenre(event)}> 
             <option disabled value="selected"> -- select an option -- </option>
                 {this.props.reduxState.genres.map((genre, i) =>
                 <option key={i} value={genre.id}>{genre.name}</option>
                 )}
             </select>
             <button>Save</button>
             <button onClick={this.sendHome}>Cancel</button>
             </form>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(AddMovie));