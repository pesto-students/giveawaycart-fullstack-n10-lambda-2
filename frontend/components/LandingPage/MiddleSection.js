const MiddleSection = () => {
  return (
    <>
      <div className="bg-LandingPageBackground mx-auto max-w-7xl w-full">
        {/* font-weight bold, cerebri-sans-bold, 4.1vw line-height-110% */}
        <div className="pt-5 px-10 text-center">
          <span className="text-white font-landingPageFontBold font-bold leading-tight  text-6xl">
          Join the #1 free sharing community
        </span>
        </div>

        <div className="p-5 px-10 text-center 
        max-w-2xl md:max-w-3xl
        md:mx-auto ">
          <span className="text-white font-landingPageFont font-medium leading-tight  text-2xl">
          
On Hope, you’ll find millions of people giving away their favourite, quality clothes to the people across the entire city, all for free.

            <p className="pt-5">
              Fight waste. Help your neighbours. Save our planet. <br /> Feel amazing!

            </p>
        </span>
        </div>

      </div> 
    </>
  );
}

export default MiddleSection;