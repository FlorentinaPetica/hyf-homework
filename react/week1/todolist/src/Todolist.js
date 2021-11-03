import React from "react";

const TodoListItems = (props) => {
  const {description, deadline} = props.todo
  return (
    <li>
      <h1>
        {description} : {deadline}
      </h1>
    </li>
  );
};

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItems todo={todo} />;
      })}
    </ul>
  );
};

const todos = [
  { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];

export default TodoList;
