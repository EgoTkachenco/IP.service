import { useState } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import AuthContext from '@/utils/authContext'
import Modals from '@/components/modals'

export default function App({ Component, pageProps }) {
  const [modal, setModal] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  console.log('Global rerender', isLogged)
  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ modal, openModal: setModal }}>
        <AuthContext.Provider value={{ isLogged, setIsLogged }}>
          <GlobalStyles />
          <Component {...pageProps} />
          <Modals />
        </AuthContext.Provider>
      </ModalContext.Provider>
    </ThemeProvider>
  )
}
