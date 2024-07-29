import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/style.css";
import Navbar from "@/woomega-nextjs/features/navbar/Navbar";
import Footer from "@/woomega-nextjs/features/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOOMEGA",
  description: "WOOMEGA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className=" mt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
