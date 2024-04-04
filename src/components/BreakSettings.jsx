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
    <div className="mt-4 bg-white rounded-lg p-6 shadow-md border-2 border-green-500">
      
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1 text-green-500">Short Break</label>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={shortBreakTime}
              onChange={handleShortBreakChange}
              className="w-20 border border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none mr-2 bg-gray-100"
            />
            <span className="text-gray-600">minutes</span>
          </div>
        </div>
        <button
          className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600 focus:outline-none shadow-md"
          onClick={() => onStartShortBreak(shortBreakTime)}
        >
          <FaPlay className="text-2xl" />
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-1 text-green-500">Long Break</label>
          <div className="flex items-center">
            <input
              type="number"
              min="1"
              value={longBreakTime}
              onChange={handleLongBreakChange}
              className="w-20 border border-gray-300 rounded-md px-3 py-2 text-lg focus:outline-none mr-2 bg-gray-100"
            />
            <span className="text-gray-600">minutes</span>
          </div>
        </div>
        <button
          className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-600 focus:outline-none shadow-md"
          onClick={() => onStartLongBreak(longBreakTime)}
        >
          <FaPlay className="text-2xl" />
        </button>
      </div>

     
      <div className="flex justify-center mt-6">
        <div className="w-20 h-2 bg-green-500"></div>
      </div>
    </div>
  );
}

export default BreakSettings;
