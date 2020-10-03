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
        select: '',
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
                genre_id: '',
            },
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
    onChangeGenre = (event, name) => {
        
        console.log('made it into onChangeGenre', event.target.value, name);
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
             <input type="text" placeholder="Title" 
                value={this.state.movie.title}
                onChange={(event)=> this.onChange(event, 'title')}/>
             <input type="text" placeholder="Image URL" 
             value={this.state.movie.poster}
             onChange={(event)=> this.onChange(event, 'poster')}/>
             <input type="text" placeholder="Synopsis" 
             value={this.state.movie.description}
             onChange={(event)=> this.onChange(event, 'description')}/>
             <select onChange={(event) => this.onChangeGenre(event, 'name')}> 
                <option>-------</option>
                 <option>Adventure</option>
                 <option>Animated</option>
                 <option>Biographical</option>
                 <option>Comedy</option>
                 <option>Disaster</option>
                 <option>Drama</option>
                 <option>Epic</option>
                 <option>Fantasy</option>
                 <option>Musical</option>
                 <option>Romantic</option>
                 <option>Science Fiction</option>
                 <option>Space Opera</option>
                 <option>Super Hero</option>
             </select>
             <button onClick={this.addMovie}>Save</button>
             <button onClick={this.sendHome}>Cancel</button>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(withRouter(AddMovie));