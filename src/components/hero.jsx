import { useEffect, useState } from 'react';
import reno from '../assets/reno.png';

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-center py-20 relative overflow-hidden">
      {/* Main Text */}
      <h1 className="text-[80px] font-extrabold leading-none text-[#3d4b44]">
        RENFRED <br /> RUBEI
      </h1>

      {/* Parallax Image */}
      <img
        src={reno}
        alt="Retro Computer"
        className="w-32 md:w-40 absolute top-[115px] right-[80px] md:right-[160px] transform transition-transform duration-100"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      />

      {/* Subheading */}
      <p className="mt-6 text-lg text-gray-700 font-serif">
        A Front-End Developer With A Structured Mind
      </p>
    </div>
  );
}

export default Hero;
