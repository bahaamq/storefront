import { createStore, combineReducers,applyMiddleware  } from 'redux';
import categoryReducer from './Categories';
import ProductsReducer from './Products';
import CartReducer from './Cart';
import thunk from 'redux-thunk';

const reducers = combineReducers({ categories: categoryReducer, products:ProductsReducer,CartReducer:CartReducer});
const store = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default store();