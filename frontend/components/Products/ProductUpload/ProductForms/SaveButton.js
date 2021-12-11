import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productUpload,
  setProductUploadSuccess
} from "../../../../redux/actions/productUploadActions";
import SuccessfulProductUploadModal from "../SuccessfulProductUploadModal";

const SaveButton = () => {

  const productName = useSelector(state => state.productName)
  const productBrand = useSelector(state => state.productBrand)
  const productCategory = useSelector(state => state.productCategory)
  const productColor = useSelector(state => state.productColor)
  const productSize = useSelector(state => state.productSize)
  const productPickupTime = useSelector(state => state.productPickupTime)
  const productDescription = useSelector(state => state.productDescription)
  const productDropLocation = useSelector(state => state.productDropLocation)
  const productImage = useSelector(state => state.productImage)
  const productImageAlt = useSelector(state => state.productImageAlt)
  const createProductImage = useSelector(state => state.createProductImage)
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch();

  const res = []
  const productUploadSaveHandler = async (e) => {
    e.preventDefault()
    
    
    if (!createProductImage.loading) {
      const prod = {
        name: productName.value,
        brand: productBrand.value,
        category: productCategory.value,
        color: productColor.value,
        description: productDescription.value,
        dropLocation: productDropLocation.value,
        pickupTime: productPickupTime.value,
        imageSrc: createProductImage.productImage,
        imageAlt: productImageAlt.value,
        sizes: productSize.value,
        isVisible: true,
        user: userInfo._id,        
      }
    await dispatch(productUpload(prod))
    }

  }

  return (
    <>
      {productName.success &&
        productBrand.success &&
        productColor.success &&
        productSize.success &&
        productCategory.success &&
        productDescription.success &&
        productImage.success &&
        productImageAlt.success &&
        productPickupTime.success &&
        productDropLocation.success &&
        productImage.success &&
      <button
        type="submit" 
        onClick={productUploadSaveHandler}
        className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-header  focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-header"
      >
            Save
        </button>}
      <SuccessfulProductUploadModal />
    </>
  );
}

export default SaveButton;