"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Ban, Database, Eye, Download, Zap, Check } from "lucide-react"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "VPN Service",
      description: "Secure, encrypted connection to protect your online privacy",
      features: [
        "Military-grade encryption",
        "50+ server locations worldwide",
        "No logs policy",
        "Kill switch protection",
        "Unlimited bandwidth",
        "Multi-device support"
      ],
      color: "blue",
      link: "/#pricing"
    },
    {
      icon: Ban,
      title: "Ad & Tracker Blocker",
      description: "Block ads, trackers, and malicious content automatically",
      features: [
        "Block ads from major networks",
        "Stop analytics tracking",
        "Prevent fingerprinting",
        "Block malware domains",
        "Real-time protection",
        "Customizable blocklists"
      ],
      color: "red",
      link: "/services/adblocker"
    },
    {
      icon: Database,
      title: "Data Compression",
      description: "Compress web traffic to save up to 90% of your data usage",
      features: [
        "Intelligent compression",
        "Save 50-90% data",
        "Faster page loading",
        "Works on all websites",
        "Automatic optimization",
        "Real-time statistics"
      ],
      color: "green",
      link: "/services/compression"
    },
    {
      icon: Eye,
      title: "Privacy Protection",
      description: "Complete privacy suite to protect your digital footprint",
      features: [
        "Block tracking cookies",
        "Prevent browser fingerprinting",
        "Hide your IP address",
        "Secure DNS queries",
        "WebRTC leak protection",
        "Privacy-focused browsing"
      ],
      color: "purple",
      link: "/services/privacy"
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Optimize your connection for maximum speed and performance",
      features: [
        "Automatic server selection",
        "Load balancing",
        "Protocol optimization",
        "Reduced latency",
        "Smart routing",
        "Performance monitoring"
      ],
      color: "yellow",
      link: "/services/speed"
    },
    {
      icon: Download,
      title: "Browser Extension",
      description: "All-in-one Chrome extension with ad blocking and compression",
      features: [
        "One-click protection",
        "Ad & tracker blocking",
        "Data compression",
        "Usage statistics",
        "Easy toggle controls",
        "Lightweight & fast"
      ],
      color: "indigo",
      link: "/services/extension"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      yellow: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
      indigo: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

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
            <Link href="/services" className="font-medium">
              Services
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
          </nav>
          <Button asChild>
            <Link href="/#pricing">Get Started</Link>
          </Button>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-[700px] mx-auto">
            Complete suite of privacy, security, and data-saving tools
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(service.color)}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Get All Services in One Package
          </h2>
          <p className="text-xl text-blue-100 max-w-[700px] mx-auto mb-8">
            Subscribe to our Premium or Ultimate plan and get access to all services
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
            <Link href="/#pricing">View Pricing</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
