import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>
            Your todo list!
          </h1>
        </header>
      </div>
      <div className="TodoList">
        < TodoList />
      </div>
    </div>
  );
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />