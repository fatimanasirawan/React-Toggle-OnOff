import { useState } from "react";
import "./App.css";
import { toggleBackground } from "./helpers/helper";

function App() {
  const [isDark, setIsDark] = useState(false);
      //current value, changes the value
  return (
    
    <div className={isDark ? "container dark" : "container"}>
      <div
        className={isDark ? "toggle active" : "toggle"}
        onClick={() => toggleBackground(isDark, setIsDark)}
        //event
      >
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default App;