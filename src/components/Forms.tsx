import React, { useState } from "react";
import { IState as Props } from "../App";
import { Button, InputBar } from "../Global.styled";

interface IProps {
  todos: Props["todos"];
  setTodos: React.Dispatch<React.SetStateAction<Props["todos"]>>;
}

const InputForm: React.FC<IProps> = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const handleClick = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement | MouseEvent>
  ): void => {
    e.preventDefault();
    setTodos([input, ...todos]);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <InputBar
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
        />
        <Button disabled={!input} onClick={handleClick}>
          Add
        </Button>
      </form>
      {todos.length >= 1 && (
        <Button onClick={() => setTodos([])}>Clear ALL</Button>
      )}
    </>
  );
};

export default InputForm;
