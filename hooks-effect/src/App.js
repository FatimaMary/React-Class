import React, { useEffect, useState } from 'react';
import './App.css';

const useChangetitle = title => {
  useEffect(() => {
    document.title = title
  }, [title]);
  
}

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {setCount(count + 1)};
  const decrement = () => {setCount(count - 1)};

  useChangetitle(`You Clicked ${count} times`);

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h3>{count}</h3>
      <button onClick={decrement}>-</button>
      
    </div>
  );
}

export default App;
