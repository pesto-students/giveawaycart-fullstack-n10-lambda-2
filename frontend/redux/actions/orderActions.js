import axios from "axios"
import { CART_EMPTY } from "../types/cartTypes";
import {
  ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,
  ORDER_MYORDERS_FAIL, ORDER_MYORDERS_REQUEST, ORDER_MYORDERS_SUCCESS
} from '../types/orderTypes';


export const createOrder = (order) => async (dispatch, getState) => {
  try {
    // console.log('2 order button triggered')
    dispatch({
      type: ORDER_CREATE_REQUEST
    })

    const {
      userLogin: { userInfo }
    } = getState()
    // console.log('do we get user login info: ', userInfo)
    const userId = userInfo._id;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
   
    const {data, status} = await axios.post(
      `/api/orders`,
      {
        order,
        userId
      },
      config)
    
     dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: {data, status}
     })
    
     dispatch({
      type: CART_EMPTY,
      payload: {data, status}
     })
    // console.log('order place is', order)
    
    localStorage.setItem('orderItems', JSON.stringify(getState().orderCreate.order.orderItems))
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
  } catch (error) {
    // console.log('error', error.response)
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    // console.log('2 order button triggered - myorders')
    dispatch({
      type: ORDER_MYORDERS_REQUEST
    })

    const {
      userLogin: { userInfo }
    } = getState()

    // console.log('do we get user login info: ', userInfo)
    const userId = userInfo._id;
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
  //  console.log('config: ', config)
    const {data} = await axios.get(
      `/api/orders/myorders`,
      config)
    // console.log('Response data of my orders', data) 
    dispatch({
      type: ORDER_MYORDERS_SUCCESS,
      payload: data
     })        
  } catch (error) {
    // console.log('error', error.response)
    dispatch({
      type: ORDER_MYORDERS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}