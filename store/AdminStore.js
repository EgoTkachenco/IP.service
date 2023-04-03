const { makeAutoObservable } = require('mobx')
import { getOrdersList } from '@/utils/api'

class AdminStore {
  orders = null
  constructor() {
    makeAutoObservable(this)
  }

  loadOrders = async (page, search) => {
    try {
      this.orders = await getOrdersList({ page, search })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default new AdminStore()
