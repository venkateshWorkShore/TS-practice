import React, { useState } from "react";
import { IState as IProps } from "../App";

const TodoList: React.FC<IProps> = ({ todos }) => {
  console.log(todos);

  const renderTodos = (): JSX.Element[] => {
    return todos.map((todo) => (
      <ul>
        <li>{todo} </li>
      </ul>
    ));
  };

  return (
    <>
      <h3>Todo's List</h3>
      {renderTodos()}
    </>
  );
};
export default TodoList;
