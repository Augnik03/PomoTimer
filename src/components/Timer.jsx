import React, { useState, useEffect } from 'react';
import moment from 'moment';
import BreakSettings from './BreakSettings';
import ProgressBar from './ProgressBar';

function Timer() {
  const [time, setTime] = useState(25 * 60); // Default timer duration in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive && !isPaused) {
      intervalId = setInterval(() => {
        if (time <= 0) {
          clearInterval(intervalId);
          setIsActive(false);
          playDefaultNotificationSound();
        } else {
          setTime((prevTime) => prevTime - 1);
          document.title = formatTimeToTitle(time);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, isPaused, time]);

  const startTimer = () => {
    setIsActive(!isActive);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(25 * 60); // Reset timer duration to default (25 minutes)
    document.title = "Pomodoro Timer"; // Reset title
  };

  const playDefaultNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
      console.error('An error occurred while playing the default sound:', error);
    }
  };

  const handleStartShortBreak = (time) => {
    setTime(time * 60); // Set timer duration to short break time
    startTimer(); // Start the timer
  };

  const handleStartLongBreak = (time) => {
    setTime(time * 60); // Set timer duration to long break time
    startTimer(); // Start the timer
  };

  const formatTimeToTitle = (timeInSeconds) => {
    const formattedTime = moment.utc(timeInSeconds * 1000).format('mm:ss');
    return `(${formattedTime}) Pomodoro Timer`;
  };

  const formattedTime = moment.utc(time * 1000).format('mm:ss');

  return (
    <div className="container mx-auto mt-8 p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-3xl font-semibold text-center mb-4">Pomodoro Timer</h2>
      <div className="flex justify-center items-center mb-4">
        <h3 className="text-4xl font-bold mr-2">{formattedTime}</h3>
        <button className={`timer-button ${isActive && !isPaused ? 'bg-red-500' : 'bg-green-500'}`} onClick={isActive && !isPaused ? pauseTimer : startTimer}>
          {isActive && !isPaused ? 'Pause' : 'Start'}
        </button>
        {!isActive && (
          <button className="timer-button bg-gray-500 ml-2" onClick={resetTimer}>
            Reset
          </button>
        )}
      </div>
      <ProgressBar totalTime={25 * 60} currentTime={time} />
      <BreakSettings onStartShortBreak={handleStartShortBreak} onStartLongBreak={handleStartLongBreak} />
    </div>
  );
}

export default Timer;
