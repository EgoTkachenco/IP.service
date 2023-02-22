const { makeAutoObservable } = require('mobx')
import { login, register, logout } from '@/utils/api'
import { setToken, getToken, USER_STORE_NAME } from '@/utils/axios'

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

  logout = async () => {
    this.user = null
  }
}

export default new AuthStore()
