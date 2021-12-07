import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setProductUploadSuccess } from "../../../redux/actions/productUploadActions";
import Link from 'next/link';

const SuccessfulProductUploadModal = () => {

  const productUploadSuccess = useSelector(state => state.productUploadSuccess)
  const dispatch = useDispatch()
  const router = useRouter()

  const gotoMainPage = async() => {
    await dispatch(setProductUploadSuccess(false))
    router.push("/")
  }

  const uploadMoreProducts = async () => {
    console.log('reaching...?')
    await dispatch(setProductUploadSuccess(false))
    router.reload("/product/ProductUpload")
  }

  return (
    <div>
     {productUploadSuccess.success && <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
         
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Product Upload Successful
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You can continue uploading more products or go back to home screen.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              
                  <button type="button"
                    onClick={gotoMainPage}  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-header text-base font-medium text-white hover:bg-white
                  hover:text-header focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header sm:text-sm">
                    Go back to Main Page
                  </button>
            </div>
            <div className="mt-5 sm:mt-6">
              <button type="button"
                    onClick={uploadMoreProducts}  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-base font-medium text-white 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-header sm:text-sm">
                    Upload More Products
              </button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default SuccessfulProductUploadModal;