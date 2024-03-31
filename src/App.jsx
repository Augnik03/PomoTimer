import React from 'react';
import './App.css';
import Timer from '../src/components/Timer';
import Tasks from '../src/components/Tasks';

const App = () => {
  return (
    <div className="App">
      <h1 className='mb-12'>Pomodoro Timer</h1>
      <Timer/>
      <Tasks />
    </div>
  );
};

export default App;
