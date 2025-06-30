import React from "react";
import { useState } from "react";
import "./Todo.css";
import useToDoStorage from "./useToDoStorage";
const ToDo = () => {
  const [values, setValue] = useState("");
  const [tasks, setTask] = useToDoStorage("tasks");
  

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const handleTask = () => {
    if (!values) return;
    setTask((prevTask) => [...prevTask, { text: values, completed: false }]);
    // console.log(tasks);
    setValue("");
  };

  const handleDelete = (idx) => {
    setTask((prevTask) => prevTask.filter((task, id) => id !== idx));
  };

  const toggleComplete = (idx) => {
    setTask((prev) =>
      prev.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <h3 className="todo-title">📝 Todo List</h3>
      <div className="input-group">
        <input
          type="text"
          value={values}
          onChange={handleValue}
          className="todo-input"
          placeholder="Enter your task..."
        />
        <button
          onClick={handleTask}
          disabled={!values}
          className="todo-add-btn"
        >
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks?.map((task, idx) => (
          <li key={idx} className="task-item">
            <input
              type="checkbox"
              checked={task.completed || false}
              onChange={() => toggleComplete(idx)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => handleDelete(idx)}
              className="delete-btn"
              title="Remove task"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && tasks.every((task) => task.completed) && (
        <p>Wohoo! you finished all the tasks.</p>
      )}
    </div>
  );
};

export default ToDo;
