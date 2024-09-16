import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anton Filippovich",
    jobTitle: "Photographer and Videographer",
    description:
      "Professional videographer and photographer based in Minsk, Belarus.",
    url: "https://antonfilka.by",
    sameAs: ["https://www.instagram.com/antonfilka_photo"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Minsk",
      addressCountry: "Belarus",
    },
    image: "https://antonfilka.by/assets/profileImg.jpeg",
    telephone: "+375-29-619-9430",
    email: "antonfilippovich.job@gmail.com",
  };

  return (
    <html lang="en">
      <Script
        id="ld+"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpeedInsights />
      <GoogleAnalytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
