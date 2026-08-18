import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Vincent Odhiambo — Web Developer & Future Architect",
  description:
    "Portfolio of Vincent Odhiambo — student, web developer, aspiring architect and children's rights advocate.",
  metadataBase: new URL("https://vince551.github.io/portfolio/"),
  openGraph: {
    title: "Vincent Odhiambo — Web Developer & Future Architect",
    description:
      "Selected work, skills, leadership and the journey toward architecture.",
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