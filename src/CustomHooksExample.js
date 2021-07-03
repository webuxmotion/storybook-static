import { useEffect, useState } from "react";

function useLogger(value) {

  useEffect(() => {
    console.log('value changed:', value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    setValue(event.target.value);
  }

  const clear = () => setValue('');
  
  return {
    bind: { value, onChange },
    value,
    clear
  }
}

function CustomHooksExample() {
  const input = useInput('');
  const lastName = useInput('');

  useLogger(input.value);

  return (
    <div className="container pt-3">
      <input type="text" {...input.bind} />
      <button onClick={() => input.clear()}>Clear input</button>

      <input type="text" {...lastName.bind} />
      <button onClick={() => lastName.clear()}>Clear lastname</button>
      
      <h1>{input.value} {lastName.value}</h1>
    </div>
  );
}

export default CustomHooksExample;