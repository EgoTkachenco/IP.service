import { TOKEN_NAME } from '@/utils/constants'
import { getCookie } from 'cookies-next'

export const validateIP = (value) =>
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi.test(
    value
  )

export const isAuthorized = (ctx) => !!getCookie(TOKEN_NAME, ctx)

export const serverSideSecuredRoute = (ctx) => {
  const isLogged = isAuthorized(ctx)
  if (!isLogged)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  return { props: {} }
}
