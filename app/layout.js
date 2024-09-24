import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head"; // For adding schema markup in the head

import styles from "../app/page.module.css";

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

export const metadata = {
  title: "Salsa Casino Dans",
  description: "Drammen Salsa Skole",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Structured Data for VideoObject Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Promo video of Salsa Casino Dans",
              description:
                "Watch the promo video showcasing Salsa Casino Dans school.",
              thumbnailUrl: "/images/thumbnail.png",
              uploadDate: "2024-09-20T08:00:00+00:00",
              // contentUrl: "https://yourwebsite.com/videos/promo.mp4",
              // embedUrl: "https://yourwebsite.com/videos/promo.mp4",
              duration: "PT2M30S", // Example duration
              publisher: {
                "@type": "Organization",
                name: "Salsa Casino Dans",
                logo: {
                  "@type": "ImageObject",
                  url: "/images/thumbnail.png",
                },
              },
            }),
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
