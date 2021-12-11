
import { CheckIcon, ClockIcon, XCircleIcon  } from '@heroicons/react/solid'
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeItemFromCart } from '../../redux/actions/cartActions'
import Link from 'next/link';
import { createOrder } from '../../redux/actions/orderActions';
import Loader from '../Loader';
import EmptyShoppingCart from './EmptyShoppingCart'

const ShoppingCart = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);  
  const productId = router.query.productId;
  const isCartEmpty = cart.isCartEmpty;
  const whereFrom = (Object.entries(router.query).length === 0)
  const userLogin = useSelector(state => state.userLogin)

  useEffect(() => {
    
    const addCart = async () => {
      await dispatch(addToCart(productId))
    }
    console.log('has user logged in', userLogin)
    if (userLogin.userInfo.length !== 0) {
      addCart();
    } else {
      router.push('/');
    }

  }, [dispatch,productId])
  
  const removeFromCart = async (id) => {
    await dispatch(removeItemFromCart(id))
  }

  const placeOrder = async () => {
    const res = await dispatch(createOrder(cart.cartItems));
  
  }

  const products = cart.cartItems;

  return (
    <div className="bg-white">
      {console.log('query',productId)}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
        {/* {!cart.loading && <Loader />} */}
        {!cart.isCartEmpty && <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>}

        

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            {!(cart.loading) && <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              
              {products.map((product) => (
                <li key={product.id} className="flex flex-col py-6  
                    sm:grid sm:grid-cols-10">
                  <XCircleIcon
                    onClick={() => removeFromCart(`${product._id}`)}
                    className="hidden sm:block h-5 w-5 text-red-500 cursor-pointer transition
                        duration-200
                        ease-in transform
                        sm:hover:scale-125"/>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                    className="w-40 h-40 mx-auto
                        md:h-48 md:w-36
                        rounded-md object-center object-cover sm:w-32 sm:h-32 sm:col-span-2 sm:pr-3"
                  />
                  <div className="sm:col-start-4 sm:col-span-6">
                  <div className="flex justify-center sm:justify-start
                    sm:col-span-4">
                    <div className=" font-landingPageFont font-semibold text-lg sm:text-2xl md:text-3xl my-2 mx-2">
                      {product.name}
                    </div>
                    
                    <div className="font-serif font-semibold text-lg sm:text-xl md:text-2xl my-2 mx-2">
                      {product.color}
                    </div>
                    
                    <div className="font-serif font-semibold text-md sm:text-lg md:text-xl my-2 mx-2">
                      {product.size}
                    </div>
                  </div>

                    <div className="grid sm:grid-cols-2">
                      <div className="font-semibold mx-auto font-serif ">
                        Drop Location:
                      </div>
                      <div className="ml-16 sm:ml-0">
                              {product.dropLocation}                  
                      </div>
                    </div>
                   
                   <div className="relative flex  my-2 justify-center">                      
                        <ClockIcon className="mt-1 h-5 w-5 text-header" aria-hidden="true" />
                      <span className="font-bold mx-2">Pickup: </span>
                        <span className="">{product.pickupTime}</span>
                    </div>
                    <div className="mx-auto sm:hidden">
                        
                        <button type="button"
                          onClick={() => removeFromCart(`${product._id}`)}
                          className="text-sm font-medium text-red-600 hover:text-red-500">
                          <span>Remove</span>
                        </button>
                      </div>
                </div>

                  {/* <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href={product.href} className="sm:text-lg text-md font-bold text-gray-700 hover:text-gray-800 md:text-lg">
                            {product.name}
                          </a>
                        </h4>
                        <p className="mt-1 text-md font-bold md:text-lg text-gray-500">{product.color}</p>
                        <p className="mt-1 text-md font-bold md:text-lg text-gray-500">{product.size}</p>
                        <div className="mt-6 py-2 text-md font-landingPageFont tracking-wider font-semibold space-y-4 sm:mt-0 sm:ml-0 sm:flex-none sm:w-40">
                          {product.dropLocation}                  
                        </div>
                      </div>
                      
                    </div>

                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <p className="flex items-center text-sm text-gray-700 space-x-2">
                        <ClockIcon className="flex-shrink-0 h-5 w-5 text-header" aria-hidden="true" />
                        <span className="font-bold">Pickup: </span>
                        <span>{product.pickupTime}</span>
                      </p>
                      <div className="ml-4">
                        
                        <button type="button"
                          onClick={() => removeFromCart(`${product._id}`)}
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div> */}
                </li>
              ))}
            </ul>}
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            

            {!cart.isCartEmpty && <div className="mt-10">
              <Link href="/orders">
                <a>
                  <button
                    type="submit"
                    onClick={placeOrder}
                    className="w-full bg-header border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-header"
                  >
                    Place Order
                  </button>
                </a>
              </Link>
            </div>}

            

            {!cart.isCartEmpty && <div className="mt-6 text-sm text-center">
              <p>
                or{' '}
                <Link href="/products">
                  <a className="text-header font-medium hover:text-green-500">
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </p>
            </div>}
          </section>
        </form>
        <EmptyShoppingCart />
      </div>
    </div>
  );
}

export default ShoppingCart;