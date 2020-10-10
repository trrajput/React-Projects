import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App background">
      <header className="App-header">
        <h1 className="title">
          Counting down to reboot life in...
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '90vw' }}>
          <div>
            <div className="xxl_text">2</div>
            <div className="small_text">months</div>
          </div>
          <div>
            <div className="xxl_text">2</div>
            <div className="small_text">days</div>
          </div>
          <div>
            <div className="xxl_text">2</div>
            <div className="small_text">hours</div>
          </div>
          <div>
            <div className="xxl_text">2</div>
            <div className="small_text">minutes</div>
          </div>
          <div>
            <div className="xxl_text">2</div>
            <div className="small_text">seconds</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
