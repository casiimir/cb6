export const globalReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    case "reset":
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};
