import { stopSubmit } from 'redux-form'
import {authAPI, securityAPI} from '../api/api'

const SET_USER_DATA = 'my_buddiez/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'my_buddiez/auth/GET_CAPTCHA_URL_SUCCESS'

// export type InitialStateType = {
//   email: string | null
//   login: string | null
//   userId: number | null
//   isAuth: boolean
//   captchaUrl: string | null
// }

let initialState = {
  email: null as string | null,
  login: null as string | null,
  userId: null as number | null,
  isAuth: false,
  captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataActionPayloadType = {
  email: string | null
  login: string | null
  userId: number | null
  isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (email: string | null, login: string | null, userId: number | null, isAuth: boolean): 
SetAuthUserDataActionType => ({type: SET_USER_DATA, 
  payload: {email, login, userId, isAuth}})

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: {captchaUrl: string}
}

export const setCaptchaUrlSuccess = (captchaUrl: string): 
GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const authMe = () => async (dispatch: any) => {
    const response = await authAPI.authMe()
    if (response.data.resultCode === 0) {
      let {email, login, id} = response.data.data
      dispatch(setAuthUserData(email, login, id, true))
    }
  }

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
    dispatch(setCaptchaUrlSuccess(captchaUrl))
  }

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }

export default authReducer

