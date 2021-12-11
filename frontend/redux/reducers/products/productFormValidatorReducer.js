import { SET_PRODUCT_VALIDATOR } from "../../types/productUploadTypes"

export const productFormValidatorReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_VALIDATOR:
      return action.payload    
    default:
      return state
  }
}