import { useState } from "react";

function computeInitialCounter() {
  console.log('calc');
  return 20;
}

function StateExample() {
  const [counter, setCounter] = useState(() => computeInitialCounter());

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  });

  const increment = () => {
    setCounter(prev => prev + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const updateTitle = () => {
    setState(prev => ({
      ...prev,
      title: "New title - " + counter
    }))
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={decrement} className="btn btn-danger">Minus</button>
      <button onClick={increment} className="btn btn-success">Plus</button>

      <button onClick={updateTitle} className="btn btn-default">Change name</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default StateExample;
