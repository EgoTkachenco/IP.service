import { NextResponse } from 'next/server'

const Middleware = (req) => {
  const isLowerCase =
    req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase()

  if (!isLowerCase)
    return NextResponse.redirect(
      new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase())
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
