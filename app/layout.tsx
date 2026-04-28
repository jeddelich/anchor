import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anchor - UI/UX Design",
  description: "An alternative sidebar for Headspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} h-full overflow-x-hidden flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
