import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudresh.MR | AI & Data Science Portfolio",
  description: "Modern portfolio of Rudresh.MR, an Artificial Intelligence and Data Science student specializing in ML, DL, and Predictive Analytics.",
  keywords: ["AI Student", "Data Science Portfolio", "Machine Learning Portfolio", "Rudresh.MR", "Karpagam College of Engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${spaceMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
