import React, { useState, useEffect } from 'react'
import logo from '../assets/reno.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex-1 items-center justify-center z-50 h-[73px] pb-[85px] transition-colors duration-300 ${isScrolled ? 'bg-[#fff]/90' : 'bg-none'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#hero">
              <img 
                src={logo} 
                alt="RENO Logo" 
                className="h-[25px] md:h-12 w-auto cursor-pointer"
              />
              </a>
              
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-12">
            <a 
              href="#works" 
              className="text-[#54625A] text-[20px] transition-colors duration-300 relative group"
            >
              Works
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#54625A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-[#54625A] text-[20px] transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#54625A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-[#54625A] text-[20px] transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#54625A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

            {/* Button */}
            <button className="hidden md:block bg-[#EDFFFA] border-4 rounded-[18px] py-[12px] px-[3px] border-[#54625A]">
              <a href="#" className='border-2 rounded-[10px] py-[10px] px-[40px] border-[#54625A]'>Download CV</a>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-[#54625A] hover:text-[#54625A] focus:outline-none"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke={isOpen ? "white" : "currentColor"}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M2 3h20M2 12h20M2 21h20" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/80 bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            {/*<button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>*/}
          </div>

          <div className="mt-[100px] flex flex-col space-y-8">
          <img 
                src={logo} 
                alt="RENO Logo" 
                className="w-[100px] cursor-pointer"
              />
            <a 
              href="#works" 
              className="text-[#54625A] text-[20px] transition-colors duration-300 relative group"
              onClick={() => setIsOpen(false)}
            >
              Works
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#54625A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-[#54625A] text-[20px] transition-colors duration-300 relative group"
              onClick={() => setIsOpen(false)}
            >
              About
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#54625A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-[#54625A] text-[20px] transition-colors duration-300 relative group"
              onClick={() => setIsOpen(false)}
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#54625A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className=" bg-[#EDFFFA] border-4 rounded-[18px] py-[12px] px-[3px] border-[#54625A]">
              <a href="#" className='border-2 rounded-[10px] py-[10px] px-[40px] border-[#54625A]'>Download CV</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;


