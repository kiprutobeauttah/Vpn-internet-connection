"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState<"daily" | "weekly" | "monthly">("daily")

  const plans = [
    {
      name: "Basic",
      description: "Essential protection for casual users",
      dailyPrice: 1.99,
      weeklyPrice: 9.99,
      monthlyPrice: 29.99,
      features: [
        "Access to servers in 10 countries",
        "Connect 2 devices simultaneously",
        "Standard encryption",
        "24/7 email support",
        "No bandwidth limits",
      ],
    },
    {
      name: "Premium",
      description: "Enhanced security for regular users",
      dailyPrice: 2.99,
      weeklyPrice: 14.99,
      monthlyPrice: 49.99,
      features: [
        "Access to servers in 30 countries",
        "Connect 5 devices simultaneously",
        "Military-grade encryption",
        "24/7 priority support",
        "No bandwidth limits",
        "Ad and malware blocking",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      description: "Complete protection for power users",
      dailyPrice: 3.99,
      weeklyPrice: 19.99,
      monthlyPrice: 69.99,
      features: [
        "Access to servers in all 50+ countries",
        "Connect 10 devices simultaneously",
        "Military-grade encryption",
        "24/7 priority support",
        "No bandwidth limits",
        "Ad and malware blocking",
        "Dedicated IP option",
        "Double VPN routing",
      ],
    },
  ]

  const getPrice = (plan: (typeof plans)[0]) => {
    switch (billingCycle) {
      case "daily":
        return plan.dailyPrice
      case "weekly":
        return plan.weeklyPrice
      case "monthly":
        return plan.monthlyPrice
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button
            onClick={() => setBillingCycle("daily")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              billingCycle === "daily" ? "bg-white shadow-sm" : "text-gray-500"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setBillingCycle("weekly")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              billingCycle === "weekly" ? "bg-white shadow-sm" : "text-gray-500"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              billingCycle === "monthly" ? "bg-white shadow-sm" : "text-gray-500"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`flex flex-col ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">${getPrice(plan).toFixed(2)}</span>
                <span className="text-gray-500 ml-2">
                  /{billingCycle === "daily" ? "day" : billingCycle === "weekly" ? "week" : "month"}
                </span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                <Link href="/subscribe">Choose {plan.name}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        All plans include a 7-day money-back guarantee. No questions asked.
      </p>
    </div>
  )
}

