import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import portfolio from "@/data/portfolio.json";
import ParallaxTrees from "@/components/ParallaxTrees";

const nunito = Nunito({
  variable: "--font-nunito",
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
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="sky" aria-hidden="true">
          <span className="cloud cloud-1" />
          <span className="cloud cloud-2" />
          <span className="cloud cloud-3" />
          <ParallaxTrees />
        </div>
        {children}
      </body>
    </html>
  );
}
