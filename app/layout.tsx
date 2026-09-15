import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bete Abrham — Digital Marketing Strategist & UI/UX Designer",
  description:
    "Digital Marketing Strategist and UI/UX Designer specializing in SEO/SEM, Figma, brand visual systems, and growth marketing.",
  keywords: [
    "Bete Abrham",
    "Digital Marketing Manager",
    "SEO",
    "SEM",
    "UI/UX Designer",
    "Digital Marketing Strategist",
    "Brand Strategy",
    "Figma",
    "Adobe Photoshop",
    "Addis Ababa",
  ],
  authors: [{ name: "Bete Abrham" }],
  creator: "Bete Abrham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beteabrham.dev",
    title: "Bete Abrham — Digital Marketing Strategist & UI/UX Designer",
    description:
      "Digital Marketing Strategist and UI/UX Designer specializing in SEO/SEM, Figma, brand visual systems, and growth marketing.",
    siteName: "Bete Abrham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bete Abrham — Digital Marketing Strategist & UI/UX Designer",
    description:
      "Digital Marketing Strategist and UI/UX Designer specializing in SEO/SEM, Figma, brand visual systems, and growth marketing.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-800 focus:text-white focus:rounded-md focus:shadow-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
