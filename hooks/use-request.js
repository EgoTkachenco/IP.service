import { useState, useCallback } from 'react'

export function useRequest(asyncAction = () => {}) {
  const [isFetch, setIsFetch] = useState(false)
  const action = useCallback(
    function () {
      setIsFetch(true)
      return asyncAction(...arguments).finally(() => setIsFetch(false))
    },
    [asyncAction]
  )
  return { isFetch, action }
}
