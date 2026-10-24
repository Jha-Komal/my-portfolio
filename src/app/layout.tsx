import type { Metadata } from "next";
import { Caveat, Karla, Montserrat } from "next/font/google";
import "./globals.css";
import portfolio from "@/data/portfolio.json";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.profile.name} | ${portfolio.profile.title}`,
  description: portfolio.profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${karla.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
