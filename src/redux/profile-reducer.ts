import {usersAPI, profileAPI} from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'profile/posts/ADD-POST'
const SET_USER_PROFILE = 'profile/auth/SET_USER_PROFILE'
const SET_STATUS = 'profile/auth/SET_STATUS'
const DELETE_POST = 'profile/posts/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/auth/SAVE_PHOTO_SUCCESS'

type PostType = {
  id: number
  message: string
  likesCount: number
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
type PhotosType = {
  small: string
  large: string
}
type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

let initialState = {
  posts: [
    {id: 1, message: 'Hello, World!', likesCount: 14}] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case DELETE_POST: {
      return {
        ...state, posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state, profile: {...state.profile, photos: action.photos}
      }
    }
    default:
      return state;
  }
}

type AddPostCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
type DeletePostActionCreator = {
  type: typeof DELETE_POST
  postId: number
}
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const addPostCreator = (newPostText: string): AddPostCreatorActionType => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})
export const deletePost = (postId: number): DeletePostActionCreator => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.fetchProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId))
  } else {
    const message = response.data.messages[0]
    dispatch(stopSubmit('editProfile', {_error: message}))
    return Promise.reject(message)
  }
}

export default profileReducer;

