import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">My Todos</h3>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn btn-danger btn-sm"
            >
              <i className="bi bi-trash"></i> {/* Bootstrap trash icon */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
