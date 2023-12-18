import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import SvgFilters from "./filters";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keadon Mitchell",
  description: "Keadon Mitchell Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SvgFilters />
      </body>
    </html>
  );
}
