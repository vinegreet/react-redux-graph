import { createStore, combineReducers } from 'redux';
import inputReducer from './components/BarsHeightInput/inputReducer';

const reducers = combineReducers({
  inputReducer,
});

const store = createStore(reducers);

export default store;