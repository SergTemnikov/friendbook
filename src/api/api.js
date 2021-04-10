import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '8d11dce2-fee2-4ed0-90f2-c493af9d9bb1'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
  },
  followUser(id) {
    return instance.post(`follow/${id}`)
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
  },
  fetchProfile(userId) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }
}
