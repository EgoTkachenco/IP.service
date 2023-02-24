import { enableStaticRendering } from 'mobx-react-lite'
import { makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import AuthStore from './AuthStore'
import PlansStore from './PlansStore'
import SearchStore from './SearchStore'
import TokenStore from './TokenStore'

// there is no window object on the server
enableStaticRendering(typeof window === 'undefined')

class RootStore {
  constructor() {
    makeAutoObservable(this)
    this.AuthStore = AuthStore
    this.PlansStore = PlansStore
    this.SearchStore = SearchStore
    this.TokenStore = TokenStore
  }
}

let RootStore = new RootStore()

const RootStoreContext = createContext()

function initializeStore() {
  const _store = store ?? new RootStore()

  // For server side rendering always create a new store
  if (typeof window === 'undefined') return _store

  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function RootStoreProvider({ children }) {
  const store = initializeStore()
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  )
}

export function useRootStore() {
  const context = useContext(RootStoreContext)
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }

  return context
}
