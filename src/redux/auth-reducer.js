import { stopSubmit } from 'redux-form';
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
        ...action.payload
      } 
    default:
      return state;
  }
}

export const setAuthUserData = (email, login, userId, isAuth) => ({type: SET_USER_DATA, 
  payload: {email, login, userId, isAuth}})

export const authMe = () => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
      let {email, login, id} = response.data.data
      dispatch(setAuthUserData(email, login, id, true))
    }
  }

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
      dispatch(authMe())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something wrong'
      dispatch(stopSubmit('login', {_error: message}))
    }
  }

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }

export default authReducer;

