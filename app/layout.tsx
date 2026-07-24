import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TerminalProvider } from "@/components/TerminalProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dhruvesh Patil",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning on html prevents next-themes injection errors
    <html lang="en" suppressHydrationWarning>
      {/* Adding it to the body as well helps prevent errors from browser extensions injecting scripts */}
      <body className={`${dmSans.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
          disableTransitionOnChange
        >
          <TerminalProvider>
            <Navbar />
            {children}
            <BackToTop />
          </TerminalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}