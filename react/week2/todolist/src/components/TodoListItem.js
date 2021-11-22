import React, {useState} from "react";

const TodoListItem = (props) => {
  const {description} = props.todo
  const [value, setValue] = useState(false)

  return (
    <li style={{textDecoration : value ? "line-through" : "none"}}>{description}
    <input type='checkbox'
           checked={value}
           onChange={(e)=> setValue(e.target.checked)}
    ></input>
    </li>
  );
};

export default TodoListItem;