import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johndoe.dev"),
  title: {
    default: "John Doe | Full Stack Developer",
    template: "%s | John Doe",
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
  authors: [{ name: "John Doe", url: "https://johndoe.dev" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    siteName: "John Doe Portfolio",
    title: "John Doe | Full Stack Developer",
    description:
      "A passionate full-stack developer crafting beautiful, performant web experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe | Full Stack Developer",
    description:
      "A passionate full-stack developer crafting beautiful, performant web experiences.",
    images: ["/og-image.jpg"],
    creator: "@johndoe",
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
    name: "John Doe",
    url: "https://johndoe.dev",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/johndoe",
      "https://linkedin.com/in/johndoe",
      "https://twitter.com/johndoe",
    ],
    description:
      "A passionate full-stack developer crafting beautiful, performant web experiences.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://johndoe.dev" />
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
