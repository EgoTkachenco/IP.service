const { makeAutoObservable } = require('mobx')
import { getAnalytics } from '@/utils/api'

class AnalyticsStore {
  isFetch = false
  analytics = null
  duration = 14
  usage = null

  constructor() {
    makeAutoObservable(this)
  }

  loadAnalytics = async () => {
    this.isFetch = true
    try {
      const data = await getAnalytics()
      data.token = data.token.value
      data.weekUsage = Object.values(data.usage.all).reduce(
        (acc, el) => (acc += el),
        0
      )
      data.today = Object.values(data.usage.all)[
        Object.values(data.usage.all).length - 1
      ]
      if (Object.values(data.usage.all).length > 1) {
        data.yesterday = Object.values(data.usage.all)[
          Object.values(data.usage.all).length - 2
        ]
      }
      this.analytics = data
      this.usage = {
        ...data.usage,
        // test
        // all: {
        //   'Apr 17, 2023': 61,
        //   'Apr 16, 2023': 50,
        //   'Apr 15, 2023': 30,
        //   'Apr 14, 2023': 55,
        // },
        // failed: {
        //   'Apr 17, 2023': 20,
        //   'Apr 16, 2023': 30,
        //   // 'Apr 15, 2023': 10,
        //   'Apr 14, 2023': 15,
        // },
        // successful: {
        //   'Apr 17, 2023': 41,
        //   'Apr 16, 2023': 20,
        //   'Apr 15, 2023': 20,
        //   'Apr 14, 2023': 50,
        // },
      }
      // await this.loadUsage()
    } catch (error) {
      console.log(error.message)
    }
    this.isFetch = false
  }

  changeDuration = async (duration) => {
    this.duration = duration
    this.isFetch = true
    await this.loadUsage()
    this.isFetch = false
  }

  loadUsage = async () => {
    try {
      const data = await getAnalytics(this.duration)
      this.usage = data.usage
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default new AnalyticsStore()
