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
      this.result = result
    } catch (error) {
      console.log(error)
    }
    this.isFetch = false
  }
}

export default new SearchStore()
