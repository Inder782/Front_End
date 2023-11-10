import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
const Roboto = Roboto_Condensed({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Invtool",
  description: "Ai for investors",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${Roboto.className} dark:bg-black`}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
