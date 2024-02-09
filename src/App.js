import { useState, useRef } from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = e => {
    e.preventDefault();
    setResult(result => {
      return result + Number(inputRef.current.value)
    });
  };

  const minus = e => {
    e.preventDefault();
    setResult(result => {
      return result - Number(inputRef.current.value)
    });
  };

  const times = e => {
    e.preventDefault();
    setResult(result => {
      return result * Number(inputRef.current.value)
    });
  };

  const divide = e => {
    e.preventDefault();
    setResult(result => {
      return result / Number(inputRef.current.value)
    });
  };

  const resetInput = e => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = e => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <p ref={resultRef}>
        {result}
      </p>
      <form>
        <input pattern="[0-9]" ref={inputRef} type="number" placeholder="Type a number" />
        <div>
          <button onClick={plus}>Add</button>
          <button onClick={minus}>Subtract</button>
          <button onClick={times}>Multiply</button>
          <button onClick={divide}>Divide</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
