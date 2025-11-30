import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./calendar-custom.css";
import Navbar from "@/components/main/navbar-top";
import { ThemeProvider } from "@/components/ui/theme-provider";
import DockFooter, { links } from "@/components/main/dock-footer";
import CanvasCursor from "@/components/ui/canvas-cursor";
import Footer from "@/components/main/footer";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Siddhartha Singh | Portfolio Next.js Developer | Inators Portfolio",
  description:
    "This is Siddhartha Singh A Next.js Full-Stack web developer, with a strong inclination towards challenging projects, designing and developing web applications. My Primary tech stack includes Next.js, ReactJs, Tailwind, Node.js, Express.js & MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar items={links} />
          <div className="md:pb-24">{children}</div>
          <Toaster />
          <ToastContainer />
          <div className="md:fixed md:bottom-0 fixed bottom-[10vh] left-5 md:left-0 w-full z-[100]">
            <DockFooter />
          </div>
          <div className="">
            <Footer />
          </div>
          {/* <CanvasCursor /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
