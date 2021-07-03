import { useState, useCallback } from "react";

import ItemsList from "./ItemsList";

function CallbackExample() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'blue' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    console.log('generateItems');

    return new Array(count).fill('').map((_, idx) => `Element ${idx + 1}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Counter: {count}</h1>
      
      <button onClick={() => setCount(prev => prev + 1)}>Add count</button>
      <button onClick={() => setColored(prev => !prev)}>Change colored</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default CallbackExample;