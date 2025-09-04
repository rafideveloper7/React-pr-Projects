import React, { useState } from "react";
import "./counter.css";

function Counter({ changePage }) {
  const [count, setCount] = useState(0);

  return (
    <div className="parent-counter">
      <div className="div1">
        <h2>Simple Counter</h2>
        <p>Count here easily</p>
      </div>
      <div className="div2">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      <div className="div3">
        <h2>Total :</h2>
        <h2>{count}</h2>
      </div>
    </div>
  );
}

export default Counter;