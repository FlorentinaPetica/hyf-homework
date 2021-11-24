import "./App.css";
import React from "react";
import UserProvider from "./UserContext";
import InputSearch from "./Components/InputSearch";
import UserList from "./Components/UserList";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <InputSearch />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
