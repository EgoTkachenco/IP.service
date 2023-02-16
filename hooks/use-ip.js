import { useState, useEffect } from 'react'
import { useRequest } from './use-request'
import { getIp } from '@/utils/api'

export const useIP = (initialIp) => {
  const [ip, setIp] = useState(initialIp)
  const [data, setData] = useState(null)
  const { apiCall, isFetch } = useRequest(getIp)
  useEffect(() => {
    if (ip !== null) {
      setData(null)
      apiCall(ip)
        // for test
        .catch((error) => ({
          ip: '176.100.24.58',
          address: 'UA, Kiev, 03187, Zabolotnogo 46, office 25',
          country: 'UA',
          asn: {
            asn: '12963',
            name: 'Scientific -Industrial Firm Volz Ltd',
            domain: 'volz.ua',
            type: 'business',
            route: '176.100.24.0/24',
          },
          company: {
            domain: 'volz.ua',
            type: 'business',
            name: 'Scientific -Industrial Firm Volz Ltd',
          },
          abuse: {
            address: 'UA, Kiev, 03187, Zabolotnogo 46, office 25',
            country: 'UA',
            email: 'abuse@volz.ua',
          },
        }))
        .then((data) => data && setData(data))
    }
  }, [ip])
  return { ip, setIp, data, isFetch }
}
