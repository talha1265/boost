import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brand Boost",
  description: "This is seo agency which works on search engine optimization SEO as well as Search Engine Marketing SERM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
       <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
