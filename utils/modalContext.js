import { createContext } from 'react'

const ModalContext = createContext({
  modal: null,
  openModal: (modal) => {},
})

export default ModalContext
