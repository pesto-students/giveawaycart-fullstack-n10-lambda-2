import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';

const ProductSearchScreen = () => {

  const productList = useSelector((state) => state.productList)
  const productSearch = useSelector((state) => state.productSearch)  
  const { loading, error, products } = productList
  
  return (
    <div className="bg-white mx-auto my-auto">
      {(products.length === 0) && <div className=" max-w-7xl mx-auto mt-2 px-2
                      sm:px-6 md:px-8 md:my-16 lg:my-20 ">
        <p className="font-semibold text-lg font-sans 
                      md:text-xl lg:text-2xl">
          No products found for {" "}
          <span className="font-extrabold font-serif text-xl
                          md:text-2xl lg:text-3xl">
            {` ${productSearch}`}
          </span>
        </p>
        <div className="mt-10 mb-10">
          <Link href="/">
            <a>
              <button
                type="submit"                    
                className="w-full bg-header border border-transparent rounded-md shadow-sm py-3 px-4 font-medium mb-5 text-white hover:bg-green-700 focus:outline-none focus:ring-2 md:text-2xl focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-header"
              >
                Start Shopping
              </button>
            </a>
          </Link>
          <img src="/bean.jpeg" alt="" />
      </div>
      </div>}
      <div className="max-w-4xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* {console.log('what product details are we getting', products)} */}
        {/* <a 
        onClick={gotoProductScreen}>
        <img src="https://i.ibb.co/8KQsD0v/Blue-Jean-Shirt.jpg" alt="" />
        </a> */}
        <div className="mt-6 cursor-pointer grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-9">
          {products.map((product) => (
            product.isVisible &&
            <div key={product._id}
                onClick={()=>gotoProductScreen(product._id)}
                className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 md:h-80  sm:h-80 lg:aspect-none">
                    <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full sm:w-50 sm:h-50 object-center object-cover lg:w-full lg:h-full"
                    />                                    
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-500">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  </h3>
                  <Link href={`/product/${product._id}`}><a><p className="mt-1 text-sm text-gray-500">{product.color}</p></a></Link>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.sex}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                </div>
              </div>
            </div>
          ))}
        </div>      
      </div>  
    </div>
  );
}

export default ProductSearchScreen;