import { DISABLE_EMAIL_ERROR, DISABLE_INVALID_USERNAME_PASSWORD_ERROR, DISABLE_PASSWORD_ERROR, DISABLE_USERNAME_ERROR, EMAIL_ERROR, INVALID_USERNAME_PASSWORD_ERROR, PASSWORD_ERROR, USERNAME_ERROR } from "../../types/FormTypes"

export const passwordErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case PASSWORD_ERROR:
      return action.payload
    case DISABLE_PASSWORD_ERROR:
      return false
    default:
      return state
  }
}

export const emailErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_ERROR:
      return action.payload
    case DISABLE_EMAIL_ERROR:
      return false
    default:
      return state
  }
}

export const usernameErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case USERNAME_ERROR:
      return action.payload
    case DISABLE_USERNAME_ERROR:
      return false
    default:
      return state
  }
}

export const invalidUserNamePasswordErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case INVALID_USERNAME_PASSWORD_ERROR:
      return action.payload
    case DISABLE_INVALID_USERNAME_PASSWORD_ERROR:
      return false
    default:
      return state
  }
}