import {CART_ADD_ITEM, CART_ADD_ITEM_REQUEST, CART_DELETE_ITEM, CART_EMPTY} from '../../types/cartTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    
    case CART_ADD_ITEM:
      const currentProduct = action.payload;
      return {        
        ...state,
        cartItems: [...state.cartItems, currentProduct],
        loading:false,
        isCartEmpty: false,
      }
    case CART_DELETE_ITEM:
      const itemsInCart = state.cartItems.filter(x => x._id !== action.payload)
      const isCartEmpty = itemsInCart.length === 0 ? true : false
      const loading = isCartEmpty ? true : false
      return {
        ...state,
        cartItems: itemsInCart,
        isCartEmpty,
        loading
      }
    case CART_EMPTY:
      return {
        isCartEmpty: true,
        cartItems: []
      }
    default:
      return state
  }
}

