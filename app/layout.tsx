import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "BaseCore | New era in crypto",
    template: "%s | BaseCore"
  },
  description: "BaseCore - a revolutionary next-generation cryptocurrency. Secure transactions, high performance, and innovative technologies.",
  keywords: ["cryptocurrency", "blockchain", "BaseCore", "crypto", "investments", "technologies", "finance"],
  authors: [{ name: "BaseCore Team" }],
  creator: "BaseCore",
  publisher: "BaseCore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://basecore.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'ru': '/ru',
      'de': '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://basecore.com',
    siteName: 'BaseCore',
    title: 'BaseCore | New era in crypto',
    description: 'BaseCore - a revolutionary next-generation cryptocurrency. Secure transactions, high performance, and innovative technologies.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'BaseCore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BaseCore | New era in crypto',
    description: 'BaseCore - a revolutionary next-generation cryptocurrency. Secure transactions, high performance, and innovative technologies.',
    images: ['/opengraph-image.png'],
    creator: '@basecore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'ваш-google-verification-code',
  //   yandex: 'ваш-yandex-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >

        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
