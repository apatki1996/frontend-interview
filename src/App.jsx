import { useState } from "react";
import "./App.css";

function App() {
  const [clicks, setClicks] = useState([]);
  const [stack, setStack] = useState([]);

  function handleClick({pageX, pageY}) {
    setClicks([...clicks, { pageX, pageY }]);
  }

  function handleUndo() {
    const lastClick = clicks.pop();
    setStack([...stack, lastClick]);
    setClicks([...clicks]);
  }

  function handleRedo() {
    const lastClick = stack.pop();
    setClicks([...clicks, lastClick]);
    setStack([...stack]);
  }

  function handleClear() {
    setClicks([]);
    setStack([]);
  }

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleClear}>Clear</button>
      <div className="full" onClick={handleClick}>
        {clicks.map((click, index) => (
          <div
            key={index}
            className="click"
            style={{ left: click.pageX, top: click.pageY }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
