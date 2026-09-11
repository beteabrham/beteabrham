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
  title: "Bete Abrham — Digital Marketing Strategist, UI Designer & Frontend Developer",
  description:
    "Digital Marketing Strategist, UI/UX Designer, and Frontend Developer specializing in SEO/SEM, Figma, and high-converting web applications.",
  keywords: [
    "Bete Abrham",
    "Digital Marketing Manager",
    "SEO",
    "SEM",
    "UI Designer",
    "Frontend Developer",
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
    title: "Bete Abrham — Digital Marketing Strategist, UI Designer & Frontend Developer",
    description:
      "Digital Marketing Strategist, UI/UX Designer, and Frontend Developer specializing in SEO/SEM, Figma, and high-converting web applications.",
    siteName: "Bete Abrham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bete Abrham — Digital Marketing Strategist, UI Designer & Frontend Developer",
    description:
      "Digital Marketing Strategist, UI/UX Designer, and Frontend Developer specializing in SEO/SEM, Figma, and high-converting web applications.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow-md dark:focus:bg-zinc-800 dark:focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
