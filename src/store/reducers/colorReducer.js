const initialState = { red: 0, green: 0, blue: 0 };

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RED":
      console.log(action.payload);

      let color = { ...state, red: state.red + action.payload };
      console.log(color);
      return color;

    case "ADD_BLUE":
      return { ...state, blue: state.blue + action.payload };

    case "ADD_GREEN":
      return { ...state, green: state.green + action.payload };

    default:
      return state;
  }
};
