import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export function useObserverNavigation(contentId, isInfo) {
  const [activeBlock, setActiveBlock] = useState(0)
  const router = useRouter()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const blockIndex = entry.target.id.split('-')[1]
          if (entry.isIntersecting)
            setActiveBlock((state) => (blockIndex > state ? blockIndex : state))
          else
            setActiveBlock((state) => (blockIndex == state ? state - 1 : state))
        }),
      {
        root: null,
        threshold: 0,
      }
    )
    const blocks = document.getElementById(contentId)
    if (!blocks) {
      setActiveBlock(0)
      return
    }
    for (let i = 0; i < blocks.children.length; i++) {
      const block = blocks.children[i]
      observer.observe(block)
    }
    return () => {
      setActiveBlock(0)
      observer.disconnect()
    }
  }, [isInfo])

  useEffect(() => {
    const blockId = router.asPath.split('#')[1]
    if (blockId && isInfo) {
      const block = document.getElementById(blockId)
      if (block)
        block.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        })
    }
  }, [router.asPath, isInfo])

  return [activeBlock, setActiveBlock]
}
