import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Prix Peinture Belgique 2026 — Devis Peintre Intérieur & Extérieur",
    template: "%s | Prix Peinture Belgique",
  },
  description: "Comparez les prix de peinture en Belgique 2026. Intérieur dès 15€/m², extérieur, plafonds, boiseries, papier peint. Devis gratuit de peintres professionnels certifiés.",
  keywords: "prix peinture belgique, peintre belgique, devis peinture, peinture interieure prix, peinture exterieure, peintre professionnel belgique, tarif peintre 2026",
  metadataBase: new URL('https://prix-peinture-belgique.be'),
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'Prix Peinture Belgique',
    title: 'Prix Peinture Belgique 2026 — Devis Peintre Intérieur & Extérieur',
    description: 'Comparez les prix de peinture en Belgique 2026. Intérieur dès 15€/m², extérieur, plafonds, boiseries. Devis gratuit de peintres professionnels.',
    url: 'https://prix-peinture-belgique.be/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prix Peinture Belgique 2026 — Devis Gratuit',
    description: 'Comparez les prix de peinture en Belgique. Intérieur, extérieur, plafonds, boiseries. Devis gratuit de peintres certifiés.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://prix-peinture-belgique.be/',
    languages: {
      'fr': 'https://prix-peinture-belgique.be/',
      'nl': 'https://prix-peinture-belgique.be/nl/',
    },
  },
  verification: {
    // Add your GSC verification code here when ready
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Prix Peinture Belgique",
              "url": "https://prix-peinture-belgique.be",
              "logo": "https://prix-peinture-belgique.be/icon.svg",
              "description": "Comparateur de prix de peinture en Belgique. Intérieur, extérieur, plafonds, boiseries, papier peint. Devis gratuits de peintres professionnels.",
              "areaServed": {
                "@type": "Country",
                "name": "Belgique",
                "alternateName": "België"
              },
              "knowsLanguage": ["fr", "nl"],
              "sameAs": []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Prix Peinture Belgique",
              "alternateName": "Prijs Schilder België",
              "url": "https://prix-peinture-belgique.be",
              "description": "Comparez les prix de peinture en Belgique. Intérieur, extérieur, plafonds, boiseries : devis gratuits de peintres certifiés.",
              "inLanguage": ["fr", "nl"],
              "publisher": {
                "@type": "Organization",
                "name": "Prix Peinture Belgique",
                "url": "https://prix-peinture-belgique.be"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://prix-peinture-belgique.be/peintre/{search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
