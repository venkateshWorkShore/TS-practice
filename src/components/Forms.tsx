import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  todos: Props["todos"];
  setTodos: React.Dispatch<React.SetStateAction<Props["todos"]>>;
}

const InputForm: React.FC<IProps> = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const handleClick = (): void => {
    setTodos([input, ...todos]);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo"
      />
      <button disabled={!input} onClick={handleClick}>
        Add
      </button>
    </>
  );
};

export default InputForm;
