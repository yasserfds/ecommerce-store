import "./globals.css";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer"

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "AR - Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
