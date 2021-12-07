import { useDispatch, useSelector } from "react-redux";
import { setProductImageAlt, setProductImageAltValidation } from "../../../../redux/actions/productUploadActions";

const ProductImageAlt = () => {

  const dispatch = useDispatch();
  const productImageAltError = useSelector(state => state.productImageAltError)

  const setProdImageAlt = async (e) => {
    console.log('ImageAlt being typed is ', e.target.value)
    if (e.target.value === "") {
      await dispatch(setProductImageAltValidation(false))
    } else {      
      await dispatch(setProductImageAlt(e.target.value))
    }  
    
  }

  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="about" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700 sm:mt-px sm:pt-2">
          Desribe the Product Image
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <textarea
            id="about"
            name="about"
            onChange={setProdImageAlt}
            rows={3}
            className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
          />
          <p className="mt-2 text-sm font-semibold tracking-wider text-gray-500">Write a line about the product image</p>
          {productImageAltError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product ImageAlt.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductImageAlt;