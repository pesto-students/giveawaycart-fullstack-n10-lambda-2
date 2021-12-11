import Covid19Alert from "./Covid19Alert";
import HowToShare from "./HowToShare";
import MakeADiffPage from "./MakeADiffPage";
import MiddleSection from "./MiddleSection";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-LandingPageBackground h-full mx-auto max-w-7xl ">
        <div className="relative h-96 lg:h-98 mx-auto max-w-7xl overflow-hidden">
          <img src="https://scx2.b-cdn.net/gfx/news/2021/piles-of-used-clothes.jpg" alt="Avatar" className="object-cover mt-1 w-full h-full " />
          {/* Text on image */}
          <div className="absolute w-full  top-0 inset-y-0  text-white text-3xl md:text-5xl lg:text;7xl
          mt-7 md:mt-4 lg:mt-6
          font-sans font-bold text-center leading-40
          backdrop-filter backdrop-blur-sm
          backdrop-opacity-30 ">
            Let&apos;s not waste our wonderful world
          </div>
          <div className="absolute w-full  top-0 inset-y-0  text-white text-3xl md:text-4xl lg:text;7xl
          mt-36 uppercase md:mt-40 lg:mt-48
          font-sans font-bold text-center leading-40
          backdrop-filter backdrop-blur-sm
          backdrop-opacity-30 ">
            <span className="bg-LandingPageBackground px-4">
              The Price of fast fashion?
            </span>
          </div>

          <div className="absolute w-full bottom-0 mb-2
          text-xl md:text-2xl
          p-4 md:p-5 lg:p-6 border-2 border-red-500
          text-header font-bold
          font-middleSectionFont
          flex justify-center bg-white
          backdrop-filter backdrop-blur-sm">
            <div className="">
              Share More
              <span className="font-bold text-black text-2xl">.</span>
            </div>
            <div className="pl-1">
              Waste Less
              <span className="font-bold text-black text-2xl">.</span>
            </div>
          </div>

        </div>                   
      </div>
      <Covid19Alert />
      <MiddleSection />
      <HowToShare />
      <MakeADiffPage />
    </div>    
  );
}

export default LandingPage;