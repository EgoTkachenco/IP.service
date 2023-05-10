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

export const resetPassword = ({
  identifier,
  password,
  key,
  password_confirmation,
}) =>
  axios.post('/api/v1/password/reset', {
    identifier,
    password,
    password_confirmation,
    key,
  })

export const logout = () => axios.get('/api/v1/logout', securedFetchOptions())

export const getIp = (ip) => axios.get('/' + (ip ? `?ip=${ip}` : ''))

// export const searchIp = (ip) =>
//   axios.get('/api/v1/account/data/search', {
//     params: ip ? { query: ip } : {},
//     ...securedFetchOptions(),
// 	})

export const searchIp = (ip) =>
  axios.get('/api/v1/public/services/search', {
    params: ip ? { query: ip } : {},
  })

export const getPlansList = () => axios.get('/api/v1/public/plans/list')

export const getToken = () =>
  axios.get('/api/v1/account/token', securedFetchOptions())

export const updateWhitelist = (data) =>
  axios.post('/api/v1/account/token/white-lists', data, securedFetchOptions())

export const getProfile = () =>
  axios.get('/api/v1/account/profile', securedFetchOptions())

export const updateProfile = (data) =>
  axios.put('/api/v1/account/profile', data, securedFetchOptions())

export const skipOnboarding = () =>
  axios.put('/api/v1/account/profile', { onboarding: 0 }, securedFetchOptions())

export const getAnalytics = (duration = 7) =>
  axios.get('/api/v1/account/data/analytics', {
    ...securedFetchOptions(),
    params: { duration },
  })

export const sendFeedback = (form) =>
  axios.post('/api/v1/public/feedback/contact-form', form)

export const allService = ({ ip, domain }) =>
  axios.get(
    '/api/v1/public/services/all' + `?ip=${ip || domain}`
    // (ip ? `?ip=${ip}` : `?domain=${domain}`)
  )

export const geolocationService = (ip) =>
  axios
    .get('/api/v1/public/services/geolocation' + (ip ? `?ip=${ip}` : ''))
    .then((res) => (res.answer ? res.answer : res))

export const companyService = (ip) =>
  axios.get('/api/v1/public/services/company' + (ip ? `?ip=${ip}` : ''))

export const asnService = (ip) =>
  axios.get('/api/v1/public/services/asn' + (ip ? `?ip=${ip}` : ''))

export const abuseService = (ip) =>
  axios.get('/api/v1/public/services/abuse' + (ip ? `?ip=${ip}` : ''))

export const carrierService = (ip) =>
  axios
    .get('/api/v1/public/services/carrier' + (ip ? `?ip=${ip}` : ''))
    .then((res) => (res.answer ? res.answer : res))

export const reverseService = (ip) =>
  axios.get('/api/v1/public/services/reverse' + (ip ? `?ip=${ip}` : ''))

export const whoisService = (ip) =>
  axios.get('/api/v1/public/services/whois' + (ip ? `?ip=${ip}` : ''))

export const rangesService = (ip) =>
  axios.get('/api/v1/public/services/ranges' + (ip ? `?domain=${ip}` : ''))

export const privacyService = (ip) =>
  axios.get('/api/v1/public/services/privacy' + (ip ? `?ip=${ip}` : ''))

export const getFlag = (flag) => axios.get(`/api/v1/public/flag/${flag}`)

export const reactivateUserPlan = () =>
  axios.get('/api/v1/account/reactivate', securedFetchOptions())

export const getOrders = () => axios.get('/api/v1/order', securedFetchOptions())

export const createOrder = (plan, term, success_url, cancel_url) =>
  axios.post(
    '/api/v1/order',
    { plan, term, success_url, cancel_url },
    securedFetchOptions()
  )

export const createOrderTrial = () =>
  axios.get('/api/v1/order/trial', securedFetchOptions())

export const getOrdersList = ({ search, page = 1, per_page = 10 }) =>
  axios.get('/api/v1/admin/orders', {
    params: { search, page, per_page },
    ...securedFetchOptions(),
  })

export const getCustomPlanDetails = () =>
  axios.get('/api/v1/public/plans-options/list')

export const setCustomPlan = (term, options) =>
  axios.post(
    '/api/v1/account/plan/custom',
    { term, options },
    securedFetchOptions()
  )
