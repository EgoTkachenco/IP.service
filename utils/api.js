import { axios, securedFetchOptions } from './axios'

export const login = ({ identifier, password }) =>
  axios.post('/api/v1/login', { identifier, password })

export const register = ({
  identifier,
  password,
  password_confirmation,
  accept,
}) =>
  axios.post('/api/v1/register', {
    identifier,
    password,
    password_confirmation,
    accept,
  })

export const forgetPassword = ({ identifier }) =>
  axios.post('/api/v1/password/forgot', {
    identifier,
  })

export const logout = () => axios.get('/api/v1/logout', securedFetchOptions())

export const getIp = (ip) => axios.get('/' + (ip ? `?ip=${ip}` : ''))

export const searchIp = (ip) =>
  axios.get('/api/v1/account/search', {
    params: { query: ip },
    ...securedFetchOptions(),
  })

export const getPlansList = () => axios.get('/api/v1/public/plans/list')

export const getToken = () =>
  axios.get('/api/v1/account/token', securedFetchOptions())

export const updateWhitelist = (data) =>
  axios.post('/api/v1/account/token/white-lists', data, securedFetchOptions())

export const updateProfile = (data) =>
  axios.put('/api/v1/account/profile', data, securedFetchOptions())
