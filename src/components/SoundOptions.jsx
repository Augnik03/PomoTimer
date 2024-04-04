import React from 'react';
import { FaTree, FaBird, FaWater, FaWind } from 'react-icons/fa';

const SoundOptions = () => {
  const playSound = (soundUrl) => {
    new Audio(soundUrl).play();
  };

  return (
    <div className="flex justify-between mt-8">
      <button onClick={() => playSound('https://www.soundjay.com/nature/forest-1.mp3')}>
        <FaTree className="mr-2" />
        Forest Ambience
      </button>
      <button onClick={() => playSound('https://www.soundjay.com/birds/bird-chirp-1.mp3')}>
        <FaBird className="mr-2" />
        Bird Chirping
      </button>
      <button onClick={() => playSound('https://www.soundjay.com/nature/stream-1.mp3')}>
        <FaWater className="mr-2" />
        Water Stream
      </button>
      <button onClick={() => playSound('https://www.soundjay.com/nature/wind-1.mp3')}>
        <FaWind className="mr-2" />
        Wind Rustling
      </button>
    </div>
  );
};

export default SoundOptions;
