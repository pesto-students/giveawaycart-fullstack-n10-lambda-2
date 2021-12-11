import { useDispatch, useSelector } from "react-redux";
import { setProductForValidation, setProductName, setProductNameValidation } from '../../../../redux/actions/productUploadActions'

const ProductName = () => {

  const dispatch = useDispatch();
  const productNameError = useSelector(state => state.productNameError)

 

  const setProdName = async (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
      await dispatch(setProductNameValidation(false))
    } else {      
      await dispatch(setProductName(e.target.value))
    }    
  }
  
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="productName" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              Product Name 
            </label>
          </div>
          
        </div>
        <div className="mt-1">
          <input
            id="ProductName"
            name="ProductName"
            type="ProductName"
            autoComplete=""
            onChange={setProdName}
            placeholder='Enter your ProductName'
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 tracking-wider  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {productNameError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product Name.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductName;