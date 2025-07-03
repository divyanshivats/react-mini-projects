import React, { useState } from "react";
import Task from "./Task";

const Todo = () => {
  const [value, setValue] = useState();
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const handleTask = () => {
    if (!value) return;
    setTasks((prev) => {
      return { ...prev, todo: [...prev.todo, { text: value }] };
    });
    setValue("");
  };
  console.log(tasks);

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#121212",
    },
    container: {
      width: "100%",
      maxWidth: "1000px",
      padding: "2rem 1rem",
      textAlign: "center",
    },
    heading: {
      color: "#00eaff",
      marginBottom: "2rem",
      fontSize: "2rem",
    },
    inputWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "1rem",
      flexWrap: "wrap", // ensures wrapping on smaller screens
      marginBottom: "2rem",
    },
    input: {
      padding: "0.75rem 1rem",
      width: "300px",
      borderRadius: "8px",
      border: "1px solid #444",
      backgroundColor: "#1a1a1a",
      color: "#e0e0e0",
      fontSize: "1rem",
      outline: "none",
    },
    button: {
      padding: "0.75rem 1.2rem",
      border: "none",
      borderRadius: "8px",
      background: "linear-gradient(to right, #00eaff, #007bff)",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>📝 My Kanban Board</h1>

        <div style={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Enter your task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleTask} style={styles.button}>
            Add Task
          </button>
        </div>

        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
};

export default Todo;
