import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Baykar UI Case Project",
  description: "Baykar UI design project as pixel perfect by Eray Ates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${roboto.className} subpixel-antialiased`}>
        <div className="max-w-screen-xl mx-auto flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
