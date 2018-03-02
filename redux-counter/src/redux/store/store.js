import { createStore } from 'redux'
import Reducer from '../reducer/combineReducer';

const store = createStore(Reducer);

export default store;