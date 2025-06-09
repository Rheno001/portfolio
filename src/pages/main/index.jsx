import React, { useEffect, useRef, useState } from "react";
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
import Typing from "../../components/typing.jsx";

function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#46504a] text-white scroll-">
      <p className="text-[70px] md:text-[150px] text-[#9cada4] integral-font font-black mt-4 animate-fade-in">
        WELCOME
      </p>
      <div className="flex space-x-4 mb-4">
        <div
          className="w-5 h-5 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="w-5 h-5 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="w-5 h-5 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);
  const sectionRefs = {
    skilled: useRef(null),
    frontend: useRef(null),
    cybersecurity: useRef(null),
    typing: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    player: useRef(null),
    experience: useRef(null),
  };

  useEffect(() => {
    // Preloader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-8", "opacity-0");
            entry.target.classList.add("translate-y-0", "opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.classList.add(
          "translate-y-8",
          "opacity-0",
          "transition-all",
          "duration-1000",
          "ease-out"
        );
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [loading]);

  if (loading) return <Preloader />;

  return (
    <div>
      <Navbar />
      <section id="hero" className="max-w-screen overflow-x-hidden">
        <Hero />
      </section>

      <section id="works" className="py-[30px] ">
        <div className="px-4 sm:px-6 lg:px-17">
          <div ref={sectionRefs.skilled}>
            <img src={skilled} alt="Skilled In" />
          </div>
          <div ref={sectionRefs.frontend} className="frontend">
            <p className="text-[#EDFFFA] text-[20px] md:text-[20px] text-center mt-[30px] md:mt-[40px]">
              Front-End Development Stack
            </p>
            <ul className="flex items-center justify-center mt-[10px] md:mt-[30px] gap-4">
              <li>
                <img
                  src={html}
                  alt="html logo"
                  className="w-[85px] md:w-auto"
                />
              </li>
              <li>
                <img src={css} alt="css logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img src={git} alt="git logo" className="w-[85px] md:w-auto" />
              </li>
              <li>
                <img
                  src={wp}
                  alt="wordpress logo"
                  className="w-[85px] md:w-auto"
                />
              </li>
              <li>
                <img
                  src={vs}
                  alt="vs code logo"
                  className="w-[85px] md:w-auto"
                />
              </li>
              <li>
                <img
                  src={tw}
                  alt="tailwind logo"
                  className="w-[85px] md:w-auto"
                />
              </li>
            </ul>
          </div>
          <div className="cybersecurity">
            <p className="text-[#EDFFFA] text-[20px] md:text-[20px] text-center mt-[30px] md:mt-[40px]">
              Cyber Security Stack
            </p>
            <ul className="flex items-center justify-center mt-[10px] md:mt-[30px] gap-4">
              <li>
                <img
                  src={osint}
                  alt="html logo"
                  className="w-[60px] md:w-auto"
                />
              </li>
              <li>
                <img src={css} alt="css logo" className="w-[60px] md:w-auto" />
              </li>
              <li>
                <img src={git} alt="git logo" className="w-[60px] md:w-auto" />
              </li>
            </ul>
          </div>
          <Typing />
        </div>

        <div
          ref={sectionRefs.projects}
          className="px-4 sm:px-6 lg:px-17 py-[30px] mt-[30px] md:mt-[100px]"
        >
          <img src={projects} alt="projects" />
          <Projects />
        </div>
      </section>

      <section id="about" className="py-[30px]">
        <div ref={sectionRefs.about} className="px-4 sm:px-6 lg:px-17">
          <img
            src={aboutme}
            alt="About Me"
            className="w-[80%] my-[20px] mx-auto"
          />
          <img
            src={knowme}
            alt="knowme header"
            className="mt-[20px] md:mt-[50px]"
          />
          <p className="mt-[15px] md:mt-[25px] text-[15px] md:text-[20px]">
            I'm Renfred Reuben, a front-end developer with three years of hands-on experience crafting fast, responsive, and scalable web applications. I write clean, maintainable code with modern JavaScript frameworks like React and Vue—focused on performance, seamless user experiences, and precise API integrations.
            <br/>
            Beyond the code, music fuels my flow. I have a deep appreciation for storytelling in sound. While Odumodublvck’s raw energy charges the atmosphere, it’s J. Cole’s bars that echo my mindset. As he said:
            “History repeats itself and that’s just how it goes, same way that these rappers always bite each other’s flows.”
            In both code and music, originality matters. Whether I’m debugging a stubborn bug or vibing to a track that hits deep, I bring rhythm, precision, and intent to everything I do.
          </p>
          <img
            src={topalbums}
            alt="top albums header"
            className="mt-[30px] mb-[20px] lg:mb-[50px] md:mt-[60px]"
          />
        </div>
        <Player />

        {/*Experience section*/}
        <section
          ref={sectionRefs.experience}
          className="experience h-[320px] md:h-auto px-4 sm:px-6 lg:px-17"
        >
          <img
            src={experience}
            alt="Work experience"
            className="mt-[30px] md:mt-[60px]"
          />
          <div className="flex mx-auto relative lg:w-[60%] ml-[-2px] md:m-auto">
            <div className="flex ml-[20px] md:ml-0 justify-center items-center h-[536px] my-0 mt-[-100px] md:my-[50px]">
              <div className="relative w-1 bg-[#54625A] h-[250px] md:h-full rounded">
                {/* Top knob */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-md bg-[#edfffa] border-4 border-[#54625A]"></div>

                {/* Bottom knob */}
                <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-6 h-6 rounded-md bg-[#edfffa] border-4 border-[#54625A]"></div>
              </div>
            </div>

            <div className="ml-[30px]">
              <div className="first flex items-center absolute top-[14%] md:top-[16%]">
                <div className="bg-[#EDFFFA] rounded-[24px] border-[3px] border-[#3B4542] p-[8px]">
                  <img
                    src={work}
                    alt="First experience"
                    className="w-[70px] md:w-[132px]"
                  />
                </div>
                <div className="text-[#3B4542] ml-[12px]">
                  <h3 className="text-[15px] md:text-[30px]">
                    Front End Intern @ NHUB Nigeria
                  </h3>
                  <p className="text-[8px] md:text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, temporibus.
                  </p>
                  <p className="text-[8px] md:text-[15px]">
                    14th September 2019 - 20th Febraury 2022
                  </p>
                </div>
              </div>
              <div className="second flex items-center absolute top-[43%] md:top-[58%]">
                <div className="bg-[#EDFFFA] rounded-[24px] border-[3px] border-[#3B4542] p-[8px]">
                  <img
                    src={work}
                    alt="First experience"
                    className="w-[70px] md:w-[132px]"
                  />
                </div>
                <div className="text-[#3B4542] ml-[12px]">
                  <h3 className="text-[15px] md:text-[30px]">
                    Web Dev/Auditor @ Triune Built Tech
                  </h3>
                  <p className="text-[8px] md:text-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto, temporibus.
                  </p>
                  <p className="text-[8px] md:text-[15px]">
                    25th November 2024 - Till Date
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default Index;
