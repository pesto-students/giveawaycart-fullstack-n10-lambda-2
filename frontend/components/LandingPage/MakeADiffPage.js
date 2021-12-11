import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const MakeADiffPage = () => {
  const [clothStartValue, setClothStartValue] = useState(25364)
  const [clothEndValue, setClothEndValue] = useState(25370)

  const [userStartValue, setUserStartValue] = useState(14654)
  const [userEndValue, setUserEndValue] = useState(14656)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setClothStartValue(clothStartValue + 1)
      setClothEndValue(clothStartValue+1)
    }, 3000);
  
    return () => {
      clearTimeout(timer1);
  } 
  }, [clothStartValue])
  
  useEffect(() => {
    
    const timer2 = setTimeout(() => {
      setUserStartValue(userStartValue + 1)
      setUserEndValue(userStartValue+1)
  }, 5000);
    return () => {
      clearTimeout(timer2);
  } 
  }, [userStartValue])


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
            <dd className="order-1 text-5xl font-extrabold text-numberColor">
              <CountUp
                start={clothStartValue}
                end={clothEndValue}
                duration={5} 
                separator=","
                decimals={0}
                decimal=","  
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
              />
              
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-semibold font-landingPageFont text-numberCaption">Users</dt>
            <dd className="order-1 text-5xl font-extrabold text-numberColor">
              <CountUp
                start={userStartValue}
                end={userEndValue}
                duration={5} 
                separator=","
                decimals={0}
                decimal=","  
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
              />
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-semibold font-landingPageFont text-numberCaption">Donors</dt>
            <dd className="order-1 text-5xl font-extrabold text-numberColor"> 15000+    
            </dd>
          </div>
        </dl>
        
      </div>
    </div>
  );
}

export default MakeADiffPage;