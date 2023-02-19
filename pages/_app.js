import { useState } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'
import Modals from '@/components/modals'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  const [modal, setModal] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ modal, openModal: setModal }}>
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
          <GlobalStyles />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
          <Modals />
        </AuthContext.Provider>
      </ModalContext.Provider>
    </ThemeProvider>
  )
}
