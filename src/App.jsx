import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <div className="container">
        <h1>Redux-Toolkit</h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;
