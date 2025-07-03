import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Trash = () => {
  const { setNodeRef, isOver } = useDroppable({
    id: "trash",
  });
  const style = {
    width: '200px',
  height: '50px',
  margin: '2rem auto 0',
  background: isOver ? '#ff4d4d' : '#2a2a2a',
  color: '#fff',
  textAlign: 'center',
  lineHeight: '50px',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  borderRadius: '8px',
  boxShadow: isOver ? '0 0 12px red' : '0 0 5px #000',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  };

  return (
    <div ref={setNodeRef} style={style}>
      🗑️ Drop here to delete
    </div>
  );
};

export default Trash;
