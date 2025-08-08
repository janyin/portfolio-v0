import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiangdu | Full-Stack Web Developer | liucodes.dev",
  description:
    "liucodes.dev is the personal portfolio of Jiangdu Liu, a full stack developer specializing in TypeScript, React, and SAP UI5. Showcasing professional experience, technical projects, and a focus on scalable web application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-1TMT4C27BQ" />
    </html>
  );
}
