"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Ban, Database, Check } from "lucide-react"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: Ban,
      title: "Storm AdBlocker",
      description: "Lightweight ad and tracker blocker for faster browsing",
      features: [
        "Block ads from major networks",
        "Stop analytics tracking",
        "Prevent fingerprinting",
        "Block malware domains",
        "Real-time protection",
        "Minimal resource usage"
      ],
      color: "red",
      link: "/downloads"
    },
    {
      icon: Database,
      title: "Fast-Browse",
      description: "Ad blocker with data compression to save bandwidth",
      features: [
        "Block ads and trackers",
        "Compress web traffic",
        "Save 50-90% data",
        "Faster page loading",
        "Real-time statistics",
        "One-click toggle"
      ],
      color: "green",
      link: "/downloads"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200"
    }
    return colors[color as keyof typeof colors] || colors.red
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-blue-600">
            8QN-180
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/services" className="font-medium">
              Services
            </Link>
            <Link href="/downloads" className="text-gray-600 hover:text-gray-900">
              Downloads
            </Link>
          </nav>
          <Button asChild>
            <Link href="/downloads">Download</Link>
          </Button>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Our Extensions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-[700px] mx-auto">
            Free and open source browser extensions for ad blocking and data saving
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <Button asChild className="w-full">
                  <Link href={service.link}>Download Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Free and Open Source
          </h2>
          <p className="text-xl text-blue-100 max-w-[700px] mx-auto mb-8">
            Both extensions are completely free with no hidden costs. Download and start saving data today.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
            <Link href="/downloads">Download Extensions</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
