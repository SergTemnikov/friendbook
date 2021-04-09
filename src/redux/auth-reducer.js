const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    email: null,
    login: null,
    userId: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            } 
        default:
            return state;
    }
}

export const setAuthUserData = (email, login, userId) => ({type: SET_USER_DATA, data: {email, login, userId}})

export default authReducer;

