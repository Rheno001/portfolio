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
        className="p-4 sm:px-6 lg:px-17 mt-[20px] md:mt-[30px] flex items-center justify-center gap-2 md:gap-4"
        style={{
          backgroundImage: `url(${albumBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src={song1Img} alt="Play Song 1" onClick={() => toggleAudio('song1')} className="w-[65px] md:w-[223px] hover:scale-110 transition-all cursor-pointer" />
        <img src={song2Img} alt="Play Song 2" onClick={() => toggleAudio('song2')} className="w-[65px] md:w-[223px] hover:scale-110 transition-all cursor-pointer" />
        <img src={song3Img} alt="Play Song 3" onClick={() => toggleAudio('song3')} className="w-[65px] md:w-[223px] hover:scale-110 transition-all cursor-pointer" />
        <img src={song4Img} alt="Play Song 4" onClick={() => toggleAudio('song4')} className="w-[65px] md:w-[223px] hover:scale-110 transition-all cursor-pointer" />
        <img src={song5Img} alt="Play Song 5" onClick={() => toggleAudio('song5')} className="w-[65px] md:w-[223px] hover:scale-110 transition-all cursor-pointer" />

        {/* Audio elements */}
        <audio ref={audioRefs.song1} src="/Amine-Vacay.mp3" />
        <audio ref={audioRefs.song2} src="/Seyi-Vibez-Pressure.mp3" />
        <audio ref={audioRefs.song3} src="/Let-It-All-Work-Out.mp3" />
        <audio ref={audioRefs.song4} src="/Seyi-Vibez-Pressure.mp3" />
        <audio ref={audioRefs.song5} src="/Seyi-Vibez-Pressure.mp3" />
      </div>

      <div className="px-4 sm:px-6 lg:px-17 flex text-left text-[#54625A] mt-4 text-[3vw] font-normal">
        Currently playing: <span className="font-semibold ml-[5px]">{getCurrentFileName()}</span><img src={headphones} className='w-[4.5vw] ml-[15px]' alt="Headphones icon" />
      </div>
      <div className='px-4 sm:px-6 lg:px-17 flex items-center justify-end text-[#54625A] mt-4 text-[3vw] font-normal'>
        <a href="https://open.spotify.com/playlist/7HpRkDGgdyu5GHF1XicAl1?si=79100b2392874846" className='hover:scale-110 transition-all'>My Favourite Playlist</a>
      </div>
    </>
  );
}

export default Player;