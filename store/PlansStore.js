const { makeAutoObservable } = require('mobx')
import services from '@/constants/services'
import { getPlansList, getCustomPlanDetails } from '@/utils/api'

class PlansStore {
  plans = null
  customPlanOptions = null

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
  loadCustomPlanOptions = async () => {
    try {
      const options = await getCustomPlanDetails()
      this.customPlanOptions = options.map((el) => {
        let service = services.find(
          (service) => service.name.search(el.name) !== -1
        )
        if (!service && el.name.toLowerCase().search('support') !== -1) {
          service = { icon: 'support', color: 'success' }
        }
        return {
          ...service,
          ...el,
          description: service?.description || '',
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default new PlansStore()
