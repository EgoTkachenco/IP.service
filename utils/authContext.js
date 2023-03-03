import { createContext } from 'react'

const AuthContext = createContext({
  isLogged: false,
  setIsLogged: (isLogged) => {},
})

export default AuthContext
