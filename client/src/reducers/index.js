import { combineReducers } from 'redux';
import books from './books_reucers';
import user from './user_reducer';

const rootReducer = combineReducers({
    books,
    user
});

export default rootReducer;