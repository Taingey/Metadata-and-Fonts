import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: ["italic", "normal"]
});

const kamtumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-kantumruy-pro"
});

export const metadata: Metadata = {
  title: {
    template: "%s - MyShop",
    default: "Product"
  },
  description: "This is description shop",
  keywords: ["shop", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - MyShop",
      default: "Product"
    },
    description: "This is description shop",
    images: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage3.uhdpaper.com%2Fwallpaper-4k%2Fanime-girl-pancake-zero-two-darling-in-the-franxx-uhdpaper.com-4K-215.jpg&f=1&nofb=1&ipt=147dbf8eae13020d54e9f5dab4aeb3a13f25f710fa3b91c523e98d2f4378834a&ipo=images']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${kamtumruy.className}`}>
        <NextUILayout>
          <NavbarComponent />
          <Suspense fallback={<LoadingComponent />}>
            <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
          </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
