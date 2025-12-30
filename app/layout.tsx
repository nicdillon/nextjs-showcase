import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TavNap from "./components/server/topnav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Showcase",
  description: "A website showcasing the latest features of Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px]"`}
      >
        <TavNap />
        {children}
      </body>
    </html>
  );
}
