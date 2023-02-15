import { axios, securedFetchOptions } from './axios'

export const login = ({ identifier, password }) =>
  axios.post('/login', { identifier, password })

// export const register = (name, email, password) =>
//   axios.post('/auth/local/register', {
//     name,
//     username: email,
//     email,
//     password,
//   })
