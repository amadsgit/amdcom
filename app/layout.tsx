import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amdcom.vercel.app"), // GANTI DOMAIN ASLI

  title: {
    default: "AMD COM | IT Solution & Computer Service",
    template: "%s | AMD COM",
  },

  description:
    "AMD COM adalah penyedia layanan IT profesional: software development, service laptop & komputer, jaringan, CCTV, dan solusi teknologi bisnis.",

  keywords: [
    "AMD COM",
    "jasa IT",
    "service komputer",
    "service laptop",
    "software house",
    "jaringan komputer",
    "CCTV",
    "IT Solution Indonesia",
  ],

  authors: [{ name: "AMD COM" }],
  creator: "AMD COM",
  publisher: "AMD COM",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://amdcom.id", // GANTI DOMAIN
    siteName: "AMD COM",
    title: "AMD COM | IT Solution & Computer Service",
    description:
      "Solusi IT profesional untuk bisnis dan personal. Software, jaringan, service komputer, dan CCTV.",
    images: [
      {
        url: "/og-image.jpg", // SIAPKAN GAMBAR 1200x630
        width: 1200,
        height: 630,
        alt: "AMD COM IT Solution",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AMD COM | IT Solution",
    description:
      "Penyedia layanan IT profesional: software, jaringan, service komputer & laptop.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://amdcom.id", // GANTI DOMAIN
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
