import React from "react";
import "./App.css";

import TimerLogic from "./TimerLogic";
function App() {
  const date = "1 Jan 2021";
  return (
    <div className="App background">
      <header className="App-header">
        <TimerLogic date={date} />;
        <h1 className="title">Counting down to reboot life in...</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
          }}
        >
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
