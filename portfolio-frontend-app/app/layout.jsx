import Navbar from "@/components/layout/Navbar";

import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </GlobalProvider>
  );
}