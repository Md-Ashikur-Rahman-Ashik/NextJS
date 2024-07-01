import React, { useState } from "react";

const State = () => {
  //   const [value, setValue] = useState(0);
  const [text, setText] = useState("Hablu Programmer");
  const add = () => {
    setText("To All");
  };

  return (
    <div className="mt-2">
      {/* <h2 className="text-center font-bold text-5xl">
        This is state component from State.jsx
      </h2> */}
      <div className="flex flex-col items-center gap-4 justify-center font-bold">
        <p className="text-5xl">As Salamu Alaikum {text}</p>
        <button
          onClick={add}
          className="btn bg-black text-white p-2 rounded-xl text-3xl"
        >
          Change Greetings
        </button>
      </div>
    </div>
  );
};

export default State;
