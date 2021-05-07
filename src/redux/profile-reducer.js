import {usersAPI, profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'profile/auth/SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    {id: 1, message: 'How are you?', likesCount: 15},
    {id: 2, message: 'Its my first post', likesCount: 20},
    {id: 3, message: 'Its my second post', likesCount: 3},
    {id: 4, message: 'Its my third post', likesCount: 24},
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

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

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.fetchProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export default profileReducer;

