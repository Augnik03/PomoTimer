import React from 'react';
import './App.css';
import Timer from '../src/components/Timer';
import Tasks from '../src/components/Tasks';
import SessionCounter from '../src/components/SessionCounter';

const App = () => {
  return (
    <div className="App">
      {/* <SessionCounter /> */}
      <Timer/>
      
      <Tasks />
     
    </div>
  );
};

export default App;
