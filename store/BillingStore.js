const { makeAutoObservable, computed } = require('mobx')
import {
  getOrders,
  createOrder,
  createOrderTrial,
  reactivateUserPlan,
} from '@/utils/api'
import AuthStore from './AuthStore'

class BillingStore {
  orders = null
  constructor() {
    makeAutoObservable(this, { currentPlan: computed, isFreePlan: computed })
  }

  loadOrders = async () => {
    try {
      const orders = await getOrders()
      this.orders = orders.data
    } catch (error) {
      console.log(error.message)
    }
  }

  setUserPlan = async (plan, term) => {
    try {
      await createOrder(plan, term)
      AuthStore.getProfile()
    } catch (error) {
      console.log(error.message)
    }
  }

  setUserTrial = async () => {
    try {
      await createOrderTrial()
    } catch (error) {
      console.log(error.message)
    }
  }

  reactivateUserPlan = async () => {
    try {
      await reactivateUserPlan()
      AuthStore.getProfile()
    } catch (error) {
      console.log(error.message)
    }
  }

  get currentPlan() {
    return AuthStore?.user?.plan || null
  }

  get isFreePlan() {
    return !this.currentPlan || this.currentPlan.name === 'Free'
  }
}

export default new BillingStore()
