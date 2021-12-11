import { useDispatch, useSelector } from "react-redux";
import MenuButtonSize from "./MenuButtonSize";


const ProductSize = () => {

  const dispatch = useDispatch();
  const productSizeError = useSelector(state => state.productSizeError)


  const setProductSize = async (e) => {
    
    await dispatch(setProductSize(e.target.value))
  }
  
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="productSize" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              Product Size 
            </label>
          </div>
          
        </div>
        <div className="mt-1">
          <MenuButtonSize />
          {productSizeError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product Size.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductSize;