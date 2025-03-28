import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: {
      url: "/maskable/maskable_icon_x512.png",
      width: 512,
      height: 512,
    },
  },
  robots: {
    index: true,
    follow: false,
    noimageindex: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased font-fira-code bg-[#1a1a1a]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>

      <GoogleAnalytics gaId={process.env.GA_MEASUREMENT_ID} />
    </html>
  );
}
