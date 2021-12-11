import blueShade from '../../public/blueshade.svg'
const DonorPage = () => {
  return (
    <div className="max-w-7xl mx-auto border-2">
      <div>        
        <img src="/donation.png" alt="" />
        <img className="w-96 -mt-48
              sm:w-3/4 sm:-mt-97 sm:h-97 sm:-ml-12"
              src="blueShade.svg" alt="" />
        <p className="text-login font-bold text-xs -mt-40 mx-10
        sm:text-lg sm:-mt-80 sm:ml-20 sm:mb-2">
        Hope Services
      </p>
        <p className="text-white font-bold text-2xl -mt-30 mx-10
        sm:text-4xl sm:-mt-70 sm:ml-20">
        Sharing is Caring
        </p>        
        <p className="text-white font-medium text-xs mt-2 mx-10 max-w-xs
        sm:text-lg sm:mt-6 sm:ml-20 sm:mb-2 sm:max-w-xs">
        we are ready to provide better service to make the world a Happy Place
      </p>
      </div>
      
    </div>
  );
}

export default DonorPage;