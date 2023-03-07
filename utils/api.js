import { axios, securedFetchOptions } from './axios'

export const login = ({ email, password }) =>
  axios.post('/api/v1/login', { identifier: email, password })

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
  axios.get('/api/v1/account/data/search', {
    params: ip ? { query: ip } : {},
    ...securedFetchOptions(),
  })

export const getPlansList = () => axios.get('/api/v1/public/plans/list')

export const getToken = () =>
  axios.get('/api/v1/account/token', securedFetchOptions())

export const updateWhitelist = (data) =>
  axios.post('/api/v1/account/token/white-lists', data, securedFetchOptions())

export const updateProfile = (data) =>
  axios.put('/api/v1/account/profile', data, securedFetchOptions())

export const getAnalytics = (duration = 7) =>
  axios.get('/api/v1/account/data/analytics', {
    ...securedFetchOptions(),
    params: { duration },
  })

export const sendFeedback = (form) =>
  axios.post('/api/v1/public/feedback/contact-form', form)

export const geolocationService = (ip) =>
  axios.get('/api/v1/public/services/geolocation' + (ip ? `?ip=${ip}` : ''))

export const companyService = (ip) =>
  axios.get('/api/v1/public/services/company' + (ip ? `?ip=${ip}` : ''))
