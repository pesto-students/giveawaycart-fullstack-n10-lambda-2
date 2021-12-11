import axios from "axios"
import S3 from 'react-aws-s3'
import { DISABLE_EMAIL_ERROR, DISABLE_PASSWORD_ERROR, EMAIL_ERROR } from "../types/FormTypes"
import { UPLOAD_IMAGE_S3_FAIL, UPLOAD_IMAGE_S3_REQUEST, UPLOAD_IMAGE_S3_SUCCESS } from "../types/S3"
import {
  CLEAR_USER_EMAIL,
  CLEAR_USER_PASSWORD,
  EMAIL,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  SET_USER_IMAGE,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_EMAIL,
  USER_IMAGE_FAIL,
  USER_IMAGE_REQUEST,
  USER_IMAGE_SUCCESS,
  USER_ISLOGGED,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_NAME,
  USER_PASSWORD,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS
} from "../types/userTypes"

export const login = (email, password, isLoggedIn) => async (dispatch) =>{
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }
 
    const {data} = await axios.post(
      '/api/users/login',
      { email, password },
      config)

    // console.log('Login data', data)
   
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

     dispatch({
      type: USER_ISLOGGED,
      payload: isLoggedIn
    })


    localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem('isUserLogged', isLoggedIn)
    
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const register = (name, email, password, isLoggedIn) => async (dispatch) =>{
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })
    const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }

    const {data} = await axios.post(
      '/api/users',
      {name, email, password },
      config)
    
    //  console.log('Register data', data)
    
     dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
     })
    
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

     dispatch({
      type: USER_ISLOGGED,
      payload: isLoggedIn
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem('isUserLogged', isLoggedIn)
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const deletUserFromDB = (userId) => async (dispatch, getState) =>{
  try {
    dispatch({
      type: USER_DELETE_REQUEST
    })
    
    //  console.log('do we get the id here1',userId )
    const { userLogin: { userInfo } } = getState()
    // console.log('do we get the id here',userInfo )
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      },
      data: {userId}
    }

    
    const {data} = await axios.delete(
      `/api/users/deleteUser`, 
      config)
    
    
    
     dispatch({
      type: USER_DELETE_SUCCESS,
      payload: data
     })
    // console.log('what did we get after deleting a user',data)
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data
    })

  localStorage.setItem('allUsersInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}


export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('allUserInfo');
  localStorage.removeItem('isUserLogged');
  try {
    // console.log('logout dispatcher')
  dispatch({
      type: USER_LOGOUT
  })
} catch (error) {
  
  }
}

export const setUserName = (userName) => (dispatch) => {
  try {
    dispatch({
      type: USER_NAME,
      payload: userName
    })
  } catch (error) {
    
  }
}




export const clearEmail = (email) => (dispatch) => {
  // console.log('Clear Email')
  try {
    dispatch({
      type: CLEAR_USER_EMAIL,
      payload: email      
    })
    // console.log('Clear Email1')
  } catch (error) {
    
  }
}

export const clearPassword = (password) => (dispatch) => {
  // console.log('Clear Password')
  try {
    dispatch({
      type: CLEAR_USER_PASSWORD,
      payload: password      
    })
  } catch (error) {
    
  }
}

export const setPassword = (password) => (dispatch) => {
  try {
    dispatch({
      type: USER_PASSWORD,
      payload: password
    })
    dispatch({
      type: DISABLE_PASSWORD_ERROR,
      payload: false
    })
  } catch (error) {
    
  }
}



export const getUserDetails = (email) => async (dispatch,getState) =>{
  try {

    dispatch({
      type: USER_DETAILS_REQUEST
    })

   const { userLogin:{userInfo} } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
    const {data} = await axios.get(
      `/api/users/${email}`,
      config)
    //  console.log('get user details data', data)
     dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data
     })
    //localStorage.setItem('userInfo', JSON.stringify(data))
    
  } catch (error) {
    // console.log('error', error.response)
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const updateUserProfile = (user) => async (dispatch,getState) =>{
  try {
    // console.log(user)
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST
    })
  
    const { userLogin: { userInfo } } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
    const {data} = await axios.put(
      `/api/users/profile`, user,
      config)
    
     dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data
     })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    // console.log('error', error.response)
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const updateUserProfileImage = (image) => async (dispatch, getState) =>{
  
  try {
    dispatch({
      type: SET_USER_IMAGE
    })
  
    const { userLogin: { userInfo } } = getState()
    
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
    // console.log('Update user IMage client side bearer', config, image)
      const picdata = new FormData()
      picdata.append('name', 'dummyname')
      picdata.append('file', image)
    
      const {data} = await axios.put(
        '/api/users/profile/images', picdata,
        config)
      // console.log('response object', data)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })
    dispatch({
      type: USER_IMAGE_SUCCESS
    })
      
    localStorage.setItem('userInfo', JSON.stringify(data))
    localStorage.setItem('userImageInfo', JSON.stringify(getState().userImage))
    
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }  
}

export const setEmail = (email) => (dispatch) => {
  // console.log(email)
  try {
    dispatch({
      type: EMAIL,
      payload: email
    })
    dispatch({
      type: DISABLE_EMAIL_ERROR,
      payload: false
    })
  } catch (error) {
    
  }
}

export const setUserImage = (image) => (dispatch) => {
  try {
      //  console.log('Set User Image dispatcher', image)
    dispatch({
      type: SET_USER_IMAGE,
      payload: image
    })
  } catch (error) {
    
  }
}

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_USERS_REQUEST,
    })

    const { userLogin:{userInfo} } = getState()
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }      
    }
    const {data} = await axios.get(
      `/api/users/`,
      config)
    // console.log('did we get data', data)
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data
    })
    
    localStorage.setItem('allUsersInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}

export const uploadImageToS3 = (image, url) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPLOAD_IMAGE_S3_REQUEST,
    })

    // const { userLogin: { userInfo } } = getState()
    // const data = new FormData()
    // data.append("name", userInfo._id)
    // //Always attach the file last as best practice
    // data.append('file', image)
    // console.log('After form data trigger', data)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
         
      },
      body: image
    }
    // console.log('we get url right?', url)
    
    const res = await axios.put(
      url,
      config)
    // console.log('do we get an answer from s3?', res)

    dispatch({
      type: UPLOAD_IMAGE_S3_SUCCESS,
      payload: true
    })
    
  

  } catch (error) {
    dispatch({
      type: UPLOAD_IMAGE_S3_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.response
    })
  }
}