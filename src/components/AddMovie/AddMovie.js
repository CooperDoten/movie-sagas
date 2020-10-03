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
            genre_id: ''
        },
        value: null
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
                genre_id: ''
            },
            value: null
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
        for(let i=0; i<this.props.reduxState.genres.length; i++){
            if(this.props.reduxState.genres[i].name === event.target.value){
                console.log('we have a match', this.props.reduxState.genres[i])
                let genre_id = this.props.reduxState.genres[i].id
                    this.setState({
                        movie: {
                            ...this.state.movie,
                            genre_id: genre_id
                        }
                    })
            }
        }
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
             <select value={this.state.value} onChange={(event) => this.onChangeGenre(event)}> 
             <option disabled selected value> -- select an option -- </option>
                 <option value="Adventure">Adventure</option>
                 <option value="Animated">Animated</option>
                 <option value="Biographical">Biographical</option>
                 <option value="Comedy">Comedy</option>
                 <option value="Disaster">Disaster</option>
                 <option value="Drama">Drama</option>
                 <option value="Epic">Epic</option>
                 <option value="Fantasy">Fantasy</option>
                 <option value="Musical">Musical</option>
                 <option value="Romantic">Romantic</option>
                 <option value="Science Fiction">Science Fiction</option>
                 <option value="Space Opera">Space Opera</option>
                 <option value="Super Hero">Super Hero</option>
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