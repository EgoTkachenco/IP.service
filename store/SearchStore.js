const { makeAutoObservable } = require('mobx')
import { searchIp, getIp } from '@/utils/api'

class SearchStore {
  ip = ''
  isFetch = ''
  result = null

  constructor() {
    makeAutoObservable(this)
  }

  getIpInfo = async (ip) => {
    this.isFetch = true
    try {
      const result = await getIp(ip)
      this.ip = result.ip
      this.result = result
    } catch (error) {
      console.log(error)
    }
    this.isFetch = false
  }
}

export default new SearchStore()
