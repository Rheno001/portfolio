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
    <div className={`pb-[20px] md:pb-[100px] pt-[100px] transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className='px-4 sm:px-6 lg:px-17 mt-[10px]'>
        <p className='flex items-center justify-end text-[20px] text-[#A2A3A3]'>Status: <img src={status} alt="" className='h-[37px] w-[37px] ml-[10px]'/>Open to Works</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-[25px] md:mt-[60px] relative px-4 sm:px-6 lg:px-31'>
        {/*<img src={moi} alt="Developers name" className='relative'/>*/}
        <div className="desktop">
           <h1 className='hidden md:block integral-font text-[#54625A] md:text-[160px] lg:text-[200px] font-black relative leading-40 custom-tight mx-auto'>RENFRED</h1>
           <h1 className='hidden md:block integral-font text-[#54625A] md:text-[160px] lg:text-[240px] font-black relative leading-40 custom-tight mx-auto'>REUBEN</h1>
        </div>
        <div className="mobile w-full">
          <h1 className='block md:hidden integral-font text-[#54625A] text-[120px] font-black relative leading-25 mx-auto'>RENF <br />RED -</h1>
          <h1 className='block md:hidden integral-font text-[#54625A] text-[155px] font-black relative leading-30 mx-auto'>REU <br />BEN</h1>
        </div>
        <img 
          src={oldLaptop} 
          alt="Old Computer" 
          className={`absolute md:bottom-[-20%] right-[1%] md:right-[10%] w-[220px] md:w-[350px] z-10 transform transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : 'translate-x-full'}`}
        />
      </div>
      <p className='px-4 sm:px-6 lg:px-40 text-[20px] md:text-[30px] text-[#54625A] mt-[30px]'>A Front-End Developer with a Structured Mind</p>
      <div>
        <img src={frontend} alt="" className='mt-[20px] md:mt-[100px]'/>
      </div>
    </div>
  );
}

export default Hero;
