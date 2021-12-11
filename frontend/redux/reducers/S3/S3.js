import {
  UPLOAD_IMAGE_S3_REQUEST,
  UPLOAD_IMAGE_S3_SUCCESS,
  UPLOAD_IMAGE_S3_FAIL
} from "../../types/S3"

export const s3UploadImageReducer = (state = {}, action) => {
 
  switch (action.type) {
    
    case UPLOAD_IMAGE_S3_REQUEST:
      return {...state, loading: true}
    case UPLOAD_IMAGE_S3_SUCCESS:     
      return {loading: false, success: true}
    case UPLOAD_IMAGE_S3_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}