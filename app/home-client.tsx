"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureSection from "@/components/feature-section"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function HomeClient() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <header className="w-full py-4 bg-blue-950 text-white">
        <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            SecureVPN
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="hover:text-blue-300">
              Services
            </Link>
            <Link href="/downloads" className="hover:text-blue-300">
              Downloads
            </Link>
            <Link href="/#faq" className="hover:text-blue-300">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-white hover:bg-blue-900">
              <Link href="/dashboard">Sign In</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/downloads">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Secure, Private Internet Access
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-[700px] mx-auto">
              Connect to our global network of servers and enjoy unrestricted, private internet access anywhere in the
              world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/downloads">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-300 text-blue-100 hover:bg-blue-800">
              <Link href="#how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Ready to Experience Secure, Unrestricted Internet?
            </h2>
            <p className="text-xl text-blue-100 max-w-[700px] mx-auto">
              Join thousands of satisfied users who enjoy private browsing every day.
            </p>
          </div>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-100">
            <Link href="/downloads">Get Started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
