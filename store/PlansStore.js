const { makeAutoObservable } = require('mobx')
import { getPlansList } from '@/utils/api'

class PlansStore {
  plans = []
  constructor() {
    makeAutoObservable(this)
    this.loadPlans()
  }

  loadPlans = async () => {
    const plans = await getPlansList()
    this.plans = plans
  }
}

export default new PlansStore()
