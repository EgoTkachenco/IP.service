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
  setBillingName,
  setCardDetails,
} from '@/utils/api'
import { eraseToken, getToken, setToken, USER_STORE_NAME } from '@/utils/axios'
import { ADMIN_TOKEN_NAME } from '@/utils/constants'

class AuthStore {
  isFetch = false
  user = null
  constructor() {
    makeAutoObservable(this, {
      showOnboarding: computed,
      isTrialAvailable: computed,
    })
  }

  signIn = (data) => {
    this.isFetch = true
    return login(data)
      .then((data) => {
        if (data.role.name === 'admin') {
          eraseToken(ADMIN_TOKEN_NAME)
          setToken(data.token, ADMIN_TOKEN_NAME)
        } else {
          eraseToken()
          setToken(data.token)
        }
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
    return forgetPassword(data).finally(() => {
      this.isFetch = false
    })
  }
  resetPassword = (data) => {
    this.isFetch = true
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
        return this.getProfile()
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

  updateCardholder(cardholder) {
    return setBillingName(cardholder).then(() => {
      return this.getProfile()
    })
  }
  updateCardDetails(details) {
    return setCardDetails(details).then(() => {
      return this.getProfile()
    })
  }

  get showOnboarding() {
    return this.user && this.user.onboarding ? true : false
  }

  get isTrialAvailable() {
    return this.user && this.user.trial ? true : false
  }
}

export default new AuthStore()
