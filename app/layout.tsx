import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import ParticleBackground from "@/components/particle-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiangdu | Full-Stack Web Developer | liucodes.dev",
  description:
    "liucodes.dev is the personal portfolio of Jiangdu Liu, a full stack developer specializing in TypeScript, React, and SAP UI5. Showcasing professional experience, technical projects, and a focus on scalable web application development.",
  generator: "Next.js",
  applicationName: "Jiangdu Liu's Portfolio",
  authors: [
    {
      name: "Jiangdu Liu",
      url: "https://liucodes.dev",
    },
  ],
  keywords: [
    "Jiangdu Liu",
    "Full-Stack Developer",
    "liucodes.dev",
    "Portfolio",
  ],
  creator: "Jiangdu Liu",
  category: "Portfolio",
  referrer: "origin-when-cross-origin",
  publisher: "Vercel",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jiangdu | Full-Stack Web Developer | liucodes.dev",
    description:
      "liucodes.dev is the personal portfolio of Jiangdu Liu, a full stack developer specializing in TypeScript, React, and SAP UI5. Showcasing professional experience, technical projects, and a focus on scalable web application development.",
    url: "https://liucodes.dev",
    siteName: "liucodes.dev",
    images: [
      {
        url: "https://liucodes.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "liucodes.dev - Portfolio of Jiangdu Liu",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiangdu | Full-Stack Web Developer | liucodes.dev",
    description:
      "liucodes.dev is the personal portfolio of Jiangdu Liu, a full stack developer specializing in TypeScript, React, and SAP UI5. Showcasing professional experience, technical projects, and a focus on scalable web application development.",
    images: ["https://liucodes.dev/og-image.png"],
    creator: "@liucodesdev",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Jiangdu Liu's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black">
        <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
          <ParticleBackground />
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </div>
      </body>
      <GoogleAnalytics gaId="G-1TMT4C27BQ" />
    </html>
  );
}
