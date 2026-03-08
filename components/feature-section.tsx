"use client"

import { Shield, Globe, Zap, Lock, Wifi, Clock, Ban, Gauge, Eye, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeatureSection() {
  const features = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Military-grade encryption keeps your data safe from hackers and surveillance.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Connect to servers in over 50 countries to access geo-restricted content.",
    },
    {
      icon: Ban,
      title: "Ad & Tracker Blocker",
      description: "Built-in ad blocker removes ads and trackers, saving data and improving speed.",
    },
    {
      icon: Database,
      title: "Data Compression",
      description: "Compress web traffic to save up to 90% of your data usage automatically.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "High-speed servers with compression ensure you browse faster than ever.",
    },
    {
      icon: Lock,
      title: "No Logs Policy",
      description: "We never track, store, or share your online activities or personal information.",
    },
    {
      icon: Eye,
      title: "Privacy Protection",
      description: "Block analytics, fingerprinting, and tracking scripts automatically.",
    },
    {
      icon: Wifi,
      title: "Public WiFi Protection",
      description: "Stay safe on public networks with automatic protection against threats.",
    },
    {
      icon: Gauge,
      title: "Bandwidth Saver",
      description: "Save up to 90% data with intelligent compression and ad blocking.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to assist with any issues.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Our VPN Service</h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Experience the internet without restrictions while keeping your data private and secure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

