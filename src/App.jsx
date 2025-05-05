import React from "react";
import Counter from "./components/Counter";
import "./App.css";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default App;
