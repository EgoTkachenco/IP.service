const { makeAutoObservable } = require('mobx')
import { getPlansList } from '@/utils/api'

class PlansStore {
  plans = null
  constructor() {
    makeAutoObservable(this)
  }

  loadPlans = async () => {
    const plans = await getPlansList()
    this.plans = plans
    return plans
  }
}

export default new PlansStore()
