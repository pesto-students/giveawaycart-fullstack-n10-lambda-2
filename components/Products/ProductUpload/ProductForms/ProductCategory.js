import { useSelector } from "react-redux";
import MenuButtonCategory from "./MenuButtonCategory";


const ProductCategory = () => {

  const productCategoryError = useSelector(state => state.productCategoryError)



  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="productCategory" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              Product Category 
            </label>
          </div>
          
        </div>
        <div className="mt-1">
          <MenuButtonCategory />
          {productCategoryError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product Category.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductCategory;