const { makeAutoObservable, computed } = require('mobx')
import {
  login,
  register,
  forgetPassword,
  resetPassword,
  logout,
  updateProfile,
  getProfile,
  skipOnboarding,
} from '@/utils/api'
import { eraseToken, getToken, setToken, USER_STORE_NAME } from '@/utils/axios'

class AuthStore {
  isFetch = false
  user = null
  forgetIdentifier = ''
  constructor() {
    makeAutoObservable(this, {
      showOnboarding: computed,
    })
  }

  signIn = (data) => {
    this.isFetch = true
    return login(data)
      .then((data) => {
        eraseToken()
        setToken(data.token)
        return data
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
      })
      .finally(() => {
        this.isFetch = false
      })
  }

  relog = async () => {
    const token = getToken()
    if (!token) return Promise.reject()

    if (token && !this.user) await this.getProfile()

    if (token && this.user) return Promise.resolve()
    // else eraseToken()

    return Promise.reject()
  }

  forgetPassword = (data) => {
    this.isFetch = true
    this.forgetIdentifier = ''
    return forgetPassword(data).finally(() => {
      this.forgetIdentifier = data.identifier
      this.isFetch = false
    })
  }
  resetPassword = (data) => {
    this.isFetch = true
    this.forgetIdentifier = ''
    return resetPassword(data).finally(() => {
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

  getProfile = async () => {
    try {
      this.user = await getProfile()
    } catch (error) {
      console.log(error.message)
    }
  }

  updateProfile = (data) => {
    this.isFetch = true
    return updateProfile(data)
      .then((user) => {
        this.user = user
      })
      .finally(() => {
        this.isFetch = false
      })
  }

  skipOnboarding = () => {
    this.isFetch = true
    return skipOnboarding()
      .then(() => {
        this.user.onboarding = 0
      })
      .finally(() => {
        this.isFetch = false
      })
  }

  get showOnboarding() {
    return this.user && this.user.onboarding ? true : false
  }
}

export default new AuthStore()
