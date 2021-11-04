import React from "react";
import TodoListItem from './TodoListItem'
import todos from './todos.json'

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
