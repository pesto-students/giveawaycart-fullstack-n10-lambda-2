import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getProductImageS3Link, setProductImage } from "../../../../redux/actions/productUploadActions";

const ProductPhoto = () => {

  const [prodImage, setProdImage] = useState('')
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const createProductImage = useSelector(state => state.createProductImage)

  const dispatch = useDispatch()

  const productImage = async (e) => {
    
    const file = e.target.files[0]
    setProdImage(URL.createObjectURL(e.target.files[0]))
    console.log(prodImage);

    const result = await dispatch(getProductImageS3Link(file))
    console.log('result upload of S3', result)
    console.log('product upload image local', createProductImage.productImage)
    //send product image to dispatch
    await dispatch(setProductImage(createProductImage.productImage))
    //formatdata in actions

    //send it through axios to get s3 link

    //set and display S3 link

    //setFile(e.target.files[0])
    // console.log('first time wht does it show', e.target.files[0])
    // const file = e.target.files[0]
    // console.log('userImage is set to', file)
    
    //await dispatch(setUserImage(file));
    //await dispatch(updateUserProfileImage(file))
  }

  useEffect(() => {
    
  },[prodImage])

  return (
    <>     
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label htmlFor="cover-photo" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700 sm:mt-px sm:pt-2">
            Product photo
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-mono cursor-pointer bg-white rounded-md tracking-wider font-semibold  text-header hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload"
                      onChange={productImage}
                      name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1 font-mono">or drag and drop</p>
                </div>
                <img src={prodImage} alt="" />
                <p className="text-xs text-gray-500 font-serif">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default ProductPhoto;