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
      const info = await getIp(ip)
      if (typeof info === 'string') {
        this.ip = info
        this.userIp = info
        this.isUserIp = true
      } else {
        this.ip = info.ip
        this.isUserIp = false
      }

      const result = await searchIp(ip)
      this.result = result.filter((plan) => plan.name !== 'Free')
    } catch (error) {
      console.log(error)
    }
    this.isFetch = false
  }
}

export default new SearchStore()
