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
  followUser(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  },
  fetchProfile(userId) {
    console.warn('Obsolete method. Please, use profileAPI');
    return profileAPI.fetchProfile(userId)
  }
}

export const profileAPI = {
  fetchProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  }
}
