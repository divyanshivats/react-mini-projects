import React from 'react'
import { useDraggable } from '@dnd-kit/core'

const TaskCard = ({task, id}) => {
     const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
  });
  const style = {
  transform: transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : undefined,
  border: '1px solid #444',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '8px',
  background: '#222',
  color: '#eee',
  cursor: 'grab',
  transition: 'all 0.2s ease',
  boxShadow: '0 0 6px rgba(0, 234, 255, 0.1)',
};

  console.log('TaskCard ID:', id);
console.log('useDraggable is called');


  return (
    <div 
    ref={setNodeRef}
    style={style}
      {...listeners}
      {...attributes}
    >
        {task.text}
      
    </div>
  )
}

export default TaskCard
