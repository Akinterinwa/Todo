// actions.js
export const addTask = (task) => ({
    type: 'ADD_TASK',
    task,
  });
  
  export const toggleTask = (taskId) => ({
    type: 'TOGGLE_TASK',
    taskId,
  });
  