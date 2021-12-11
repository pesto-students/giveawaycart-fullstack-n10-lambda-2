import {
  ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,
  ORDER_MYORDERS_FAIL, ORDER_MYORDERS_REQUEST, ORDER_MYORDERS_SUCCESS
} from '../../types/orderTypes';

export const createOrderReducer = (state = {}, action) => {
  
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true
      }
    case ORDER_CREATE_SUCCESS:
      const {data, status} = action.payload
      return {
        loading: false,
        success: true,
        order: data,
        status: status
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }

}

export const orderListMyReducer = (state = {}, action) => {
  
  switch (action.type) {
    case ORDER_MYORDERS_REQUEST:
      return {
        loading: true,
        success: false,
      }
    case ORDER_MYORDERS_SUCCESS:
      var isOrders = (action.payload===0)? false: true
      return {
        loading: false,
        success: isOrders,
        orders: action.payload,
      }
    case ORDER_MYORDERS_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload
      }
    default:
      return state
  }

}