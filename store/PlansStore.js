const { makeAutoObservable } = require('mobx')
import { getPlansList } from '@/utils/api'

class PlansStore {
  plans = null
  constructor() {
    makeAutoObservable(this)
  }

  loadPlans = async () => {
    const plans = await getPlansList()
    this.savePlans(plans)
    return plans
  }
  savePlans = (plans) => {
    this.plans = plans
  }
}

export default new PlansStore()
