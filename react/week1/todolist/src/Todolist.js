import React from "react";
import TodoListItem from './Todoitem'
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
