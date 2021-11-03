import React from "react";

const TodoListItem = (props) => {
  const {description, deadline} = props.todo
  return (
    <li>
      <h1>
        {description} by: {deadline}
      </h1>
    </li>
  );
};

export default TodoListItem;