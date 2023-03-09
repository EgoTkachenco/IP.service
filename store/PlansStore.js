const { makeAutoObservable } = require('mobx')
import { getPlansList } from '@/utils/api'

class PlansStore {
  plans = null
  constructor() {
    makeAutoObservable(this)
  }

  loadPlans = async () => {
    try {
      const plans = await getPlansList()
      this.savePlans(plans)
      return plans
    } catch (error) {
      console.log(error.message)
    }
  }
  savePlans = (plans) => {
    this.plans = plans
  }
}

export default new PlansStore()
