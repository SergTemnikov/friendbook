import {usersAPI} from '../api/api'
import { updateObjInArray } from '../utils/helpers'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, 'id', action.userId, {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, 'id', action.userId, {followed: false})
      }
    case SET_USERS:
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {...state, 
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

// Thunks
export const getUsersData = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(page))
  const data = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false)) 
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

// common method for follow/unfollow
const userFollowStatus = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, id))
  const response = await apiMethod(id)
    if (response.data.resultCode === 0) {
      dispatch(actionCreator(id))
    } 
  dispatch(toggleFollowingInProgress(false, id))
}

export const follow = (id) => async (dispatch) => {
  userFollowStatus(dispatch, id, usersAPI.followUser.bind(usersAPI), followSuccess)
}

export const unfollow = (id) => async (dispatch) => {
  userFollowStatus(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

export default usersReducer;

