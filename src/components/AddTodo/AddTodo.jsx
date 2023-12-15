import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../functions/todo/todoSlice";
import "./addTodo.css";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Add Your Item.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="addBtn">
          Add
        </button>
      </form>
    </>
  );
}

export default AddTodo;
