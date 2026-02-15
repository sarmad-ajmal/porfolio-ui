import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { StructuredData } from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sarmadajmal.com'), // Update with your actual domain
  title: {
    default: "Sarmad Ajmal | Senior Full-Stack Developer & Cloud Architect",
    template: "%s | Sarmad Ajmal"
  },
  description:
    "Senior Full-Stack Developer with 6+ years of experience building scalable SaaS applications using React, Node.js, and AWS. Specializing in enterprise-grade solutions and cloud architecture.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "AWS Cloud Architect",
    "TypeScript Expert",
    "Next.js Developer",
    "Enterprise Software Engineer",
    "SaaS Developer",
    "Cloud Solutions Architect",
    "Sarmad Ajmal"
  ],
  authors: [{ name: "Sarmad Ajmal" }],
  creator: "Sarmad Ajmal",
  publisher: "Sarmad Ajmal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarmadajmal.com", // Update with your actual domain
    title: "Sarmad Ajmal | Senior Full-Stack Developer & Cloud Architect",
    description:
      "Senior Full-Stack Developer with 6+ years of experience building scalable SaaS applications using React, Node.js, and AWS. Specializing in enterprise-grade solutions and cloud architecture.",
    siteName: "Sarmad Ajmal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarmad Ajmal | Senior Full-Stack Developer & Cloud Architect",
    description:
      "Senior Full-Stack Developer with 6+ years of experience building scalable SaaS applications. Specializing in React, Node.js, and AWS.",
    creator: "@SarmadAjmal",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const G_TAG = process.env.NEXT_PUBLIC_G_TAG;
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG}`}
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${G_TAG}');
        `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
