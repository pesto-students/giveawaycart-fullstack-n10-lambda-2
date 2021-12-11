import { PRODUCT_CREATE_IMAGE_FAIL, PRODUCT_CREATE_IMAGE_REQUEST, PRODUCT_CREATE_IMAGE_SUCCESS, PRODUCT_UPLOAD_FAIL, PRODUCT_UPLOAD_REQUEST } from "../../types/productTypes"
import {
  DISABLE_ERROR_PRODUCT_BRAND,
  DISABLE_ERROR_PRODUCT_CATEGORY,
  DISABLE_ERROR_PRODUCT_COLOR,
  DISABLE_ERROR_PRODUCT_DESCRIPTION,
  DISABLE_ERROR_PRODUCT_DROPLOCATION,
  DISABLE_ERROR_PRODUCT_IMAGE,
  DISABLE_ERROR_PRODUCT_IMAGE_ALT,
  DISABLE_ERROR_PRODUCT_NAME,
  DISABLE_ERROR_PRODUCT_PICKUP_TIME,
  DISABLE_ERROR_PRODUCT_SIZE,
  DISABLE_PRODUCT_UPLOAD_SUCCESS,
  ERROR_PRODUCT_BRAND,
  ERROR_PRODUCT_CATEGORY,
  ERROR_PRODUCT_COLOR,
  ERROR_PRODUCT_DESCRIPTION,
  ERROR_PRODUCT_DROPLOCATION,
  ERROR_PRODUCT_IMAGE,
  ERROR_PRODUCT_IMAGE_ALT,
  ERROR_PRODUCT_NAME,
  ERROR_PRODUCT_PICKUP_TIME,
  ERROR_PRODUCT_SIZE,
  PRODUCT_UPLOAD_SUCCESS,
  SET_PRODUCT_BRAND, SET_PRODUCT_BRAND_VALIDATOR, SET_PRODUCT_CATEGORY,
  SET_PRODUCT_CATEGORYE_VALIDATOR,
  SET_PRODUCT_COLOR, SET_PRODUCT_COLOR_VALIDATOR, SET_PRODUCT_DESCRIPTION,
  SET_PRODUCT_DESCRIPTION_VALIDATOR,
  SET_PRODUCT_DROPLOCATION, SET_PRODUCT_DROPLOCATION_VALIDATOR, SET_PRODUCT_IMAGE,
  SET_PRODUCT_IMAGE_ALT, SET_PRODUCT_IMAGE_ALT_VALIDATOR, SET_PRODUCT_NAME,
  SET_PRODUCT_NAME_VALIDATOR,
  SET_PRODUCT_PICKUP_TIME, SET_PRODUCT_PICKUP_TIME_VALIDATOR, SET_PRODUCT_PRODUCT_IMAGE_VALIDATOR, SET_PRODUCT_SIZE, SET_PRODUCT_SIZE_VALIDATOR
} from "../../types/productUploadTypes"

export const setProductNameReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_NAME:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_NAME_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}



export const setProductBrandReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_BRAND:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_BRAND_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_CATEGORY:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_CATEGORYE_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductColorReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_COLOR:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_COLOR_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductDescriptionReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_DESCRIPTION:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_DESCRIPTION_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductDropLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_DROPLOCATION:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_DROPLOCATION_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductImageReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_IMAGE:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_PRODUCT_IMAGE_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductImageAltReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_IMAGE_ALT:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_IMAGE_ALT_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductPickupTimeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_PICKUP_TIME:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_PICKUP_TIME_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductSizeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_SIZE:
      return {success: true, value:action.payload}    
    case SET_PRODUCT_SIZE_VALIDATOR:
      return {success:false}
    default:
      return state
  }
}

export const setProductUploadSuccessReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_UPLOAD_REQUEST:
      return {loading: true}
    case PRODUCT_UPLOAD_SUCCESS:
      return {loading: false, success: action.payload }
    case PRODUCT_UPLOAD_FAIL:
      return {loading: false, error: action.payload} 
    default:
      return state
  }
}


export const productNameErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_NAME:
      return action.payload
    case DISABLE_ERROR_PRODUCT_NAME:
      return false
    default:
      return state
  }
}

export const productBrandErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_BRAND:
      return action.payload
    case DISABLE_ERROR_PRODUCT_BRAND:
      return false
    default:
      return state
  }
}

export const productCategoryErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_CATEGORY:
      return action.payload
    case DISABLE_ERROR_PRODUCT_CATEGORY:
      return false
    default:
      return state
  }
}

export const productColorErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_COLOR:
      return action.payload
    case DISABLE_ERROR_PRODUCT_COLOR:
      return false
    default:
      return state
  }
}

export const productDescriptionErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_DESCRIPTION:
      return action.payload
    case DISABLE_ERROR_PRODUCT_DESCRIPTION:
      return false
    default:
      return state
  }
}

export const productDropLocationErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_DROPLOCATION:
      return action.payload
    case DISABLE_ERROR_PRODUCT_DROPLOCATION:
      return false
    default:
      return state
  }
}

export const productImageErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_IMAGE:
      return action.payload
    case DISABLE_ERROR_PRODUCT_IMAGE:
      return false
    default:
      return state
  }
}

export const productImageAltErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_IMAGE_ALT:
      return action.payload
    case DISABLE_ERROR_PRODUCT_IMAGE_ALT:
      return false
    default:
      return state
  }
}

export const productPickupTimeErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_PICKUP_TIME:
      return action.payload
    case DISABLE_ERROR_PRODUCT_PICKUP_TIME:
      return false
    default:
      return state
  }
}

export const productSizeErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_PRODUCT_SIZE:
      return action.payload
    case DISABLE_ERROR_PRODUCT_SIZE:
      return false
    default:
      return state
  }
}

export const createProductImageReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_IMAGE_REQUEST:
      return {loading:true}
    case PRODUCT_CREATE_IMAGE_SUCCESS:
      return { loading: false, productImage: action.payload }
     case PRODUCT_CREATE_IMAGE_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}



