import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductFromDB, listProducts } from '../../redux/actions/productActions';
import CategoryFilterLoading from '../CategoryFilter/CategoryFilterLoading';

const ProductDetails = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const productDelete = useSelector((state) => state.productDelete)

  const { loading, error, products } = productList

  useEffect(() => {
    
  },[dispatch, productDelete.Success])
  
  const deleteProduct = async (productId) => {
    console.log('Print?',productId)
    await dispatch(deleteProductFromDB(productId))
  }

  return (
    <div className="bg-white">
      {loading ?
        (<CategoryFilterLoading />)
        : error
          ? (<h3>{error}</h3>)
          : (                
            <div className="max-w-2xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
              {productList.loading && <CategoryFilterLoading />}
              {!(productList.loading) && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                <a key={product._id}
                  onClick={() => deleteProduct(product._id)}
                >
                <div  className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 md:h-80  sm:h-80 lg:aspect-none">
                    <Link href="">
                      <a>
                        <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full sm:w-50 sm:h-50 object-center object-cover lg:w-full lg:h-full"
                        />    
                        </a>
                    </Link>              
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-500">
                        <Link href=""><a>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a></Link>
                      </h3>
                      <Link href=""><a><p className="mt-1 text-sm text-gray-500">{product.color}</p></a></Link>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href="">
                          <a>
                          <svg className="h-7 w-7 text-red-500 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </a>
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                    </div>
                  </div>
                </div>
              </a>
              ))}
        </div>      }
      </div>  
      )}
      
    </div>
  )
}

export default ProductDetails;