import Axios from 'axios'
import { TOKEN_NAME, USER_STORE_NAME } from './constants'
import { add } from 'date-fns'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Accept: 'application/json',
  },
})

// Request interseptor to check server response time
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  function (response) {
    if ([200, 201].includes(response.status)) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  function (error) {
    if (error.response) {
      if (error.response.status === 401) {
        eraseToken()
        // window.location.pathname = '/'
      } else if (error.response.status === 500) {
        // window.location.pathname = '/error-500'
      } else {
        return Promise.reject(error.response.data)
      }
    }
    return Promise.reject(error)
  }
)

function setToken(token, tokenName = TOKEN_NAME) {
  const expirationDate = add(new Date(), { years: 1 })

  document.cookie =
    tokenName +
    '=' +
    (token || '') +
    `; expires=${expirationDate.toUTCString()}`
}

function getToken(tokenName = TOKEN_NAME) {
  var nameEQ = tokenName + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

function eraseToken(tokenName = TOKEN_NAME) {
  document.cookie = `${tokenName}=; Max-Age=0`
}

let securedFetchOptions = (tokenName = TOKEN_NAME) => {
  return {
    headers: {
      Authorization: 'Bearer ' + getToken(tokenName),
    },
  }
}

export {
  axios,
  getToken,
  setToken,
  eraseToken,
  securedFetchOptions,
  TOKEN_NAME,
  USER_STORE_NAME,
}
