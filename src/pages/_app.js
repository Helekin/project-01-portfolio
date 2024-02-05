import { useEffect } from "react";

import "@/styles/portfolio.scss";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}
