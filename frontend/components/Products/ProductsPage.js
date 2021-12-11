/**
 * <a href="https://ibb.co/BPqpFtL"><img src="https://i.ibb.co/1n8gjLZ/Baby-Clothes.jpg" alt="Baby-Clothes" border="0"></a>
<a href="https://ibb.co/4TczsFK"><img src="https://i.ibb.co/C7qgJwm/Basic-Tee-White.jpg" alt="Basic-Tee-White" border="0"></a>
<a href="https://ibb.co/HDd0G3H"><img src="https://i.ibb.co/nsCTQtL/Basic-Tee-Yellow.jpg" alt="Basic-Tee-Yellow" border="0"></a>
<a href="https://ibb.co/2K4C2Lf"><img src="https://i.ibb.co/5cHSDzf/Black-Grey-Checks-Shirt.jpg" alt="Black-Grey-Checks-Shirt" border="0"></a>
<a href="https://ibb.co/r2jvvzw"><img src="https://i.ibb.co/RTF77sD/Blazer.jpg" alt="Blazer" border="0"></a>
<a href="https://ibb.co/vwMqxHy"><img src="https://i.ibb.co/8KQsD0v/Blue-Jean-Shirt.jpg" alt="Blue-Jean-Shirt" border="0"></a>
<a href="https://ibb.co/wRtK6Ny"><img src="https://i.ibb.co/Dtd7KD4/Blue-Sweater.jpg" alt="Blue-Sweater" border="0"></a>
<a href="https://ibb.co/bsWT5Lc"><img src="https://i.ibb.co/zXnpVbq/Jacket.jpg" alt="Jacket" border="0"></a>
<a href="https://ibb.co/NKLdQgZ"><img src="https://i.ibb.co/kXhskVQ/Jean-Jacket.jpg" alt="Jean-Jacket" border="0"></a>
<a href="https://ibb.co/T04QB1s"><img src="https://i.ibb.co/qgNHMCv/White-Shirt.jpg" alt="White-Shirt" border="0"></a>
 */

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/actions/productActions';
import CategoryFilterLoading from '../CategoryFilter/CategoryFilterLoading';
import Image from 'next/image';

import { ThumbUpIcon } from '@heroicons/react/solid';

//useSelector - select the part of the state that you want to use here

const ProductsPage = () => {

  const dispatch = useDispatch()
  const router = useRouter()
  const productList = useSelector((state) => state.productList)
  const productSearch = useSelector(state => state.productSearch)
  
  const { loading, error, products } = productList
//https://hope-product-profile-images.s3.ap-southeast-1.amazonaws.com/69e3b726f849282112eefff743f08e9e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXG637FINWILBG5OP%2F20211125%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20211125T211211Z&X-Amz-Expires=60&X-Amz-Signature=acd9830a5c946e2aaa9e860a5edf22d649f4fcdad350d04235064adf563175ae&X-Amz-SignedHeaders=host
  useEffect(() => {
    const getProducts = async () => {
    console.log('2')
       
     await dispatch(listProducts(productSearch));
      
    }
    getProducts();
    console.log('1')
  },[dispatch])
  
  const gotoProductScreen = (id) => {
    router.push(`/product/${id}`)
    console.log('Hello', id)
  }

  return (
    <div className="bg-white">
      {loading ?
        (<CategoryFilterLoading />)
        : error
          ? (<h3>{error}</h3>)
          : (                
            <div className="max-w-4xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
              {/* {console.log('what product details are we getting', products)} */}
              {/* <a 
              onClick={gotoProductScreen}>
              <img src="https://i.ibb.co/8KQsD0v/Blue-Jean-Shirt.jpg" alt="" />
              </a> */}
              <div className="mt-6 cursor-pointer grid grid-cols-1 gap-y-10 gap-x-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-9">
                {products.map((product) => (
                  product.isVisible &&
                  <div key={product._id}
                      onClick={()=>gotoProductScreen(product._id)}
                    className="group relative">

                    <div
                        className="p-2 group cursor-pointer font-bold
                        transition
                        duration-200
                        ease-in transform
                        sm:hover:scale-105
                        hover:z-50">
                        <Image
                          layout="responsive"
                          src={product.imageSrc}
                          height={320}
                          width={260}
                        />
                        <div className="p-2">
                        <p className="truncate font-sans
                            text-lg tracking-wider
                            transition-all
                            duration-100
                            ease-in-out
                            group-hover:font-extrabold
                            group-hover:text-4xl                  
                            font-semibold max-w-md">{product.color}</p>

                          <h2 className='mt-1 text-2xl font-landingPageFont text-black
                            transition-all
                            duration-100
                            ease-in-out
                            group-hover:font-light'>{product.name}</h2>
                          
                        {product.sizes.map((size) => (
                          size.inStock && <p className="flex items-center text-xl opacity-0 group-hover:opacity-100">
                            {size.name}
                          </p>
                          
                        ))

                        }
                          
                        </div>
                      </div>
                    
                    {/* <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 md:h-80  sm:h-80 lg:aspect-none">
                          <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-full h-full sm:w-50 sm:h-50 object-center object-cover lg:w-full lg:h-full"
                          />                                    
                    </div> */}
                    
                    {/* <div className="mt-4 flex justify-between">
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
                    </div> */}
                  </div>
                ))}
              </div>      
            </div>  
            )}
      
    </div>
  )
}

export default ProductsPage