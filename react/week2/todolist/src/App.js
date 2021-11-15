import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import AddTodo from "./components/AddTodo";

const listOfTodos = [
  { id: 1, description: "Get out of bed" },
  { id: 2, description: "Brush teeth" },
  { id: 3, description: "Eat breakfast" },
];

function App() {
  const [todos, setTodo] = useState(listOfTodos);
  let newTodos = [...todos];

  const addTodo = () => {
    const newTodo = { id: todos.length + 1, description: "Random text" };
    newTodos = todos.concat(newTodo);
    setTodo(newTodos);
  };

  const deleteTodo = (index) => {
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Your todo list!</h1>
        </header>
        <Timer />
      </div>

      <div>
        <AddTodo addTodo={addTodo} />
      </div>

      <div className="TodoList">
        <TodoList todos={todos} key={todos.id} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
