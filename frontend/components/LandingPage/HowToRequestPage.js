import { howToRequest } from "../../staticdata";
import Link from 'next/link';
import StartShopping from "./StartShopping";

const HowToRequestPage = () => {
  return (
    <>
      <div className="mt-10 flex flex-col">
        <div className="pl-5 font-bold text-4xl">
          How to Request
        </div>
        {/* Steps */}

        {howToRequest.map(value => (
          <div key={value.number} className="grid grid-cols-10 mt-8 ml-4">
          <div className="place-self-start py-4 
          px-6
          rounded-full
          bg-pink-200
          text-2xl text-pink-800
          font-bold">
            {value.number}
          </div>
            <div className="col-span-7 md:col-span-5 lg:col-span-8
           flex flex-col">
            <div className="
            px-9 pb-4 pt-1
            text-3xl text-pink
            font-landingPageFontBold font-bold">
              {value.heading}
            </div>

            <div className="
            font-landingPageFontBold font-medium
            tracking-wider
            text-xl
            px-9">
              {value.content}
            </div>

          </div>
        </div>
        ))}
        <StartShopping />
        {/* <div className="ml-4">
          <Link href='/'>
            <a >
              <button
                className="mt-3 px-16 sm:px-10 sm:ml-12 font-bold text-4xl
                font-landingPageFontBold
                py-3
                "
                value="Share Your Clothes Now!!!">
                <span className="bg-black text-white tracking-wider py-3 px-2 rounded-tr-3xl
                
                sm:hover:border-2 sm:hover:shadow-2xl sm:text-2xl
                text-base">
                  Start Shopping
                </span>
              </button>
            </a>

          </Link>
        </div> */}
      </div>
    </>
  );
}

export default HowToRequestPage;