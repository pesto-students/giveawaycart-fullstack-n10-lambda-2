import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
const EmptyShoppingCart = () => {

  const cart = useSelector(state => state.cart);  

  return (
    <div>
      {cart.isCartEmpty && <h1 className="text-3xl font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl">Your Cart is empty</h1>}

      {cart.isCartEmpty &&
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
      }

    </div>

    
  );
}

export default EmptyShoppingCart;