import { createStore } from 'react-redux';
import counterReducer from './Reducers';

const store = createStore(counterReducer);

export default store;