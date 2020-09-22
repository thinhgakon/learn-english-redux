import { combineReducers } from 'redux';
import arrWordsReducer from './arrWords';
import isAddingReducer from './isAdding';
import filterStatusReducer from './filterStatus';

const rootReducer = combineReducers({
    arrWords: arrWordsReducer,
    isAdding: isAddingReducer,
    filterStatus: filterStatusReducer
});

export default rootReducer;

