// useTodoStorage.js
import { useState, useEffect } from 'react';

const useToDoStorage = (key, initialValue = [{}]) => {
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.error("Failed to parse localStorage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }, [key, tasks]);

  return [tasks, setTasks];
};

export default useToDoStorage;
