export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "CREATE_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
  }
};

// Per esercizio avanzato!! (04/04/2023)
// dispatch({type: 'CREATE_NEW_TASK', payload: {
//   "id": 31,
//   "todo": "Do something nice for someone I care about",
//   "completed": true,
//   "userId": 26
// }})
