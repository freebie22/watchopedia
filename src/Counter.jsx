import { useState } from "react";

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    console.log("Hello!");
    return { counter: 10, title: "Fun" };
  });

  const [titleState, setTitleState] = useState(() => {
    return {title: "Fun Counter"};
  })

  function incretmentCounter() {
    setCounterState((previousState) => {
      return { ...previousState, counter: previousState.counter + 1 };
    });
  }

  function decretmentCounter() {
    setCounterState((previousState) => {
      return { ...previousState, counter: previousState.counter - 1 };
    });
  }

  return (
    <div className="col-12 col-md-2 offset-md-5 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">
        {titleState.title}
      </span>
      <div className="row col-6 offset-md-3 text-center">
        <button onClick={incretmentCounter} className="btn btn-success m-1">
          +1
        </button>
        <button onClick={decretmentCounter} className="btn btn-danger m-1">
          -1
        </button>
      </div>
      <span className="h4 offset-md-1">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};

export default Counter;
