import React, { useEffect, useRef } from 'react'
import Navbar from '../../components/navbar.jsx'
import Footer from '../../components/footer.jsx'
import aboutme from '../../assets/aboutme.png'
import knowme from '../../assets/Knowme.png'
import topalbums from '../../assets/topalbums.png'

function Index() {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('-translate-y-8', 'opacity-0');
          entry.target.classList.add('translate-y-0', 'opacity-100');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <section id="hero">
        <h1>RENFRED<br />REUBEN</h1>
      </section>
      <section id="about" className='px-4 sm:px-6 lg:px-8 py-[30px]'>
        <img 
          ref={imageRef}
          src={aboutme} 
          alt="About Me" 
          className="-translate-y-8 opacity-0 transition-all w-[80%] mx-auto duration-1000 ease-out"
        />
        <img src={knowme} alt="knowme header" className='mt-[20px] md:mt-[50px]' />
        <p className='mt-[15px] md:mt-[25px] text-[15px] md:text-[20px]'>I'm Renfred Reuben, a front-end developer with three years of hands-on experience building fast, responsive, and scalable web applications. I specialize in writing clean, maintainable code using modern JavaScript frameworks and libraries like 
            React and Vue. From optimizing performance to handling API integrations, I focus on the technical side of front-end development to create seamless user experiences. <br />
            Beyond coding, music is my second language. I have a deep appreciation for storytelling in songs, and Odumodublvck's raw energy and lyricism hit differently. Whether I’m debugging a tricky function or vibing to a solid track, there’s always a rhythm to what I do.
        </p>
        <img src={topalbums} alt="top albums header" className='mt-[30px] md:mt-[60px]' />
      </section>
      <Footer/>
    </div>
  )
}

export default Index;