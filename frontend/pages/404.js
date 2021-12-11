import Link from 'next/link';

const ErrorComponent = () => {
  return (
    <div className="max-width-xl mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:gap-x-8 h-2/3">
        <div>
          <img className="hidden md:inline-block sm:inline-block xl:inline-block h-full" src="/Rishi.svg" alt="An SVG of an eye" />
        </div>
        <div className="max-w-7xl bg-saffron mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 sm:mr-6 lg:px-8 lg:py-48">
          <p className="text-2xl font-extrabold text-black text-opacity-50 uppercase tracking-wide">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Uh oh! I think you’re lost.
          </h1>
          <p className="mt-3 text-lg font-medium text-black text-opacity-50">
            It looks like the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a
                className="inline-flex items-center px-4 py-4 border border-transparent text-sm font-semibold rounded-full text-md text-white  bg-header  sm:hover:text-header hover:no-underline  hover:text-header hover:bg-white "
              >
                Go back home
              </a>
            </Link>
          </div>
        </div>
     </div>
    </div>
  );
}

export default ErrorComponent;