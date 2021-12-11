import {
  USER_EMAIL,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_PASSWORD,
  USER_NAME,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_ISLOGGED,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  CLEAR_USER_EMAIL,
  CLEAR_USER_NAME,
  EMAIL,
  CLEAR_USER_PASSWORD,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_REQUEST,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_IMAGE,
  USER_IMAGE_SUCCESS,
  USER_IMAGE_REQUEST,
  USER_IMAGE_FAIL,
  SET_USER_IMAGE
} from "../../types/userTypes"

export const userLoginReducer = (state = {}, action) => {
 
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true}
    case USER_LOGIN_SUCCESS:
      const arr = action.payload
      return {loading: false, userInfo: action.payload, isAdmin:arr.isAdmin}
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    
    default:
      return state
  }
}

export const user_isLoggedReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ISLOGGED:
      //console.log('final logout step')
      return { isUserloggedIn: true}
    case USER_LOGOUT:
      //console.log('final logout step')
      return false
    
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
 
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true}
    case USER_REGISTER_SUCCESS:
      return {loading: false, userInfo: action.payload}
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
 
    default:
      return state
  }
}

export const userDetailsReducer = (state = {user: {}}, action) => {
 
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {...state, loading: true}
    case USER_DETAILS_SUCCESS:
      return {loading: false, user: action.payload}
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case GET_ALL_USERS_REQUEST:
      return {...state, loading: true}
    case GET_ALL_USERS_SUCCESS:
      return {loading: false, allUsers: action.payload}
    case GET_ALL_USERS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getAllDetailsReducer = (state = {}, action) => {
 
  switch (action.type) {
    
    case GET_ALL_USERS_REQUEST:
      return {...state, loading: true}
    case GET_ALL_USERS_SUCCESS:
      return {loading: false, allUsers: action.payload}
    case GET_ALL_USERS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
 
  switch (action.type) {
    
    case USER_DELETE_REQUEST:
      return {...state, loading: true}
    case USER_DELETE_SUCCESS:
      
      return {loading: false, success: true}
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const userUpdateProfileReducer = (state = {}, action) => {
 
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {loading: true, success:false}
    case USER_UPDATE_PROFILE_SUCCESS:
      console.log('Why is userInfo not updating', action.payload)
      return {loading: false, success:true, userInfo: action.payload}
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false,success:false, error: action.payload }
 
    default:
      return state
  }
}


export const setReducer = (state = {email:''}, action) => {
  switch (action.type) {
    case EMAIL:
      return action.payload
    case CLEAR_USER_EMAIL:
      return action.payload
    default:
      return state
  }
}



export const setUserNameReducer = (state = {userName:''}, action) => {
  switch (action.type) {
    case USER_NAME:
      return action.payload
    case CLEAR_USER_NAME:
      return ''
    default:
      return state
  }
}

export const setPasswordReducer = (state = {password:''}, action) => {
  switch (action.type) {
    case USER_PASSWORD:
      return action.payload
    case CLEAR_USER_PASSWORD:
      return action.payload
    default:
      return state
  }
}

export const setUserImageReducer = (state = {}, action) => {
  switch (action.type) {
    
    case SET_USER_IMAGE:
      return { loading: true }
    case USER_IMAGE_SUCCESS:
      return {loading: false, success: true}
    default:
      return state
  }
}
