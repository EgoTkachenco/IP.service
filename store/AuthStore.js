const { makeAutoObservable } = require('mobx')
import { login, register } from '@/utils/api'
import { setToken, getToken, USER_STORE_NAME } from '@/utils/axios'

class AuthStore {
  isFetch = false
  c

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
}

export default new AuthStore()
