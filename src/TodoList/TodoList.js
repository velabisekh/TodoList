import React, { useState } from "react";
import "../TodoList/Todolist.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  marginRight: "10px"
                }}
              >
                {todo.text}
              </span>
            </div>
            <button className="delete"
              style={{marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;