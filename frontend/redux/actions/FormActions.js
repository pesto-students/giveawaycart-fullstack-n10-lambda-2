import { DISABLE_INVALID_USERNAME_PASSWORD_ERROR, EMAIL_ERROR, INVALID_USERNAME_PASSWORD_ERROR, PASSWORD_ERROR, USERNAME_ERROR } from "../types/FormTypes"

export const showPasswordError = () => (dispatch) => {
  try {
    dispatch({
      type: PASSWORD_ERROR,
      payload: true
    })
  } catch (error) {
    
  }
}

export const showEmailError = () => (dispatch) => {
  try {
    dispatch({
      type: EMAIL_ERROR,
      payload: true
    })
  } catch (error) {
    
  }
}

export const showUserNameError = () => (dispatch) => {
  try {
    dispatch({
      type: USERNAME_ERROR,
      payload: true
    })
  } catch (error) {
    
  }
}

export const invalidUserNamePasswordError = () => (dispatch) => {
  try {
    dispatch({
      type: INVALID_USERNAME_PASSWORD_ERROR,
      payload: true
    })
  } catch (error) {
    
  }
}