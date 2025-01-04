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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-red-200`}
      >
        {children}
      </body>
    </html>
  );
}