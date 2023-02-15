import { useState, useCallback } from 'react'

export function useRequest(apiRequest = () => {}) {
  const [isFetch, setIsFetch] = useState(false)
  const apiCall = useCallback(
    (data) => {
      setIsFetch(true)
      return apiRequest(data).finally(() => setIsFetch(false))
    },
    [apiRequest]
  )
  return { apiCall, isFetch }
}
