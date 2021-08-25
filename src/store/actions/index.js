import axios from 'axios';


//Thunk , Middle ware givving us access to dipatch,state
export const getRemoteData = (category) => {
  return async (dispatch, getState) => {
  
    const results = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
    console.log('Response', results.data);
    dispatch(getBased([category,results.data]));
  };
};





export const postRemoteData = (item) => {
  return async (dispatch, getState) => {
  console.log(item)
    const results =     await axios.post(`https://api-js401.herokuapp.com/api/v1/products/`, item);


    console.log(results.data)
    dispatch(getBased(getProduct(results.data)));
  };
};



//Category name  onclick save ,
//current category to be used for displaying products
export const funActiveCategory = (name) => {
    return {
      type: 'Active-Category',
      payload: name,
    };
  };

//Category name redult its product
  export function getBased(payload) {
    return {
      type: 'filterCategory',
      payload
    }
  }

//for aDDIG A product to cart
  export function getProduct(name) {
    return {
      type: 'ADDTOCART',
      payload: name
    }
  }
//for removing  A product from cart

  export function removeProduct(name) {
    return {
      type: 'REMOVEFROMCART',
      payload: name
    }
  }