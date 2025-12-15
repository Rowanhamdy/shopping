import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Shop.Co",
    template: "%s | Shop.Co",
  },
  description:
    "Shop.Co is your destination for modern fashion. Discover high-quality clothing, top brands, and styles that match your lifestyle.",

  keywords: [
    "Shop.Co",
    "fashion store",
    "online shopping",
    "clothing",
    "ecommerce",
    "men fashion",
    "women fashion",
  ],

  openGraph: {
    title: "Shop.Co",
    description:
      "Discover high-quality clothing, top brands, and styles that match your lifestyle.",
    url: "https://shopping-rosy-theta.vercel.app",
    siteName: "Shop.Co",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  font-satoshi`}
        cz-shortcut-listen="true"

      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
