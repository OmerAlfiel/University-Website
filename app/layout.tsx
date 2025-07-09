import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gezira College of Technology",
  description: "Developing well-rounded graduates with essential academic, intellectual, and ethical qualities",
  generator: 'Omer Ahmed'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6LQXFGMY6N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6LQXFGMY6N');
            `,
          }}
        />
        <style>{`
          header.sticky {
            position: sticky;
            position: -webkit-sticky;
            top: 0;
            z-index: 100;
          }
        `}</style>
        <link rel="icon" href="/logo-1.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col w-full">
              <Header />
              <main className="flex-1 w-full mx-auto">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}