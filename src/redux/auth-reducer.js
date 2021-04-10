import {authAPI} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  email: null,
  login: null,
  userId: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.data,
        isAuth: true
      } 
    default:
      return state;
  }
}

export const setAuthUserData = (email, login, userId) => ({type: SET_USER_DATA, data: {email, login, userId}})

export const authMe = () => {
  return (dispatch) => {
    authAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
        let {email, login, id} = response.data.data
        dispatch(setAuthUserData(email, login, id))
      }
    });
  }
}

export default authReducer;

