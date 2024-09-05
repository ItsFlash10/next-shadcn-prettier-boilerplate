import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "ItsFlash10",
  description: "This is a boilerplate code",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${cn(`${inter.variable} ${calSans.variable}`)} ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
