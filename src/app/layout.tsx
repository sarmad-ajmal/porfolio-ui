import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
``;
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarmad Ajmal - Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const G_TAG = process.env.NEXT_PUBLIC_G_TAG;
  return (
    <html lang="en">
      <head>
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
