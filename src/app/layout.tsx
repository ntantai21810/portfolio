import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-dun-five-65.vercel.app"),
  title: {
    default: "Tai Nguyen | Full Stack Developer",
    template: "%s | Tai Nguyen",
  },
  description:
    "A passionate full-stack developer crafting beautiful, performant web experiences with modern technologies like React, Next.js, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Tai Nguyen", url: "https://portfolio-dun-five-65.vercel.app" }],
  creator: "Tai Nguyen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-dun-five-65.vercel.app",
    siteName: "Tai Nguyen Portfolio",
    title: "Tai Nguyen | Full Stack Developer",
    description:
      "A passionate full-stack developer crafting beautiful, performant web experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tai Nguyen - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Nguyen | Full Stack Developer",
    description:
      "A passionate full-stack developer crafting beautiful, performant web experiences.",
    images: ["/og-image.jpg"],
    creator: "@TiNguyn68177148",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tai Nguyen",
    url: "https://portfolio-dun-five-65.vercel.app",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/ntantai21810",
      "https://www.linkedin.com/in/nguyentai21/",
      "https://x.com/TiNguyn68177148",
    ],
    description:
      "A passionate full-stack developer crafting beautiful, performant web experiences.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://portfolio-dun-five-65.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
