const { makeAutoObservable } = require('mobx')
import {
  login,
  register,
  forgetPassword,
  logout,
  updateProfile,
} from '@/utils/api'
import { eraseToken, setToken, USER_STORE_NAME } from '@/utils/axios'

class AuthStore {
  isFetch = false
  constructor() {
    makeAutoObservable(this)
  }

  signIn = (data) => {
    this.isFetch = true
    return login(data)
      .then((data) => {
        setToken(data.token)
        delete data.token
        localStorage.setItem(USER_STORE_NAME, JSON.stringify(data))
        this.user = data
      })
      .finally(() => {
        this.isFetch = false
      })
  }

  signUp = (data) => {
    this.isFetch = true
    return register(data)
      .then((data) => {
        setToken(data.token)
        delete data.token
        localStorage.setItem(USER_STORE_NAME, JSON.stringify(data))
        this.user = data
      })
      .finally(() => {
        this.isFetch = false
      })
  }

  relog = async () => {
    if (this.user) return Promise.resolve()
    const user = localStorage.getItem(USER_STORE_NAME)
    if (user) {
      this.user = JSON.parse(user)
      return Promise.resolve()
    }
    return Promise.reject()
  }

  forgetPassword = (data) => {
    this.isFetch = true
    return forgetPassword(data).finally(() => {
      this.isFetch = false
    })
  }

  logout = () => {
    return logout()
      .then(() => {
        this.user = null
        localStorage.removeItem(USER_STORE_NAME)
        eraseToken()
      })
      .catch(() => {
        console.log('error')
      })
  }

  updateProfile = (data) => {
    this.isFetch = true
    return updateProfile(data)
      .then((user) => {
        this.user = user
        localStorage.setItem(USER_STORE_NAME, JSON.stringify(user))
      })
      .finally(() => {
        this.isFetch = false
      })
  }
}

export default new AuthStore()
