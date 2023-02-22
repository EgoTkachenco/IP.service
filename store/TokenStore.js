const { makeAutoObservable } = require('mobx')
import { getToken, updateWhitelist } from '@/utils/api'

class TokenStore {
  token = null
  white_domain_list = ''
  white_ip_list = ''
  isFetch = false

  constructor() {
    makeAutoObservable(this)
  }

  loadToken = async () => {
    this.isFetch = true
    try {
      const data = await getToken()
      this.token = data.token
      this.white_domain_list = data.white_domain_list
      this.white_ip_list = data.white_ip_list
    } catch (error) {
      console.log(error.message)
    }
    this.isFetch = false
  }

  updateWhitelist = async (data) => {
    this.isFetch = true
    return updateWhitelist(data)
      .then((response) => {
        this.white_domain_list = response.white_domain_list
        this.white_ip_list = response.white_ip_list
      })
      .finally(() => {
        this.isFetch = false
      })
  }
}

export default new TokenStore()
