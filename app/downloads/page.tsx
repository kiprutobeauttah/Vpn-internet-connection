"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Chrome, Apple, Monitor, Smartphone, Globe, Check } from "lucide-react"
import Footer from "@/components/footer"

export default function DownloadsPage() {
  const downloads = [
    {
      icon: Chrome,
      title: "Fast-Browse Extension",
      description: "Ad Blocker & Data Compression for Chrome",
      platform: "Chrome, Edge, Brave, Opera",
      version: "1.0.0",
      size: "2.5 MB",
      features: [
        "Block ads and trackers",
        "Compress web traffic",
        "Save up to 90% data",
        "Real-time statistics",
        "One-click toggle"
      ],
      downloadLink: "/fast-browse.zip",
      installGuide: "/guides/chrome-extension"
    },
    {
      icon: Chrome,
      title: "Storm AdBlocker",
      description: "Lightweight Ad & Tracker Blocker",
      platform: "Chrome, Edge, Brave, Opera",
      version: "1.0.0",
      size: "1.8 MB",
      features: [
        "Block ads and popups",
        "Block tracking scripts",
        "Whitelist support",
        "Privacy-focused",
        "Minimal resource usage"
      ],
      downloadLink: "/storm-adblocker.zip",
      installGuide: "/guides/chrome-extension"
    },
    {
      icon: Monitor,
      title: "Windows Desktop",
      description: "SecureVPN Desktop Client for Windows",
      platform: "Windows 10/11",
      version: "2.0.0",
      size: "45 MB",
      features: [
        "Full VPN functionality",
        "Built-in ad blocker",
        "Data compression",
        "Auto-connect on startup",
        "System tray integration"
      ],
      downloadLink: "/downloads/SecureVPN-Windows.exe",
      installGuide: "/guides/windows"
    },
    {
      icon: Apple,
      title: "macOS Desktop",
      description: "SecureVPN Desktop Client for macOS",
      platform: "macOS 11+",
      version: "2.0.0",
      size: "42 MB",
      features: [
        "Full VPN functionality",
        "Built-in ad blocker",
        "Data compression",
        "Menu bar integration",
        "Native Apple Silicon support"
      ],
      downloadLink: "/downloads/SecureVPN-macOS.dmg",
      installGuide: "/guides/macos"
    },
    {
      icon: Monitor,
      title: "Linux Desktop",
      description: "SecureVPN Desktop Client for Linux",
      platform: "Ubuntu, Debian, Fedora",
      version: "2.0.0",
      size: "38 MB",
      features: [
        "Full VPN functionality",
        "Built-in ad blocker",
        "Data compression",
        "CLI support",
        "System tray integration"
      ],
      downloadLink: "/downloads/SecureVPN-Linux.AppImage",
      installGuide: "/guides/linux"
    },
    {
      icon: Smartphone,
      title: "Android App",
      description: "SecureVPN Mobile App for Android",
      platform: "Android 8.0+",
      version: "1.5.0",
      size: "25 MB",
      features: [
        "Full VPN functionality",
        "Ad blocking",
        "Data compression",
        "Auto-connect",
        "Widget support"
      ],
      downloadLink: "/downloads/SecureVPN-Android.apk",
      installGuide: "/guides/android"
    },
    {
      icon: Apple,
      title: "iOS App",
      description: "SecureVPN Mobile App for iOS",
      platform: "iOS 14+",
      version: "1.5.0",
      size: "28 MB",
      features: [
        "Full VPN functionality",
        "Ad blocking",
        "Data compression",
        "Siri shortcuts",
        "Widget support"
      ],
      downloadLink: "https://apps.apple.com/app/securevpn",
      installGuide: "/guides/ios"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-blue-600">
            SecureVPN
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/downloads" className="font-medium">
              Downloads
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#pricing">Get Started</Link>
          </Button>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <Download className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Downloads
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-[700px] mx-auto">
            Get SecureVPN on all your devices
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform:</span>
                    <span className="font-medium">{item.platform}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Version:</span>
                    <span className="font-medium">{item.version}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Size:</span>
                    <span className="font-medium">{item.size}</span>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm font-medium mb-2">Features:</p>
                  <ul className="space-y-1">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button asChild className="w-full">
                  <a href={item.downloadLink} download>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/install">
                    Installation Guide
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Installation Instructions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Chrome className="h-5 w-5 mr-2" />
                    Chrome Extension
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Download the extension ZIP file</li>
                    <li>Extract the ZIP file to a folder</li>
                    <li>Open Chrome and go to chrome://extensions/</li>
                    <li>Enable "Developer mode" in the top right</li>
                    <li>Click "Load unpacked" and select the extracted folder</li>
                    <li>The extension is now installed!</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="h-5 w-5 mr-2" />
                    Desktop Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Download the installer for your operating system</li>
                    <li>Run the installer and follow the on-screen instructions</li>
                    <li>Launch the application after installation</li>
                    <li>Log in with your SecureVPN account</li>
                    <li>Connect to a server and start browsing securely</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Mobile Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Download the app from your device's app store or our website</li>
                    <li>Install the app on your device</li>
                    <li>Open the app and log in with your account</li>
                    <li>Grant necessary permissions when prompted</li>
                    <li>Connect to a server and enjoy secure browsing</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Need Help?
          </h2>
          <p className="text-xl text-blue-100 max-w-[700px] mx-auto mb-8">
            Our support team is available 24/7 to help with installation and setup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/support">Contact Support</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
              <Link href="/guides">View All Guides</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
