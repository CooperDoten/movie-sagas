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
          <div className="addMovieDiv">
              {/* form to add movie object with title, poster, descrip, genre 
              onChange/onChangeGenre to update local state to send
              onSubmit call addMovie to send data to Saga in index.js*/}
              <div className="addMovieForm">
             <form onSubmit={this.addMovie}>
                 <div className="inputDiv">
                 <label>Movie Title</label>
                    <input type="text"
                        value={this.state.movie.title}
                        onChange={(event)=> this.onChange(event, 'title')}/>
                        </div>
                        <div className="inputDiv">
                    <label>Movie Poster URL</label>
                    <input type="text" id="urlInput"
                        value={this.state.movie.poster}
                        onChange={(event)=> this.onChange(event, 'poster')}/>
                        </div>
                        <div className="inputDiv">
                    <label>Movie Plot</label>
                    <input type="text" id="plotInput"
                        value={this.state.movie.description}
                        onChange={(event)=> this.onChange(event, 'description')}/>
                        </div>
                        <div className="inputDiv">
                    <label>Choose a Genre</label>
                        <select id="selectGenre" 
                            value={this.state.movie.genre_id} onChange={(event) => this.onChangeGenre(event)}> 
                            <option disabled value="selected"> -- select an option -- </option>
                            {this.props.reduxState.genres.map((genre, i) =>
                            <option key={i} value={genre.id}>{genre.name}</option>
                            )}
                        </select>
                        </div>
                    <button className="saveCancelButton">Save</button>
                    {/* onClick send user back to the homepage */}
                    <button className="saveCancelButton" 
                        onClick={this.sendHome}>Cancel</button>
             </form>
            </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(AddMovie));