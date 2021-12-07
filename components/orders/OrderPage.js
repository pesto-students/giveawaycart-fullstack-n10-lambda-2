import { useSelector } from "react-redux";
import Loader from "../Loader";
import Router from 'next/router';
import Link from 'next/link';


const OrderPage = () => {

  const orderCreate = useSelector(state => state.orderCreate);
  var { order } = orderCreate;

  order = order ? order.orderItems : orderCreate
  
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-10 lg:px-8">
      <div className="max-w-xl">           
        <p className="mt-2 text-4xl font-extrabold text-header tracking-tight sm:text-5xl">You can pickup your order!</p>         
      </div>  
      
      <h1 className="text-3xl mt-6 font-extrabold tracking-tight text-gray-900">Order Details</h1>

        <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
         
        </div>

        <section aria-labelledby="products-heading" className="mt-8">
          <h2 id="products-heading" className="sr-only">
            Products purchased
          </h2>

          {orderCreate.loading && <Loader />}
          {!orderCreate.loading && <div className="space-y-24">
            {order.map((product) => (
              <div
                key={product._id}
                className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
              >
                <div className="sm:col-span-4 md:col-span-4 md:row-end-2 md:row-span-2">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                    <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                  </div>
                </div>
                <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={product.href}>{product.name}</a>
                  </h3>
                  <p className="font-medium text-gray-900 mt-1">{product.price}</p>
                  <p className="text-gray-500 mt-3">{product.description}</p>
                </div>
                <div className="sm:col-span-12 md:col-span-7">
                  <dl className="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                    <div>
                      <dt className="font-medium text-gray-900">Pickup Location</dt>
                      <dd className="mt-3 text-gray-500">
                        <span className="block">hjhj</span>
                        <span className="block">gjhjgh</span>
                        <span className="block">hggjh</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-900">Pickup Time</dt>
                      <dd className="mt-3 text-gray-500 space-y-3">
                        <p>{product.pickupTime}</p>
                        <p>{product.phone}</p>                        
                      </dd>
                    </div>
                    <div className="mt-6 flex-1 flex items-end">
                      <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                        <div className="flex">
                          <dt className="font-medium text-gray-900">Color: </dt>
                          <dd className="ml-2 text-gray-700">{ product.color}</dd>
                        </div>
                        <div className="pl-4 flex sm:pl-6">
                          <dt className="font-medium text-gray-900">Size</dt>
                          <dd className="ml-2 text-gray-700">{product.size}</dd>
                        </div>
                        <div className="pl-4 flex sm:pl-6">
                          <dt className="font-medium text-gray-900">Brand</dt>
                          <dd className="ml-2 text-gray-700">{product.brand}</dd>
                        </div>
                      </dl>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
           <Link href="/">
              <a>
                <button
                  type="submit"                    
                  className="w-full bg-header border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-header"
                >
                  Continue Shopping
                </button>
              </a>
            </Link>
        </div>}
       
      </section>
    </main>
  )
  
  // return (
  //   <div>
  //     <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
  //       {orderCreate.loading && <Loader />}
  //       {!orderCreate.loading && <div className="max-w-3xl mx-auto">          
  //       <div className="max-w-xl">
  //         <h1 className="text-sm font-semibold uppercase tracking-wide text-header">Thank you!</h1>
  //         <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">You can pickup your order!</p>
  //         <p className="mt-2 text-base text-gray-500">Your order will be available at the pickup location.</p>
  //       </div>

  //       <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
  //         <h2 id="order-heading" className="sr-only">
  //           Your order
  //         </h2>

  //           <h3 className="sr-only">Items</h3>
  //           <div className="grid grid-cols-1 sm:grid-cols-2">
  //             <div>
  //               { order.orderItems.map((product) => (
  //                 <div key={product._id} className="py-10 border-b border-gray-200 flex space-x-6  ">
  //                   <img
  //                     src={product.imageSrc}
  //                     alt={product.imageAlt}
  //                     className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
  //                   />
  //                   <div className="flex-auto flex flex-col">
  //                     <div>
  //                       <h4 className="font-medium text-gray-900">
  //                         <a href={product.href}>{product.name}</a>
  //                       </h4>
  //                       <p className="mt-2 text-sm font-bold text-gray-600">{product.brand}</p>
  //                     </div>
  //                     <div className="mt-6 flex-1 flex items-end">
  //                       <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
  //                         <div className="flex">
  //                           <dt className="font-medium text-gray-900">Color: </dt>
  //                           <dd className="ml-2 text-gray-700">{ product.color}</dd>
  //                         </div>
  //                         <div className="pl-4 flex sm:pl-6">
  //                           <dt className="font-medium text-gray-900">Size</dt>
  //                           <dd className="ml-2 text-gray-700">{product.size}</dd>
  //                         </div>
  //                       </dl>
  //                     </div>
  //                   </div>
                  
  //                 </div>
  //               ))}
  //             </div>
  //             <div>
                
  //             </div>
  //         </div>
  //       </section>
  //     </div>}
  //   </main>
  //   </div>
  // );
}

export default OrderPage;