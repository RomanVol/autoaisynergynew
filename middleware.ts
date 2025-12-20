import { NextRequest, NextResponse } from 'next/server'
import { languages, fallbackLng, Locale } from '@/lib/i18n/settings'

function getLocale(request: NextRequest): Locale {
  // Check cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && languages.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().substring(0, 2))
      .find(lang => languages.includes(lang as Locale))

    if (preferredLocale) {
      return preferredLocale as Locale
    }
  }

  return fallbackLng
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname starts with a supported locale
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect to locale-prefixed path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
}
