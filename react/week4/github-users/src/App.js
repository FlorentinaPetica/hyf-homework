import "./App.css";
import React from "react";
import InputSearch from "./components/InputSearch";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <InputSearch />
      <UserList />
    </div>
  );
}

export default App;
