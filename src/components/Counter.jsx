import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);

  return (
    <div className="counter-container">
      <h2 className="counter-value">{count}</h2>
    </div>
  );
};

export default Counter;
