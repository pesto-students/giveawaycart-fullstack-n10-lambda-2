import { useDispatch, useSelector } from "react-redux";
import MenuButtonColor from "./MenuButtonColor";


const ProductColor = () => {

  const dispatch = useDispatch();
  const productColorError = useSelector(state => state.productColorError)


  const setProductColor = async (e) => {
    
    await dispatch(setProductColor(e.target.value))
  }
  
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="productColor" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              Product Color 
            </label>
          </div>
          
        </div>
        <div className="mt-1">
          <MenuButtonColor />
          {productColorError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product Color.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductColor;