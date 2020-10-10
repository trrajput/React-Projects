import React from "react";

import "./App.css";
import TimerLogic from "./TimerLogic";
function App() {
  const date = "1 Jan 2021";
  return (
    <div className="App">
      {/* Make desing in TimerLogic */}
      <TimerLogic date={date} />;
    </div>
  );
}
export default App;
