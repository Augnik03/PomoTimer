import React from 'react';
import './App.css';
import Timer from '../src/components/Timer';
import Tasks from '../src/components/Tasks';
import SessionCounter from '../src/components/SessionCounter';

const App = () => {
  return (

    <div className='flex'>
      <div className="w-1/4 p-4">
          <SessionCounter />
        </div>
      <div className="App">
        
        <Timer />

        <Tasks />
        
      </div>
    </div>
  );
};

export default App;
