import axios from 'axios';


//Thunk , Middle ware givving us access to dipatch,state
export const getRemoteData = (category) => {
  return async (dispatch, getState) => {
    console.log(getState)
    dispatch(getBased(category));
  };
};

//on Didmount
export const getallRemoteData = (category) => {
  return async (dispatch, getState) => {
    console.log(getState)
    dispatch(getBased(category));

    const results =await axios.get(`https://api-js401.herokuapp.com/api/v1/products/`);
    console.log(results.data)
    dispatch(getallBased(results.data));

  };
};


export const postRemoteData = (item) => {
  return async (dispatch, getState) => {
  console.log(item)
    const results =await axios.post(`https://api-js401.herokuapp.com/api/v1/products/`, item);
    dispatch(getProduct(results.data));
console.log(results.data.inStock--)

    const updatenum =await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${results.data._id}`, results.data);

  };

  
};
export const removeRemoteData = (item) => {
  return async (dispatch, getState) => {


    const results =await axios.delete(`https://api-js401.herokuapp.com/api/v1/products/${item._id}`,);
    console.log(results.data)

    dispatch(removeProduct(item));

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

  export function getallBased(payload) {
    return {
      type: 'RETURNCARTS',
      payload
    }
  }

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