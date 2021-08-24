//Category name  onclick save ,
//current category to be used for displaying products

export const funActiveCategory = (name) => {
    return {
      type: 'Active-Category',
      payload: name,
    };
  };

//Category name redult its product
  export function getBased(name) {
    return {
      type: 'filterCategory',
      payload: name
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