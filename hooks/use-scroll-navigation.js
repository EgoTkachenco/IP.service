import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import _ from 'lodash'
import routes from '@/constants/routes'

export function useScrollNavigation(blocksSelector, isInfo) {
  const [activeBlock, setActiveBlock] = useState(0)
  const [blocks, setBlocks] = useState([])
  const router = useRouter()

  const onscroll = useCallback(
    _.debounce(() => {
      const clientScroll = document.documentElement.scrollTop
      const currentBlock = blocks?.find(
        (block) => Math.abs(clientScroll - block.offsetTop) < 200
      )
      if (currentBlock) {
        setActiveBlock(currentBlock.order)
      }
    }, 15),
    [blocks]
  )

  useEffect(() => {
    document.addEventListener('scroll', onscroll)

    return () => {
      document.removeEventListener('scroll', onscroll)
    }
  }, [onscroll])

  useEffect(() => {
    const content = document.querySelectorAll(blocksSelector)
    if (!content || content.length === 0) setBlocks(null)
    else {
      const blocks = []
      for (let i = 0; i < content.length; i++) {
        const block = content[i]
        blocks.push({
          offsetTop: block.offsetTop,
          order: i,
          id: block.id,
        })
      }
      setBlocks(blocks)
    }
  }, [isInfo])

  useEffect(() => {
    if (!blocks || blocks.length === 0) return
    let search = router.asPath.split('?')
    if (search.length > 1) search = new URLSearchParams(search[1])
    else return

    const block = search.get('block')
    const blockEl = blocks?.find((el) => el.order == block)
    if (block && isInfo && blockEl) {
      setActiveBlock(Number(block))
      window.scroll({
        behavior: 'smooth',
        top: blockEl.offsetTop,
      })
    }
  }, [blocks])

  const onBlockChange = (block) => {
    setActiveBlock(block)
    const blockEl = blocks.find((el) => el.order == block)
    if (blockEl) {
      window.scroll({
        behavior: 'smooth',
        top: blockEl.offsetTop,
      })
    }
  }

  const reset = () => {
    setActiveBlock(0)
    router.replace(routes.summary, undefined, { shallow: false })
  }

  return [activeBlock, onBlockChange, reset]
}
