import { useState, useEffect } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'
import Modals from '@/components/modals'
import { observer } from 'mobx-react-lite'
import AuthStore from '@/store/AuthStore'

const App = observer(({ Component, pageProps, router }) => {
  const [modal, setModal] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const { user, relog } = AuthStore

  useEffect(() => {
    if (user && !isLogged) {
      setIsLogged(true)
    } else {
      relog()
        .then(() => setIsLogged(true))
        .catch(() => setIsLogged(false))
    }
  }, [user, router.asPath])

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ isLogged, setIsLogged }}>
        <ModalContext.Provider value={{ modal, openModal: setModal }}>
          <GlobalStyles />
          <Component {...pageProps} />
          <Modals />
        </ModalContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  )
})

export default App
