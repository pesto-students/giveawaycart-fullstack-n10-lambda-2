import {
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL, PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL, PRODUCT_CREATE_RESET, SET_PRODUCT_SEARCH
} from '../../types/productTypes';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {loading: true, products: []}
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload}
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
 
  switch (action.type) {
    
    case PRODUCT_DELETE_REQUEST:
      return {...state, loading: true}
    case PRODUCT_DELETE_SUCCESS:      
      return {loading: false, success: true}
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
 
  switch (action.type) {
    
    case PRODUCT_CREATE_REQUEST:
      return {...state, loading: true}
    case PRODUCT_CREATE_SUCCESS:      
      return {loading: false, success: true, product:action.payload}
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return { }
    default:
      return state
  }
}

export const productSearchReducer = (state = {}, action) => {
 
  switch (action.type) {
    
    case SET_PRODUCT_SEARCH:
      return action.payload
    
    default:
      return state
  }
}

