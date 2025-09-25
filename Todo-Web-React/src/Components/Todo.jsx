import React, { useState, useEffect, useContext } from "react";
import { RegisterUser } from "../Context/UserContext";

function Todo() {
  const { user } = useContext(RegisterUser); // current logged-in user
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  //
  const storageKey = user.email;

  // Load tasks when component mounts or user changes
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem(storageKey)) || [];
    setTasks(savedTasks);
  }, [storageKey]);

  const addTask = (e) => {
    e.preventDefault();

    if (!todo.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const newTasks = [...tasks, todo];
    setTasks(newTasks);
    localStorage.setItem(storageKey, JSON.stringify(newTasks));
    setTodo(""); // clear input
  };

  return (
    <div
      className="todoContainer"
      style={{
        width: "90vw",
        height: "70vh",
        margin: "20px 50px",
        border: "1px solid black",
        display: "block",
      }}
    >
      <h2 style={{ margin: "auto 30%" }}>Add Tasks Here</h2>
      <form style={{ margin: "10px 30%" }} onSubmit={addTask}>
        <input
          type="text"
          placeholder="add item here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div
        className="todo"
        style={{
          margin: "auto",
          border: "1px solid",
          width: "80%",
          height: "80%",
        }}
      >
        <ul
          className="todoList"
          style={{
            border: "1px solid",
            width: "90%",
            height: "90%",
            margin: "10px auto",
          }}
        >
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
