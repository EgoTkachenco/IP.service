import { createContext } from 'react'

const modalContext = createContext({
  modal: null,
  openModal: (modal) => {},
})

export default modalContext
