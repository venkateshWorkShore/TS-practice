import React, { useState } from "react";
import { IState as IProps } from "../App";
import { TodoItem } from "../Global.styled";

const TodoList: React.FC<IProps> = ({ todos }) => {
  console.log(todos);

  const renderTodos = (): JSX.Element[] => {
    return todos?.map((todo) => (
      <TodoItem>
        {">>"} &nbsp; {todo}
      </TodoItem>
    ));
  };

  return (
    <>
      <h2>Todo's List</h2>
      {renderTodos()}
    </>
  );
};
export default TodoList;
