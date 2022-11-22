export const actionType = {
  SET_USER: "SET_USER",
  SET_MENU: "SET_MENU",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_MENU:
      return {
        ...state,
        menu: action.menu,
      };
    default:
      return state;
  }
};

export default reducer;
