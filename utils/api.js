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

export const logout = () => axios.get('/api/v1/logout')

export const getIp = (ip) => axios.get('/' + (ip ? `?ip=${ip}` : ''))

export const getPlansList = () => axios.get('/api/v1/public/plans/list')
