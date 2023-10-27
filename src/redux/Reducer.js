// reducer.js
const initialState = {
    tasks: [],
    filterDone: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.task],
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === action.taskId) {
              return { ...task, isDone: !task.isDone };
            }
            return task;
          }),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  