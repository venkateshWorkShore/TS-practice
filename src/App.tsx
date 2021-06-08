import React, { useState } from "react";
import InputForm from "./components/Forms";
import TodoList from "./components/List";
import { Wrapper } from "./Global.styled";

export interface IState {
  todos: string[];
}

const App = () => {
  const [todos, setTodos] = useState<IState["todos"]>([
    "Go For Drive",
    "Drink Water",
  ]);

  return (
    <Wrapper>
      <h1>Todo's</h1>
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </Wrapper>
  );
};
export default App;
