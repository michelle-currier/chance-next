import type { Metadata } from "next";
import { quicksand, cherryBombOne, luckiestGuy } from "@/app/utils/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chance in Hell Snoballs",
  description:
    "All handmade syrups that change daily. Chance in Hell is a queer owned snoball shop in the bywater. Located at 805 Louisa St. Suite 102, New Orleans, LA 70117. Hours are Thursday - Monday 12pm - 7pm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={raleway.className}>
    <html lang="en">
      <body
        className={` ${quicksand} h-full flex flex-col w-full mx-auto`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
