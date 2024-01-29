import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devoteam Movie Search",
  description: "A movie metadata search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
