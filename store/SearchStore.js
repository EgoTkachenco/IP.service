const { makeAutoObservable } = require('mobx')
import { searchIp, getIp } from '@/utils/api'

class SearchStore {
  ip = ''
  userIp = ''
  isUserIp = false
  isFetch = ''
  result = null

  constructor() {
    makeAutoObservable(this)
  }

  getIpInfo = async (ip) => {
    this.isFetch = true
    try {
      if (!ip) {
        ip = await getIp(ip)
        this.ip = ip
        this.userIp = ip
        this.isUserIp = true
      } else {
        this.ip = ip
        this.isUserIp = false
      }
      const result = await searchIp(ip)
      // move geolocation from free to basic plan
      const freePlan_i = result.findIndex((plan) => plan.name === 'Free')
      const basicPlan_i = result.findIndex((plan) => plan.name === 'Basic')
      const geolocation_i = result[freePlan_i].data_groups.findIndex(
        (plan) => plan.name === 'Geolocation'
      )
      if (geolocation_i !== -1) {
        const geolocationOtion = result[freePlan_i].data_groups[geolocation_i]
        result[basicPlan_i].data_groups.unshift(geolocationOtion)
        result[freePlan_i].data_groups.splice(geolocation_i)
        if (result[freePlan_i].data_groups.length === 0)
          result.splice(freePlan_i, 1)
      }
      this.result = result
    } catch (error) {
      console.log(error)
    }
    this.isFetch = false
  }
}

export default new SearchStore()
