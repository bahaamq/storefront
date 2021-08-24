const initialState = {
    carts: [
    ],
    count:0
  }
  
  export default function CartReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'ADDTOCART':
        const carts = [...state.carts, payload];
        const count = state.count + 1
        return { carts, count };
  
        case 'REMOVEFROMCART':
      return {
        carts: state.carts.filter((p) => p !== payload),
        count: state.count - 1,
      };

      default:
        return state;
    }
  
  }
  
  
