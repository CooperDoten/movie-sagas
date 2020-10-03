import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchMovieListSaga(action){ 
    console.log('made it into fetchMovieListSaga');
    //TO DO make this real
    let response = yield axios({
            method: 'GET',
            url: '/api/movie'
        })
        console.log('response', response.data)
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        });
        console.log('this is our movie list', response.data);
}
function* fetchMovieSaga(action){ 
    console.log('made it into fetchMovieSaga');
    //TO DO make this real
    let response = yield axios({
            method: 'POST',
            url: '/api/moreDetails',
            data: action.payload
        })
        console.log('response', response.data)
        yield put({
            type: 'SET_MOVIE',
            payload: response.data
        });
        console.log('this is our movie', response.data);
}
function* fetchGenreSaga(action){ 
    console.log('made it into fetchGenreSaga', action.payload);
    //TO DO make this real
    let response = yield axios({
            method: 'GET',
            url: `/api/genre/${action.payload.title}`,
        })
        console.log('response', response.data)
        yield put({
            type: 'SET_GENRE',
            payload: response.data
        });
        console.log('this is our movie', response.data);
}
function* fetchGenresSaga(action){ 
    console.log('made it into fetchGenresSaga', action.payload);
    //TO DO make this real
    let response = yield axios({
            method: 'GET',
            url: `/api/genre/`,
        })
        console.log('response', response.data)
        yield put({
            type: 'SET_GENRES',
            payload: response.data
        });
        console.log('these our our genres', response.data);
}
// function* addGenreSaga(action){ 
//     console.log('made it into addGenresSaga', action.payload);
//     //TO DO make this real
//     let response = yield axios({
//             method: 'POST',
//             url: `/api/genre/`,
//         })
//         console.log('response', response.data)
//         yield put({
//             type: 'SET_GENRES',
//             payload: response.data
//         });
//         console.log('these our our genres', response.data);
// }
function* addMovieSaga(action){ 
    console.log('made it into addMovieSaga', action.payload);
    //TO DO make this real
        yield axios({
            method: 'POST',
            url: `/api/movie`,
            data: action.payload
        });
        yield put({
            type: 'FETCH_MOVIELIST'
        })
}
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("FETCH_MOVIELIST", fetchMovieListSaga);
    yield takeEvery("FETCH_MOVIE", fetchMovieSaga);
    yield takeEvery("FETCH_GENRE", fetchGenreSaga);
    yield takeEvery("FETCH_GENRES", fetchGenresSaga);
    //yield takeEvery("ADD_GENRES", addGenreSaga);
    yield takeEvery("CREATE_MOVIE", addMovieSaga);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
const movie = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
const genre = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movie,
        movies,
        genre,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
