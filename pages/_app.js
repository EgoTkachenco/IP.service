import { useState } from 'react'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'
import ModalContext from '@/utils/modalContext'
import Modals from '@/components/modals'

export default function App({ Component, pageProps }) {
  const [modal, setModal] = useState(null)
  return (
    <ThemeProvider theme={theme}>
      <ModalContext.Provider value={{ modal, openModal: setModal }}>
        <GlobalStyles />
        <Component {...pageProps} />
        <Modals />
      </ModalContext.Provider>
    </ThemeProvider>
  )
}
