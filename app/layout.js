import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomHead from "./components/head";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Iwashu Jain - Designer & Content Creator",
  description: "Portfolio of Iwashu Jain - Designer & Content Creator based in Bhopal, specializing in visual storytelling and digital media.",
  openGraph: {
    title: "Portfolio of Iwashu Jain",
    description: "Designer & Content Creator",
    type: "website",
    // Setting these properties to prevent image previews
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Portfolio of Iwashu Jain",
    description: "Designer & Content Creator",
    // No images for Twitter cards
    images: [],
  },
  // Add robots meta to control crawler behavior
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <CustomHead />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
