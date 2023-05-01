import { NextResponse } from 'next/server'

const Middleware = (req) => {
  const isLowerCase =
    req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase()
  const isWWW = req.nextUrl.origin.search('.www') !== -1

  if (!isLowerCase)
    return NextResponse.redirect(
      new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase())
    )

  if (isWWW)
    return NextResponse.redirect(
      new URL(req.nextUrl.origin.replace('.www', '') + req.nextUrl.pathname)
    )

  return NextResponse.next()
}

export default Middleware

export const config = {
  matcher: [
    '/',
    '/contact',
    '/docs',
    '/faq',
    '/pricing',
    '/privacy',
    '/terms',
    '/services/:path*',
  ],
}
