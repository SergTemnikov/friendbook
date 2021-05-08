import { stopSubmit } from 'redux-form'
import {authAPI, securityAPI} from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
  email: null,
  login: null,
  userId: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: 
    case GET_CAPTCHA_URL_SUCCESS: 
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const setAuthUserData = (email, login, userId, isAuth) => ({type: SET_USER_DATA, 
  payload: {email, login, userId, isAuth}})

export const setCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const authMe = () => async (dispatch) => {
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
      let {email, login, id} = response.data.data
      dispatch(setAuthUserData(email, login, id, true))
    }
  }

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
      dispatch(authMe())
    }  else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something wrong'
      dispatch(stopSubmit('login', {_error: message}))
    }
  }

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
    dispatch(setCaptchaUrlSuccess(captchaUrl))
  }

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }

export default authReducer

