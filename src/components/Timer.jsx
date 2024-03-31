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

  const formattedTime = moment.utc(time * 1000).format('mm:ss');

  return (
    <div>
      <h2 className="text-2xl mt-2">{formattedTime}</h2>
      <ProgressBar totalTime={25 * 60} currentTime={time} />
      <button className="timer-button" onClick={startTimer}>
        {isActive && !isPaused ? 'Pause' : 'Start'}
      </button>
      {!isActive && (
        <button className="timer-button" onClick={resetTimer}>
          Reset
        </button>
      )}
      <BreakSettings onStartShortBreak={handleStartShortBreak} onStartLongBreak={handleStartLongBreak} />
    </div>
  );
}

export default Timer;
