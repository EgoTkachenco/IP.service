import { useState, useEffect } from 'react'
import { useRequest } from './use-request'
import { getIp } from '@/utils/api'

export const useService = (initialIp, service) => {
  const [userIP, setUserIP] = useState('')
  const [ip, setIp] = useState(initialIp)
  const [data, setData] = useState(null)
  const { action, isFetch } = useRequest(service || getIp)

  const handleData = (newData) => {
    if (typeof newData === 'string') {
      if (!service) {
        setUserIP(newData)
        return fetchInfo(newData)
      }
    }
    setData(newData)
    return newData
  }

  const fetchInfo = async (ip) => {
    setData(null)
    setIp(ip || userIP)
    return action(ip)
      .catch((error) => console.log(error))
      .then((data) => data && handleData(data))
  }

  useEffect(() => {
    if (ip !== null) {
      setData(null)
      fetchInfo(ip)
    }
  }, [ip])

  useEffect(() => {
    if (service) {
      getIp()
        .then((data) => {
          setUserIP(data)
          if (!ip) setIp(data)
        })
        .catch((error) => console.log(error))
    }
  }, [service])

  return { ip, setIp, data, isFetch, userIP }
}
