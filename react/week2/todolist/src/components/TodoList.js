import React from "react";
import TodoListItem from './TodoListItem';

const TodoList = (props) => {

  if (props.todos.length === 0) {
    return (<h1>No items</h1>)
  }

  return (
    <div>
      <ul>    
          {props.todos.map((todo, index) => {
            return (
              <div className="TodoListItem">
                <TodoListItem todo={todo}  
                              key={todo.id} />
                <button onClick={props.deleteTodo}>Delete</button>
              </div>
            )
          }
          )}
      </ul>
    </div>
  )
};

export default TodoList;
