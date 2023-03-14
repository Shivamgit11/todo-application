import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todoItem";

const ShowTodo = (props) => {
  const AllTodos = useSelector((state) => state.todo.todos);
  console.log(AllTodos)
 if(AllTodos.length === 0) {
    return <h1>please add your todos</h1>
 }
  return (
    <ul>
      {AllTodos.map((item) => (
        <TodoItem
          item={{
            id: item.id,
            todo: item.todo,
          }}
        />
      ))}
    </ul>
  );
};

export default ShowTodo;
