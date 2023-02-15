import { createContext } from 'react'

const authContext = createContext({
  isLogged: null,
  setIsLogged: (isLogged) => {},
})

export default authContext
