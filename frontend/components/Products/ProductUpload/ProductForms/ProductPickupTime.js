import { useDispatch, useSelector } from "react-redux";
import MenuButtonPickupTime from "./MenuButtonPickupTime";


const ProductPickupTime = () => {

  const dispatch = useDispatch();
  const productPickupTimeError = useSelector(state => state.productPickupTimeError)


  const setProductPickupTime = async (e) => {
    
    await dispatch(setProductPickupTime(e.target.value))
  }
  
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="productPickupTime" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              Product Pickup Time 
            </label>
          </div>
          
        </div>
        <div className="mt-1">
          <MenuButtonPickupTime />
          {productPickupTimeError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product PickupTime.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductPickupTime;