const initialState = {
  isLogin: false,
  userName: null,
  userRole: null,
  userId: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_USER":
      return {
        ...state,
        isLogin: true,
        userName: payload.name,
        userRole: payload.role,
        userId: payload.userId,
      };
    case "REMOVE_USER":
      return {
        ...state,
        isLogin: false,
        userName: null,
        userRole: null,
        userId: null,
      };

    default:
      return state;
  }
};
