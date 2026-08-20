import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Vincent Odhiambo — Digital Builder",
  description:
    "Portfolio of Vincent Odhiambo — web developer, future architect and creative builder from Kenya.",
  metadataBase: new URL("https://portfolio-sage-ten-22.vercel.app"),
  openGraph: {
    title: "Vincent Odhiambo — Digital Builder",
    description: "Selected work, capabilities and the journey from digital products toward architecture.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
