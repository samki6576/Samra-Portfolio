import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/custom-cursor";
import Nav from "./components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samra Safdar Full Stack Developer & AI Engineer",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png", sizes: "180x180" },
    ],
  },
  description:
    "Samra Safdar is a Full Stack Developer & AI Engineer specializing in React, Next.js, Node.js, Python, and LangGraph-based multi-agent AI systems. Available for full-time, contract, and freelance roles worldwide.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Python",
    "LangGraph",
    "Samra Safdar",
    "Open to Work",
    "Available for Hire",
    "Software Engineer Portfolio",
  ],
  openGraph: {
    title: "Samra Safdar — Full Stack Developer & AI Engineer",
    description:
      "Explore 15+ production-grade projects. Available for full-time, contract, and freelance roles globally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
