import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteBackground } from "@/components/site-background";
import { LanguageProvider } from "@/lib/language-context";
import { personal } from "@/data/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.role}`,
  description:
    "Portfolio von Mohammad El Zein, Informatikstudent an der TU Dortmund — Software Engineering, DevOps und KI.",
  openGraph: {
    title: `${personal.name} — ${personal.role}`,
    description:
      "Portfolio von Mohammad El Zein, Informatikstudent an der TU Dortmund — Software Engineering, DevOps und KI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <SiteBackground />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
