export const initialState = {
  user: null,
  isAuthenticated: false,
  message: '',
  alertType: '',
  show: false,
};

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOAD_USER: 'LOAD_USER',
  ALERT_SET: 'ALERT_SET',
  ALERT_REMOVE: 'ALERT_REMOVE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: JSON.parse(localStorage.getItem('user')),
        isAuthenticated: true,
      };
    case actionTypes.LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case actionTypes.LOAD_USER:
      return {
        ...state,
        user: JSON.parse(localStorage.getItem('user')),
      };
    case actionTypes.ALERT_SET:
      return {
        ...state,
        show: true,
        message: action.message,
        alertType: action.alertType,
      };
    case actionTypes.ALERT_REMOVE:
      return {
        ...state,
        show: false,
        message: '',
        alertType: '',
      };
    default:
      return state;
  }
};

export default reducer;
