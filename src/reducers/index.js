import { combineReducers } from 'redux';
import todosReducer from './todo_reducer';
import { reducer as formReaducer } from 'redux-form';

export default combineReducers(
    {
        todos: todosReducer,
        form: formReaducer
    }
)