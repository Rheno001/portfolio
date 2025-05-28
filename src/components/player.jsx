import { useRef, useState } from 'react';
import song1Img from '../assets/nigga.png';
import song2Img from '../assets/nigga.png';
import song3Img from '../assets/nigga.png';
import song4Img from '../assets/nigga.png';
import song5Img from '../assets/nigga.png';
import albumBg from '../assets/albumbg.png';
import headphones from '../assets/Headphone.png';

function Player() {
  const audioRefs = {
    song1: useRef(null),
    song2: useRef(null),
    song3: useRef(null),
    song4: useRef(null),
    song5: useRef(null),
  };

  const [currentPlaying, setCurrentPlaying] = useState(null);

  const toggleAudio = (key) => {
    const selectedAudio = audioRefs[key].current;

    if (!selectedAudio) return;

    if (currentPlaying === key) {
      selectedAudio.pause();
      setCurrentPlaying(null);
    } else {
      Object.entries(audioRefs).forEach(([k, ref]) => {
        if (ref.current) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });

      selectedAudio.play();
      setCurrentPlaying(key);
    }
  };

  const getCurrentFileName = () => {
    if (!currentPlaying) return 'None';
    const audio = audioRefs[currentPlaying]?.current;
    return audio?.src?.split('/').pop() || 'Unknown';
  };

  return (
    <>
      <div
        className="p-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          backgroundImage: `url(${albumBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex min-w-min gap-4 md:gap-6 lg:gap-8 px-2 md:justify-center">
          <div className="snap-center shrink-0">
            <img 
              src={song1Img} 
              alt="Play Song 1" 
              onClick={() => toggleAudio('song1')} 
              className="w-[80px] sm:w-[150px] md:w-[200px] lg:w-[223px] hover:scale-110 transition-all cursor-pointer" 
            />
          </div>
          <div className="snap-center shrink-0">
            <img 
              src={song2Img} 
              alt="Play Song 2" 
              onClick={() => toggleAudio('song2')} 
              className="w-[80px] sm:w-[150px] md:w-[200px] lg:w-[223px] hover:scale-110 transition-all cursor-pointer" 
            />
          </div>
          <div className="snap-center shrink-0">
            <img 
              src={song3Img} 
              alt="Play Song 3" 
              onClick={() => toggleAudio('song3')} 
              className="w-[80px] sm:w-[150px] md:w-[200px] lg:w-[223px] hover:scale-110 transition-all cursor-pointer" 
            />
          </div>
          <div className="snap-center shrink-0">
            <img 
              src={song4Img} 
              alt="Play Song 4" 
              onClick={() => toggleAudio('song4')} 
              className="w-[80px] sm:w-[150px] md:w-[200px] lg:w-[223px] hover:scale-110 transition-all cursor-pointer" 
            />
          </div>
          <div className="snap-center shrink-0">
            <img 
              src={song5Img} 
              alt="Play Song 5" 
              onClick={() => toggleAudio('song5')} 
              className="w-[80px] sm:w-[150px] md:w-[200px] lg:w-[223px] hover:scale-110 transition-all cursor-pointer" 
            />
          </div>
        </div>

        {/* Audio elements */}
        <audio ref={audioRefs.song1} src="/Amine-Vacay.mp3" />
        <audio ref={audioRefs.song2} src="/Seyi-Vibez-Pressure.mp3" />
        <audio ref={audioRefs.song3} src="/Let-It-All-Work-Out.mp3" />
        <audio ref={audioRefs.song4} src="/Seyi-Vibez-Pressure.mp3" />
        <audio ref={audioRefs.song5} src="/Seyi-Vibez-Pressure.mp3" />
      </div>
    </>
  );
}

export default Player;
