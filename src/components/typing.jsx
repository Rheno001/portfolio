import { useEffect, useState, useRef } from 'react';

function TypingText() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const fullText1 = 'Exploring The Intersection Of Front-End Development And Cybersecurity. Designing';
  const fullText2 = 'With Security In Mind';
  
  const timeoutRef = useRef(null);
  const currentIndex = useRef(0);
  const isFirstText = useRef(true);
  const isTyping = useRef(true);
  const pauseCount = useRef(0);

  useEffect(() => {
    const typeText = () => {
      const currentText = isFirstText.current ? fullText1 : fullText2;
      const setText = isFirstText.current ? setText1 : setText2;
      
      if (isTyping.current && currentIndex.current < currentText.length) {
        // Typing forward
        setText(currentText.substring(0, currentIndex.current + 1));
        currentIndex.current++;
        const speed = Math.random() * (150 - 50) + 50;
        timeoutRef.current = setTimeout(typeText, speed);
      } else if (isTyping.current && currentIndex.current >= currentText.length) {
        // Finished typing, pause before switching text or erasing
        if (isFirstText.current) {
          isFirstText.current = false;
          currentIndex.current = 0;
          timeoutRef.current = setTimeout(typeText, 500);
        } else {
          // Both texts are done, pause then start erasing
          pauseCount.current++;
          if (pauseCount.current >= 3) { // Show easter egg every 3rd cycle
            setShowEasterEgg(true);
            setTimeout(() => setShowEasterEgg(false), 2000);
            pauseCount.current = 0;
          }
          isTyping.current = false;
          timeoutRef.current = setTimeout(typeText, 1500);
        }
      } else if (!isTyping.current && currentIndex.current > 0) {
        // Erasing text
        setText(currentText.substring(0, currentIndex.current - 1));
        currentIndex.current--;
        const speed = Math.random() * (100 - 30) + 30; // Faster erasing
        timeoutRef.current = setTimeout(typeText, speed);
      } else if (!isTyping.current && currentIndex.current === 0) {
        // Finished erasing current text
        if (!isFirstText.current) {
          // Finished erasing second text, switch to first
          isFirstText.current = true;
          isTyping.current = true;
          timeoutRef.current = setTimeout(typeText, 300);
        } else {
          // Finished erasing first text, start typing again
          isTyping.current = true;
          timeoutRef.current = setTimeout(typeText, 300);
        }
      }
    };

    timeoutRef.current = setTimeout(typeText, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="little relative">
      {showEasterEgg && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce z-20 whitespace-nowrap">
          🎉 Keep coding, you beautiful human! 🎉
        </div>
      )}
      
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