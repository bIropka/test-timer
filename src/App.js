import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [seconds, setSeconds] = useState(0)
  const [isWorking, setIsWorking] = useState(false)
  let timer;

  useEffect(() => {
    if (isWorking) {
      timer = setTimeout(() => {
        setSeconds(seconds + 1)
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    }
  })

  const start = () => {
    setIsWorking(true);
  }

  const pause = () => {
    clearTimeout(timer);
    setIsWorking(false);
  }

  const reset = () => {
    pause();
    setSeconds(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{Math.floor(seconds / 60)} : {seconds % 60}</div>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
