import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('./Icon'), {
  loading: () => '',
  // ssr: false,
})

export default Icon
