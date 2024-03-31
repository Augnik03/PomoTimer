import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ totalTime, currentTime }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const remainingTimePercentage = (currentTime / totalTime) * 100;
      setProgress(100 - remainingTimePercentage);
    };

    calculateProgress();

    const interval = setInterval(() => {
      calculateProgress();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime, totalTime]);

  useEffect(() => {
    setProgress(0); // Reset progress when totalTime changes
  }, [totalTime]);

  return (
    <div style={{ width: '100px', height: '100px' }}>
      <CircularProgressbar
        className='lg:ml-40 mt-6 ml-24'
        value={progress}
        text={`${Math.round(progress)}%`}
        strokeWidth={10}
        styles={{
          root: { width: '100%', height: '100%' },
          path: { stroke: '#3b82f6' }, // Adjust color as needed
          text: { fill: '#3b82f6', fontSize: '20px' }, // Adjust color and font size as needed
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  totalTime: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default ProgressBar;
