import React, { useEffect, useRef } from "react";
import Navbar from "../../components/navbar.jsx";
import Hero from "../../components/hero.jsx";
import Player from "../../components/player.jsx";
import Footer from "../../components/footer.jsx";
import aboutme from "../../assets/aboutme.png";
import knowme from "../../assets/Knowme.png";
import experience from "../../assets/experience.png";
import skilled from "../../assets/skilled.png";
import topalbums from "../../assets/topalbums.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import wp from "../../assets/wp.png";
import git from "../../assets/git.png";
import vs from "../../assets/vs.png";
import tw from "../../assets/tw.png";
import osint from "../../assets/osint.png";
import projects from "../../assets/projects.png";
import Projects from "../../components/projects.jsx";
import work from "../../assets/work.png";

function Index() {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("-translate-y-8", "opacity-0");
          entry.target.classList.add("translate-y-0", "opacity-100");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
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
      <Navbar />
      <section id="hero">
        <Hero />
      </section>

      <section id="works" className="py-[30px]">
        <div className="px-4 sm:px-6 lg:px-17">
          <img src={skilled} alt="Skilled In" />
          <div className="frontend">
            <p className="text-[#EDFFFA] text-[20px] md:text-[20px] text-center mt-[30px] md:mt-[40px]">
              Front-End Development Stack
            </p>
            <ul className="flex items-center justify-center mt-[10px] md:mt-[30px] gap-4">
              <li>
                <img src={html} alt="html logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img src={css} alt="css logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img src={git} alt="git logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img src={wp} alt="wordpress logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img src={vs} alt="vs code logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img src={tw} alt="tailwind logo" className="w-[85px] md:w-auto" />
              </li>
            </ul>
          </div>
          <div className="cybersecurity">
            <p className="text-[#EDFFFA] text-[20px] md:text-[20px] text-center mt-[30px] md:mt-[40px]">
              Cyber Security Stack
            </p>
            <ul className="flex items-center justify-center mt-[10px] md:mt-[30px] gap-4">
              <li>
                <img src={osint} alt="html logo" className="w-[80px] md:w-auto" />
              </li>
              <li>
                <img src={css} alt="css logo" className="w-[80px] md:w-auto" />
              </li>
              <li>
                <img src={git} alt="git logo" className="w-[80px] md:w-auto" />
              </li>
            </ul>
          </div>
          <div className="little">
            <p className="text-center text-[#EDFFFA] text-[9px] md:text-[15px] lg:text-[20px] font-serif px-2 sm:px-4 leading-relaxed relative mt-[30px] sm:mt-[40px] md:mt-[50px]">
              <span className="relative z-10">
                Exploring The Intersection Of Front-End Development And
                Cybersecurity. Designing
              </span>
              <span className="absolute inset-0 z-0">
                <span className="block w-[80%] sm:w-[70%] md:w-[60%] h-[60%] bg-[#242e29] absolute left-[10%] sm:left-[15%] md:left-[20%] bottom-[0.1em] rounded-sm"></span>
              </span>
            </p>
            <p className="text-center text-[#EDFFFA] text-[9px] md:text-[15px] lg:text-[20px] font-serif px-2 sm:px-4 leading-relaxed relative">
              <span className="relative z-10">With Security In Mind</span>
              <span className="absolute inset-0 z-0">
                <span className="block w-[25%] sm:w-[20%] md:w-[15%] h-[60%] bg-[#242e29] absolute left-[37.5%] sm:left-[40%] md:left-[42.5%] bottom-[0.1em] rounded-sm"></span>
              </span>
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-17 py-[30px] mt-[30px] md:mt-[100px]">
          <img src={projects} alt="projects" />
          <Projects />
        </div>
      </section>

      <section id="about" className="py-[30px]">
        <div className="px-4 sm:px-6 lg:px-17">
          <img
            ref={imageRef}
            src={aboutme}
            alt="About Me"
            className="-translate-y-8 opacity-0 transition-all w-[80%] mx-auto duration-1000 ease-out"
          />
          <img
            src={knowme}
            alt="knowme header"
            className="mt-[20px] md:mt-[50px]"
          />
          <p className="mt-[15px] md:mt-[25px] text-[15px] md:text-[20px]">
            I'm Renfred Reuben, a front-end developer with three years of
            hands-on experience building fast, responsive, and scalable web
            applications. I specialize in writing clean, maintainable code using
            modern JavaScript frameworks and libraries like React and Vue. From
            optimizing performance to handling API integrations, I focus on the
            technical side of front-end development to create seamless user
            experiences. <br />
            Beyond coding, music is my second language. I have a deep
            appreciation for storytelling in songs, and Odumodublvck's raw
            energy and lyricism hit differently. Whether I’m debugging a tricky
            function or vibing to a solid track, there’s always a rhythm to what
            I do.
          </p>
          <img
            src={topalbums}
            alt="top albums header"
            className="mt-[30px] md:mt-[60px]"
          />
        </div>
        <Player />

        {/*Experience section*/}
        <div className="px-4 sm:px-6 lg:px-17">
          <img
            src={experience}
            alt="Work experience"
            className="mt-[30px] md:mt-[60px]"
          />
          <div className="flex mx-auto relative w-[60%]">
            <div className="flex justify-center items-center h-[536px] bg-white my-[50px]">
              <div className="relative w-1 bg-[#54625A] h-full rounded">
                {/* Top knob */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-md bg-[#edfffa] border-4 border-[#54625A]"></div>

                {/* Bottom knob */}
                <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-md bg-[#edfffa] border-4 border-[#54625A]"></div>
              </div>
            </div>

            <div className="ml-[30px]">
              <div className="first flex items-center absolute top-[16%]">
                <div className="bg-[#EDFFFA] rounded-[24px] border-[3px] border-[#3B4542] p-[8px]">
                  <img src={work} alt="First experience" />
                </div>
                <div className="text-[#3B4542] ml-[25px]">
                  <h3 className="text-[30px]">
                    Front End Intern @ NHUB Nigeria
                  </h3>
                  <p className="text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, temporibus.
                  </p>
                  <p className="text-[15px]">
                    14th September 2019 - 20th Febraury 2022
                  </p>
                </div>
              </div>
              <div className="second flex items-center absolute top-[58%]">
                <div className="bg-[#EDFFFA] rounded-[24px] border-[3px] border-[#3B4542] p-[8px]">
                  <img src={work} alt="First experience" />
                </div>
                <div className="text-[#3B4542] ml-[25px]">
                  <h3 className="text-[30px]">
                    Front End Intern @ NHUB Nigeria
                  </h3>
                  <p className="text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, temporibus.
                  </p>
                  <p className="text-[15px]">
                    14th September 2019 - 20th Febraury 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Index;
