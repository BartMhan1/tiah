import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIAH",
  description: "A Ghanaian online store for local fashion and foodstuffs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
