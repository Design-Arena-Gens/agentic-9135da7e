import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Digital Pulse Studio",
  description: "تصميم بوست احترافي لشركة تسويق الكتروني"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${font.variable} font-sans bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
