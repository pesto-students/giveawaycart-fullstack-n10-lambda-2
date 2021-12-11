import { HeartIcon } from "@heroicons/react/solid";

const Covid19Alert = () => {
  return (
    <div className="mx-auto max-w-7xl border-2 border-black bg-alertBg">
      <div className="p-6 sm:p-4 md:p-3 flex md:justify-center">
        <HeartIcon className="h-9 w-9
        md:h-8 md:w-8
         text-red-500" />
        <span className="font-notificationFont
        font-semibold text-alertFontColor text-xl pl-2 pt-1">
          COVID-19: Your community needs you! Share safely with no-contact pickups
        </span>
      </div>
      {/* #2b2b2b #ffcc4e-yellow sans-serif */}
    </div>
  );
}

export default Covid19Alert;