import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import i18n from "./i18n.config";

function getLocale(request) {
  let negotiatorHeaders;

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = match(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}/${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
