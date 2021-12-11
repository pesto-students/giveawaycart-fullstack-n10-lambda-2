import Link from 'next/link';
import { useRouter } from 'next/router';

const StartShopping = () => {

  const router = useRouter();

  const gotoProdScreen = () => {
    router.push('/products')
  }

  return (
    <div className=" ml-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-14 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Looking for good Clothing?</span>
          <span className="block text-LandingPageBackground">Explore the range of products now!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
           
            <a              
              onClick={gotoProdScreen}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent font-landingPageFont tracking-wider
                text-sm sm:text-lg md:text-xl
               font-medium rounded-md text-white bg-header hover:bg-indigo-700"
            >
              Start Shopping
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartShopping;