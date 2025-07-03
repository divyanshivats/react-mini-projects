import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";

import { useDroppable, useDraggable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import Column from "./Column";
import Trash from "./Trash";

const Task = ({ tasks, setTasks }) => {
  console.log("received", tasks);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return; // if not dropped in any col

    const fromColumn = active.id.split("-")[0];
    const taskIndex = parseInt(active.id.split("-")[1]);
    const toColumn = over.id;

    if (fromColumn === toColumn) return;

    const taskToMove = tasks[fromColumn][taskIndex];

    if (toColumn === "trash") {
      setTasks((prev) => {
        const newFromColumn = [...prev[fromColumn]];
        newFromColumn.splice(taskIndex, 1);

        return {
          ...prev,
          [fromColumn]: newFromColumn,
        };
      });
      return;
    }

    setTasks((prev) => {
      const newFromColumn = [...prev[fromColumn]];
      newFromColumn.splice(taskIndex, 1);

      const newToColumn = [...prev[toColumn], taskToMove];

      return {
        ...prev,
        [fromColumn]: newFromColumn,
        [toColumn]: newToColumn,
      };
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div
        style={{
          display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    padding: '0 1rem',
        }}
      >
        {Object.entries(tasks).map(([columnName, columnTasks]) => {
          return (
            <Column
              key={columnName}
              columnName={columnName}
              columnTasks={columnTasks}
            />
          );
        })}
      </div>

      <Trash />
    </DndContext>
  );
};

export default Task;
