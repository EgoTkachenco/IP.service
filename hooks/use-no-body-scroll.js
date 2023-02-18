import { useEffect } from 'react'

export const useNoBodyScroll = (condition) => {
  useEffect(() => {
    if (condition) document.body.classList.add('no-scroll')
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [condition])
}
