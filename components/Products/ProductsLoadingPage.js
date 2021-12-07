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

import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/actions/productActions';

//useSelector - select the part of the state that you want to use here

const ProductsLoadingPage = () => {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)

  useEffect(() => {
    const getProducts = async () => {
       
      //await dispatch(listProducts());
    }
    getProducts();  
  },[dispatch])
  
const products = [1,2,3,4,5,6,7,8,9,10]
  return (    
    <>
      <div className="max-w-2xl mx-auto py-1 px-4 sm:py-1 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {  products.map(value => (
          <div key={value} className="w-full h-60 animate-pulse">
              <div className=" w-full h-full bg-gray-300 rounded-md">          
                <div className="w-full bg-gray-300 h-42  ">
                </div>
              </div>
            </div>
        ))}
          
        </div>
      </div>
    </>
  )
}

export default ProductsLoadingPage