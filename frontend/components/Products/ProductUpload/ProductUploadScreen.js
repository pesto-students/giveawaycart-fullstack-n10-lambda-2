import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import EmailForm from "../../Forms/EmailForm/EmailForm";
import CancelButton from "./ProductForms/CancelButton";
import Map from "./ProductForms/Maps/Map";
import ProductBrand from "./ProductForms/ProductBrand";
import ProductCategory from "./ProductForms/ProductCategory";
import ProductColor from "./ProductForms/ProductColor";
import ProductDescription from "./ProductForms/ProductDescription";
import ProductDropLocation from "./ProductForms/ProductDropLocation";
import ProductImageAlt from "./ProductForms/ProductImageAlt";
import ProductName from "./ProductForms/ProductName";
import ProductPhoto from "./ProductForms/ProductPhoto";
import ProductPickupTime from "./ProductForms/ProductPickupTime";
import ProductSize from "./ProductForms/ProductSize";
import SaveButton from "./ProductForms/SaveButton";

const ProductUploadScreen = () => {

  const router = useRouter();
  const userLogin = useSelector(state => state.userLogin)
  
  useEffect(() => {

    if (userLogin.userInfo.length !== 0) {
      
    } else {
      router.push('/');
    } 
  },[])
  
  return (
    <>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 text-gray-900 tracking-wider font-bold font-serif  block  ">Upload your product</h3>
            <p className="mt-1 max-w-2xl text-sm text-red-400 underline tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <ProductName />
                  <ProductBrand />
                  <ProductCategory />
                  <ProductSize />
                  <ProductColor />
                  <ProductPickupTime />
            </div>

                <ProductDescription />
                <ProductDropLocation />
                {/* <Map /> */}

            
            <ProductPhoto />
            <ProductImageAlt />
          </div>
        </div>      
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <CancelButton />
          <SaveButton />
        </div>
      </div>
    </form>
    </div >
      </>
  );
}

export default ProductUploadScreen;