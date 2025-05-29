import { useEffect, useState, useRef } from 'react';

function TypingText() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const fullText1 = 'Exploring The Intersection Of Front-End Development And Cybersecurity. Designing';
  const fullText2 = 'With Security In Mind';

  const timeoutRef = useRef(null);
  const currentIndex = useRef(0);
  const isFirstText = useRef(true);

  useEffect(() => {
    const typeText = () => {
      const currentText = isFirstText.current ? fullText1 : fullText2;
      const setText = isFirstText.current ? setText1 : setText2;
      
      if (currentIndex.current < currentText.length) {
        setText(currentText.substring(0, currentIndex.current + 1));
        currentIndex.current++;
        
        // Vary the typing speed slightly for a more natural feel
        const speed = Math.random() * (150 - 50) + 50;
        timeoutRef.current = setTimeout(typeText, speed);
      } else if (isFirstText.current) {
        isFirstText.current = false;
        currentIndex.current = 0;
        timeoutRef.current = setTimeout(typeText, 500); // Pause before starting second text
      }
    };

    timeoutRef.current = setTimeout(typeText, 500); // Initial delay

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="little">
      <p className="text-center text-[#EDFFFA] text-[8px] md:text-[15px] lg:text-[20px] font-serif px-2 sm:px-4 leading-relaxed relative mt-[30px] sm:mt-[40px] md:mt-[50px]">
        <span className="relative z-10">
          {text1}
          {isFirstText.current && <span className="animate-pulse">|</span>}
        </span>
        <span className="absolute inset-0 z-0">
          <span className="block w-[80%] sm:w-[70%] md:w-[60%] h-[60%] bg-[#242e29] absolute left-[10%] sm:left-[15%] md:left-[20%] bottom-[0.1em] rounded-sm"></span>
        </span>
      </p>
      <p className="text-center text-[#EDFFFA] text-[8px] md:text-[15px] lg:text-[20px] font-serif px-2 sm:px-4 leading-relaxed relative">
        <span className="relative z-10">
          {text2}
          {!isFirstText.current && <span className="animate-pulse">|</span>}
        </span>
        <span className="absolute inset-0 z-0">
          <span className="block w-[20%] sm:w-[20%] md:w-[15%] h-[60%] bg-[#242e29] absolute left-[40%] sm:left-[40%] md:left-[42.5%] bottom-[0.1em] rounded-sm"></span>
        </span>
      </p>
    </div>
  );
}

export default TypingText;
