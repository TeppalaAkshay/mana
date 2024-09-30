const initialState = {
    cart: [] 
  };
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.cart.find( item => item.id === action.payload.id);
        if (existingItem) { 
          return { ...state, 
            cart: state.cart.map(item => item.id === action.payload.id ? {
              ...item, quantity: item.quantity+1}
            : item
           ) 
        };
      } else {
        return{
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}]
        };
      }
    }
        
      case 'REMOVE_ITEM':
        const existingItem = state.cart.find( item => item.id === action.payload.id);
        if (existingItem) { 
          return { ...state, 
            cart: state.cart.filter(item => item.id !== action.payload.id ? {
              ...item, quantity: item.quantity-1}
            : item
           ) 
        };
      } else {
       
      }
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  