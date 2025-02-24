import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/src/components/Footer/Footer";
// import Navbar from "@/src/components/Navbar/Navbar";

// import GoogleTranslateElement from "@/src/components/GoogleTranslateElement/GoogleTranslateElement";
import Providers from "./providers";

import "./globals.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/src/components/Navbar/Navbar"), { ssr: false });


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Educify",
  description: "Educify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyANzt2GhKtrBmvFzJpb0W2qwGyAR0blhK0&libraries=places"
          async
          defer
        ></script>
      </head>
      <body className={`${inter.className} ${poppins.className}`}>
        <Providers>
          <Navbar />
          {/* <GoogleTranslateElement /> */}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
