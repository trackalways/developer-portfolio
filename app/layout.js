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
  // Completely disable metadata that could be used for previews
  openGraph: null,
  twitter: null,
  // Block all indexing and crawling of images
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    'max-image-preview': 'none',
    'max-snippet': 0,
    'max-video-preview': 0,
    noimageindex: true,
    notranslate: true,
    'unavailable_after': '1970-01-01T00:00:00Z',
  },
  // Ensure no automatic theme color is used
  themeColor: 'black',
  // No manifest for PWA
  manifest: null,
  // No icons
  icons: null,
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
