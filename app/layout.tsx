import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "BaseCore",
  description: "BaseCore | New era in crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
