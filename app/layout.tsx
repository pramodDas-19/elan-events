import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Élan Events | Beautifully Planned. Effortlessly Remembered.",
  description: "Élan Events creates beautifully planned weddings, corporate events, private celebrations and destination experiences.",
  openGraph: {
    title: "Élan Events | Beautifully Planned. Effortlessly Remembered.",
    description: "Élan Events creates beautifully planned weddings, corporate events, private celebrations and destination experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
