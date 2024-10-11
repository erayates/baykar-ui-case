import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
      <body className={`${roboto.className} subpixel-antialiased bg-white md:bg-bodyGradient`}>
        <Header />
        <main className="w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
