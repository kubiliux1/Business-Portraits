import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, siteGraph, OG_IMAGE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Business Headshots in Washington, DC | Mantas Kubilinskas", template: "%s | Mantas Kubilinskas" },
  description: "Business headshots, corporate headshots and executive portraits in Washington, DC by Mantas Kubilinskas, a photographer with 15 years of experience.",
  openGraph: { type: "website", siteName: "Mantas Kubilinskas Business Portraits", locale: "en_US", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE.url] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-black">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <JsonLd data={siteGraph()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
