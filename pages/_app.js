import { useState } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import Modals from '@/components/modals'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  const [modal, setModal] = useState(null)
  // Use the layout defined at the page level, if available
  // const getLayout = useCallback(Component.getLayout || ((page) => page), [
  //   Component,
  //   router.asPath,
  // ])

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ modal, openModal: setModal }}>
        <GlobalStyles />
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {/* {getLayout()} */}
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        <Modals />
      </ModalContext.Provider>
    </ThemeProvider>
  )
}
