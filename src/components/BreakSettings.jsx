import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

function BreakSettings({ onStartShortBreak, onStartLongBreak }) {
  const [shortBreakTime, setShortBreakTime] = useState(5); // Default short break time in minutes
  const [longBreakTime, setLongBreakTime] = useState(15); // Default long break time in minutes

  const handleShortBreakChange = (event) => {
    const time = parseInt(event.target.value);
    setShortBreakTime(time);
  };

  const handleLongBreakChange = (event) => {
    const time = parseInt(event.target.value);
    setLongBreakTime(time);
  };

  return (
    <div className="mt-4">
      <div className="flex mt-2">
        <label className="lg:mr-2 lg:mt-2 mt-8 mr-2">Short Break:</label>
        <input
          type="number"
          min="1"
          value={shortBreakTime}
          onChange={handleShortBreakChange}
          className="lg:w-16 h-10 lg:mt-0 mt-6 w-8 border border-gray-300 rounded px-2 py-1 "
        />
        <span className="lg:ml-1 lg:mt-2 mt-8 ml-2">minutes</span>
        <button className="bg-green-600 text-white rounded-xl lg:px-4 lg:py-2 px-4 cursor-pointer hover:bg-green-500 lg:ml-4 ml-6" onClick={() => onStartShortBreak(shortBreakTime)}>
          <span className="hidden sm:inline">Start Short Break</span> {/* Text shown on larger screens */}
          <FaPlay className="sm:hidden ml-2" onClick={() => onStartShortBreak(shortBreakTime)} /> {/* Play icon shown on smaller screens */}
        </button>
      </div>
      <div className="flex ml-[4px] mt-6">
        <label className="lg:mr-2 lg:mt-2 mt-8 mr-2">Long Break:</label>
        <input
          type="number"
          min="1"
          value={longBreakTime}
          onChange={handleLongBreakChange}
          className="lg:w-16 h-10 lg:mt-0 mt-6 w-8 border border-gray-300 rounded px-2 py-1"
        />
        <span className="lg:ml-1 lg:mt-2 mt-8 ml-2">minutes</span>
        <button className="bg-green-600 text-white rounded-xl lg:px-4 lg:py-2 px-4 cursor-pointer hover:bg-green-500 lg:ml-4 ml-6" onClick={() => onStartLongBreak(longBreakTime)}>
          <span className="hidden sm:inline">Start Long Break</span> {/* Text shown on larger screens */}
          <FaPlay className="sm:hidden ml-2" onClick={() => onStartLongBreak(longBreakTime)} /> {/* Play icon shown on smaller screens */}
        </button>
      </div>
    </div>
  );
}

export default BreakSettings;
