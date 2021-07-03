import { useState, useEffect, useRef } from "react";

function RefExample() {
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef('');

  const focus = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Ref example: render count - {renderCount.current}</h1>
      <h2>prevValue.current: {prevValue.current}</h2>
      <input 
        ref={inputRef}
        type="test" 
        onChange={event => setValue(event.target.value)} 
        value={value}
      />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default RefExample;