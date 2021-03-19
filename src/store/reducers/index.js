import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { anothReducer } from './anotherreducer';


const reducers = combineReducers({
    movies: movieReducer,
    anothReducer:anothReducer
});

export default reducers;