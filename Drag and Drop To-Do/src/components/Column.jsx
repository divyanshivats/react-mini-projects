import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

const Column = ({ columnName, columnTasks }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: columnName,
  });

  const style = {
    flex: "1 1 250px", // allow responsive shrinking
    minWidth: "250px",
    maxWidth: '100%',
    minHeight: "300px",
    padding: "1rem",
    margin: "0.5rem",
    borderRadius: "12px",
    border: isOver ? "2px solid #00eaff" : "1px solid #333",
    background: isOver ? "#1e1e1e" : "#1a1a1a",
    boxShadow: isOver ? "0 0 10px #00eaff" : "0 0 4px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h3>{columnName.toUpperCase()}</h3>
      {columnTasks.map((task, idx) => (
        <TaskCard
          key={`${columnName}-${idx}`}
          task={task}
          id={`${columnName}-${idx}`}
        />
      ))}
    </div>
  );
};

export default Column;
