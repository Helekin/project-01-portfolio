import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";

import "@/styles/globals.css";
import "@/styles/portfolio.scss";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="America/Guayaquil"
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
