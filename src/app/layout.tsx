import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Manoj kumar",
  description: "Manoj kumar is a full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="bg-violet-900 w-72 h-72 absolute -top-64 filter right-1/2  rounded rotate-45 blur-3xl -z-10" />
      </body>
    </html>
  );
}
