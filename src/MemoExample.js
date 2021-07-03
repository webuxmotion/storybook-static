import { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  console.log('complexCompute function run');
  let i = 0;

  while(i < 1_000_000 * 100) {
    i++;
  };

  return num;
}

function MemoExample() {
  const [number, setNumber] = useState(99);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'blue' : 'black'
  }), [colored]);

  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log('styles changed!');
  }, [styles]);

  return (
    <div>
      {computed}
      Memo Memo
      <div style={styles}>
        {colored.toString()}
      </div>
      <button onClick={() => setNumber(prev => prev - 1)}>Minus</button>
      <button onClick={() => setColored(prev => !prev)}>Change colored</button>
    </div>
  );
}

export default MemoExample;