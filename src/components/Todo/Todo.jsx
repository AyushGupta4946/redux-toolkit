import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../functions/todo/todoSlice";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editableTodos, setEditableTodos] = useState({});

  const editTodo = (todoId) => {
    dispatch(updateTodo({ id: todoId, newText: editableTodos[todoId] }));
    setEditableTodos((prev) => ({ ...prev, [todoId]: false }));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={
                editableTodos[todo.id] ? editableTodos[todo.id] : todo.text
              }
              className={editableTodos[todo.id] ? "editTodo" : "todoItem"}
              readOnly={!editableTodos[todo.id]}
              onChange={(e) =>
                setEditableTodos((prev) => ({
                  ...prev,
                  [todo.id]: e.target.value,
                }))
              }
            />
            <div>
              <button
                className="btn"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <MdDelete />
              </button>
              <button
                className="btn"
                onClick={() => {
                  if (editableTodos[todo.id]) {
                    editTodo(todo.id);
                  } else {
                    setEditableTodos((prev) => ({
                      ...prev,
                      [todo.id]: todo.text,
                    }));
                  }
                }}
              >
                {editableTodos[todo.id] ? "📁" : "✏️"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
