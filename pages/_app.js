import { useState, useEffect } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'
import Modals from '@/components/modals'
import { AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'

const App = observer(({ Component, pageProps, router }) => {
  const [modal, setModal] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const { user, relog } = AuthStore

  useEffect(() => {
    if (!user)
      relog()
        .then(() => setIsLogged(true))
        .catch(() => setIsLogged(false))
    if (user && !isLogged) setIsLogged(true)
  }, [user])

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <ModalContext.Provider value={{ modal, openModal: setModal }}>
          <GlobalStyles />
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
          <Modals />
        </ModalContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  )
})

export default App
