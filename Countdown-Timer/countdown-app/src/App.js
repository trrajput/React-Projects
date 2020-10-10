import React from "react";
import "./App.css";

import TimerLogic from "./TimerLogic";
function App() {
  const date = "1 Jan 2021";
  return (
    <div className="App background">
      <header className="App-header">
        <h1 className="title">Counting down to reboot life in...</h1>
        <TimerLogic date={date} />
      </header>
    </div>
  );
}
export default App;
