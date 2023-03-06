import { useState, useEffect } from 'react'
import { useRequest } from './use-request'
import { getIp } from '@/utils/api'

export const useIP = (initialIp) => {
  const [ip, setIp] = useState(initialIp)
  const [data, setData] = useState(null)
  const { action, isFetch } = useRequest(getIp)

  const handleData = (newData) => {
    if (typeof newData === 'string') return setData({ ip: newData })
    setData(newData)
  }

  useEffect(() => {
    if (ip !== null) {
      setData(null)
      action(ip)
        // for test
        .catch((error) => console.log(error))
        .then((data) => data && handleData(data))
    }
  }, [ip])
  return { ip, setIp, data, isFetch }
}
