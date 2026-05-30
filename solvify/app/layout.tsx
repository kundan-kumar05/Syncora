import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syncora – Intelligent ERP Software & Business Solutions",
  description:
    "Syncora is a leading ERP software company offering end-to-end business automation, digital transformation, and enterprise solutions across 50+ industries worldwide.",
  keywords:
    "ERP software, business automation, digital transformation, enterprise solutions, Syncora, CRM, HRM, inventory, manufacturing ERP",
  openGraph: {
    title: "Syncora – Intelligent ERP Software & Business Solutions",
    description:
      "Transform your business with Syncora's intelligent ERP solutions. Serving 500+ clients across 50+ industries.",
    type: "website",
    url: "https://syncora.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syncora – ERP Software & Business Solutions",
    description: "Intelligent ERP solutions for enterprise growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
