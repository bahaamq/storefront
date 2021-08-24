import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './Categories';
import ProductsReducer from './Products';

const reducers = combineReducers({ categories: categoryReducer, products:ProductsReducer});
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();