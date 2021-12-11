const MakeADiffPage = () => {
  return (
     <div className="bg-gray-50 mx-auto max-w-7xl">
      <div className="  py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-landingPageFont font-extrabold text-black sm:text-4xl">Join Us in Making a difference</h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-semibold font-landingPageFont text-numberCaption">Clothes Shared</dt>
            <dd className="order-1 text-5xl font-extrabold text-numberColor">25,364</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-semibold font-landingPageFont text-numberCaption">Users</dt>
            <dd className="order-1 text-5xl font-extrabold text-numberColor">14,654</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-semibold font-landingPageFont text-numberCaption">Donors</dt>
            <dd className="order-1 text-5xl font-extrabold text-numberColor">15,000+</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default MakeADiffPage;