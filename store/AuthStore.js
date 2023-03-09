const { makeAutoObservable } = require('mobx')
import {
  login,
  register,
  forgetPassword,
  logout,
  updateProfile,
} from '@/utils/api'
import { eraseToken, getToken, setToken, USER_STORE_NAME } from '@/utils/axios'

class AuthStore {
  isFetch = false
  user = null
  constructor() {
    makeAutoObservable(this)
  }

  signIn = (data) => {
    this.isFetch = true
    return login(data)
      .then((data) => {
        eraseToken()
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
    eraseToken()
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
    const token = getToken()
    if (token && this.user) return Promise.resolve()
    const user = localStorage.getItem(USER_STORE_NAME)
    if (token && user) {
      this.user = JSON.parse(user)
      return Promise.resolve()
    } else {
      // remove all
      localStorage.removeItem(USER_STORE_NAME)
      eraseToken()
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
    this.user = null
    localStorage.removeItem(USER_STORE_NAME)
    eraseToken()
    return logout().catch(() => {
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
