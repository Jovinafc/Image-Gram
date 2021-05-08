export const initialState = {
    user: null
}

export const actionTypes = {
    LOGIN: 'LOGIN' ,
    LOGOUT: 'LOGOUT',
    LOAD_USER: 'LOAD_USER'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            localStorage.setItem('user', JSON.stringify(action.user));
            return {
                ...state,
                user: JSON.parse(localStorage.getItem('user'))
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null
            }
        case actionTypes.LOAD_USER:
            return {
                ...state,
                user: JSON.parse(localStorage.getItem('user'))
            }    
        default:
            return state;
    }
};

export default reducer;