import React, { useState } from 'react';

const SessionCounter = () => {
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  const handleCompleteSession = () => {
    setSessionsCompleted(prevSessions => prevSessions + 1);
  };

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-10 ml-40">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Sessions Completed</h2>
        <div className="flex items-center">
          <span className="text-4xl font-bold mr-2">{sessionsCompleted}</span>
          <button
            className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-500 transition-colors duration-300"
            onClick={handleCompleteSession}
          >
            Completed Sessions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionCounter;
