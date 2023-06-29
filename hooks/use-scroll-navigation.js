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
      const clientScroll = window.pageYOffset
      const currentBlock = blocks?.find(
        (block) =>
          Math.abs(
            clientScroll - document.getElementById(block.id)?.offsetTop
          ) < 200
      )
      // const currentBlock = blocks?.reduce((acc, block) => {
      //   console.log(clientScroll, document.getElementById(block.id)?.offsetTop)
      //   if (
      //     !acc &&
      //     clientScroll <= document.getElementById(block.id)?.offsetTop
      //   )
      //     acc = block

      //   return acc
      // }, null)
      if (currentBlock) {
        setActiveBlock(currentBlock.order)
      }
    }, 20),
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

    const blockOrder = search.get('block')
    const block = blocks?.find((el) => el.order == blockOrder)
    if (block && isInfo) {
      setActiveBlock(Number(block.order))
      window.scroll({
        behavior: 'smooth',
        top: document.getElementById(block.id).offsetTop,
      })
    }
  }, [blocks])

  const onBlockChange = (block) => {
    setActiveBlock(block)
    const { id } = blocks.find((el) => el.order == block)
    if (id) {
      window.scroll({
        behavior: 'smooth',
        top: document.getElementById(id).offsetTop,
      })
    }
  }

  const reset = () => {
    setActiveBlock(0)
    router.replace(routes.summary, undefined, { shallow: false })
  }

  return [activeBlock, onBlockChange, reset]
}
