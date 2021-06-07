import React, { useState } from "react";
import InputForm from "./components/Forms";
import TodoList from "./components/List";

export interface IState {
  todos: string[];
}

const App = () => {
  const [todos, setTodos] = useState<IState["todos"]>([
    "Go For Drive",
    "Drink Water",
  ]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo's</h1>
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};
export default App;
