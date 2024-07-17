import type { Metadata } from "next";
import "@/woomega/styles/styles.css";

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
      <body className={""}>{children}</body>
    </html>
  );
}
