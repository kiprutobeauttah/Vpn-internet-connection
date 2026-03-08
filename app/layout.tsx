import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'arial']
})

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 0

export const metadata = {
  title: "8QN-180 - Free Ad Blocker & Data Saver Extensions",
  description:
    "Download Storm AdBlocker and Fast-Browse extensions. Block ads, stop trackers, and save up to 90% data. Free and open source browser extensions.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

