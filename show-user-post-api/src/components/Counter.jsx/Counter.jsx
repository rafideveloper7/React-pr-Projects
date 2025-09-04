import React, { useState } from "react";
import "./counter.css";

function Counter({ changePage }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Total : {count}</h1>
      <div className="btns">
        <button className="increase" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="decrease" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
