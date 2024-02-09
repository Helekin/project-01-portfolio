import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import i18n from "./i18n-config";

let headers = { "accept-language": "es-LA, es; q=0.5" };
let languages = new Negotiator({ headers }).languages();
let locales = ["es-LA", "en-US", "en"];
let defaultLocale = "es-LA";

match(languages, locales, defaultLocale);

function getLocale(request) {
  const negotiatorHeaders = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
}
