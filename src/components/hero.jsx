import { useEffect, useState } from 'react';
import status from '../assets/status.png'
import frontend from '../assets/frontend.png'
import reno from '../assets/reno.png';
import moi from '../assets/moi.png'
import oldLaptop from '../assets/old-laptop.png'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className='pb-[100px] pt-[100px]'>
      <div className='px-4 sm:px-6 lg:px-17 mt-[10px]'>
        <p className='flex items-center justify-end text-[20px] text-[#A2A3A3]'>Status: <img src={status} alt="" className='h-[37px] w-[37px] ml-[10px]'/>Open to Works</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-[60px] relative'>
        <img src={moi} alt="Developers name" className='relative'/>
        <img 
          src={oldLaptop} 
          alt="Old Computer" 
          className={`absolute bottom-[-20%] right-[10%] w-[350px] z-10 transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}
        />
      </div>
      <p className='text-start flex px-4 sm:px-6 lg:px-31 text-[30px] text-[#54625A] mt-[10px]'>A Front-End Developer with a Structured Mind</p>
      <div>
        <img src={frontend} alt="" className='mt-[100px]'/>
      </div>
    </div>
  );
}

export default Hero;
