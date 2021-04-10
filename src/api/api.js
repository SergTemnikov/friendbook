import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  Headers: {
    'API-KEY': '8d11dce2-fee2-4ed0-90f2-c493af9d9bb1'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
  }
}

export const getProfile = (userId) => {
  return instance.get(`profile/${userId}`)
}