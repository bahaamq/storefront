import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categoryReducer from './Categories';
import ProductsReducer from './Products';
import CartReducer from './Cart';

const reducers = combineReducers({ categories: categoryReducer, products:ProductsReducer,CartReducer:CartReducer});
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();