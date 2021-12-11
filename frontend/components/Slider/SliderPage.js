import { useRouter } from 'next/router';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { useSelector } from 'react-redux';



const SliderPage = () => {

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  const router = useRouter()
  
  const gotoProductScreen = (id) => {
    router.push(`/product/${id}`)
    console.log('Hello', id)
  }

  return (
    <div className=" relative h-72 mt-10 border-r-8 border-2 lg:border-2 md:border-2 sm:border-2  p-1 border-header w-full xl:max-w-6xl lg:max-w-4xl md:max-w-3xl sm:max-w-xl  mx-auto bg-white">
      {!loading &&
        <div className="
         absolute inset-0  flex items-center justify-center w-full  slide">
            <Slider autoplay={3000}>
              {products.map((item, index) => (
                <div className="bg-gray-50 flex w-full items-center justify-center  mx-auto"
                  key={index}          
                >
                  {/* <div className="grid grid-cols-12 h-3/4">                    
                    <div className="col-start-3 col-span-5">
                      <img className="h-72" src={item.imageSrc} alt="" />
                    </div>
                    <div className="col-start-8 col-span-3">
                      <div className="flex flex-col place-content-between">
                        <div className="">
                        {item.name}
                        </div>
                        <div className="">
                        {item.description}
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="cursor-pointer h-3/4 flex content-center  bg-gray-200 md:bg-gray-50" onClick={() => gotoProductScreen(item._id)}>
                    <div>
                      <img className=" p-1 m-2 h-72  " src={item.imageSrc} alt="" />
                    </div>
                    {/* <div className="flex flex-col h-3/4 items-center">
                      <div className="hidden  md:block bg-gray-50  ">
                        <p className="text-black mt-2 text-2xl ">
                          {item.name}
                        </p>
                      </div>
                      <div></div>
                      <div className="hidden items-center md:block   ">
                        <p className="text-black max-w-sm text-2xl ">
                          {item.description}
                        </p>
                      </div>
                    </div> */}
                    
                  </div>                   
                    {/* <button>{item.button}</button> */}
                </div>
              ))}
            </Slider>
        </div>
      }
        
    </div>
  );
}

export default SliderPage;

// import { useSelector } from "react-redux";
// import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
// import { createRef, useEffect, useRef, useState } from "react";

// let count = 0;
// let slideInterval;

// const Slider = () => {

//   const productList = useSelector((state) => state.productList)
//   const { loading, error, products } = productList  

//   const handleOnNextClick = () => {
//     if (!loading) {
//       count = (count + 1) % products.length;
//       setCurrentIndex(count);
//       let activeSlide = slideRef.current.classList
//       activeSlide.remove('translate-x-0');
//       activeSlide.add('-translate-x-full');
      
//       let nextSlide = activeSlide
//       nextSlide.remove('translate-x-full');
//       nextSlide.add('translate-x-0');
//     }
//   };

//   const handleOnPrevClick = () => {
//     const productsLength = products.length;
//     count = (currentIndex + productsLength - 1) % productsLength;
//     setCurrentIndex(count);
    
//     let activeSlide = slideRef.current.classList
//       activeSlide.remove('translate-x-0');
//       activeSlide.add('translate-x-full');
      
//       let nextSlide = activeSlide
//       nextSlide.remove('-translate-x-full');
//       nextSlide.add('translate-x-0');
//   };

 
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const pauseSlider = () => {
//     clearInterval(slideInterval);
//   };

//   const startSlider = () => {
//     setInterval(() => {
//       handleOnNextClick();
//     }, 3000);
//   };

//   useEffect(() => {
//     startSlider();
//     //removeAnimation();
//     // slideRef.current.addEventListener("animationend", removeAnimation);    
    
//   }, []);

//   const slideRef = useRef();

//   return (
//     <div className=" relative h-72 mt-10 border-r-8 lg:border-2 p-1 border-header w-full max-w-6xl mx-auto bg-white">
      
//      {!loading && 
//       <div ref={slideRef}  key={products[currentIndex]._id} className="
//       absolute object-contain inset-0  h-72 bg-gray-600 flex items-center justify-center  mx-auto  slide">
//           <img className="h-full p-2   rounded-full transition-all ease-in-out duration-1000 transform translate-x-0" src={products[currentIndex].imageSrc} alt="" /> 
//         </div>}
      
//       <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
//         <ArrowCircleLeftIcon onClick={handleOnPrevClick} className="h-6 w-6 text-header lg:h-10 lg:w-10" />
//         <ArrowCircleRightIcon onClick={handleOnNextClick} className="h-6 w-6 m-2 text-header lg:h-10 lg:w-10" />        
//       </div>
//     </div>
//   );
// }

// export default Slider;

