"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SubscribePage() {
  const [plan, setPlan] = useState("premium")
  const [billingCycle, setBillingCycle] = useState("daily")

  const planPrices = {
    basic: {
      daily: 1.99,
      weekly: 9.99,
      monthly: 29.99,
    },
    premium: {
      daily: 2.99,
      weekly: 14.99,
      monthly: 49.99,
    },
    ultimate: {
      daily: 3.99,
      weekly: 19.99,
      monthly: 69.99,
    },
  }

  const getPrice = () => {
    return planPrices[plan as keyof typeof planPrices][billingCycle as keyof typeof planPrices.basic]
  }

  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Complete Your Subscription</CardTitle>
              <CardDescription>
                Choose your plan and payment method to get started with secure browsing.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Select Your Plan</h3>
                <RadioGroup
                  defaultValue={plan}
                  onValueChange={setPlan}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${plan === "basic" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    <RadioGroupItem value="basic" id="basic" className="sr-only" />
                    <Label htmlFor="basic" className="cursor-pointer">
                      <div className="font-medium mb-1">Basic</div>
                      <div className="text-sm text-gray-500">Essential protection</div>
                    </Label>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${plan === "premium" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    <RadioGroupItem value="premium" id="premium" className="sr-only" />
                    <Label htmlFor="premium" className="cursor-pointer">
                      <div className="font-medium mb-1">Premium</div>
                      <div className="text-sm text-gray-500">Enhanced security</div>
                    </Label>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${plan === "ultimate" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    <RadioGroupItem value="ultimate" id="ultimate" className="sr-only" />
                    <Label htmlFor="ultimate" className="cursor-pointer">
                      <div className="font-medium mb-1">Ultimate</div>
                      <div className="text-sm text-gray-500">Complete protection</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Billing Cycle</h3>
                <RadioGroup
                  defaultValue={billingCycle}
                  onValueChange={setBillingCycle}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${billingCycle === "daily" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    <RadioGroupItem value="daily" id="daily" className="sr-only" />
                    <Label htmlFor="daily" className="cursor-pointer">
                      <div className="font-medium mb-1">Daily</div>
                      <div className="text-sm text-gray-500">
                        ${planPrices[plan as keyof typeof planPrices].daily.toFixed(2)}/day
                      </div>
                    </Label>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${billingCycle === "weekly" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    <RadioGroupItem value="weekly" id="weekly" className="sr-only" />
                    <Label htmlFor="weekly" className="cursor-pointer">
                      <div className="font-medium mb-1">Weekly</div>
                      <div className="text-sm text-gray-500">
                        ${planPrices[plan as keyof typeof planPrices].weekly.toFixed(2)}/week
                      </div>
                    </Label>
                  </div>
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${billingCycle === "monthly" ? "border-blue-500 bg-blue-50" : ""}`}
                  >
                    <RadioGroupItem value="monthly" id="monthly" className="sr-only" />
                    <Label htmlFor="monthly" className="cursor-pointer">
                      <div className="font-medium mb-1">Monthly</div>
                      <div className="text-sm text-gray-500">
                        ${planPrices[plan as keyof typeof planPrices].monthly.toFixed(2)}/month
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Account Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Create Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Method</h3>
                <Tabs defaultValue="card">
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    <TabsTrigger value="card">Credit Card</TabsTrigger>
                    <TabsTrigger value="paypal">PayPal</TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Name on Card</Label>
                      <Input id="card-name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="pt-4">
                    <p className="text-sm text-gray-500 mb-4">
                      You will be redirected to PayPal to complete your payment securely.
                    </p>
                    <Button className="w-full">Continue with PayPal</Button>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Complete Subscription</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium capitalize">{plan} Plan</span>
                <span>
                  ${getPrice().toFixed(2)}/
                  {billingCycle === "daily" ? "day" : billingCycle === "weekly" ? "week" : "month"}
                </span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${getPrice().toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  You will be charged ${getPrice().toFixed(2)} for your {billingCycle} subscription.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3 mt-4">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Secure Payment</h4>
                  <p className="text-sm text-blue-600">
                    All transactions are secure and encrypted. Your payment information is never stored on our servers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">What's included:</h4>
              <ul className="space-y-2 text-sm">
                {plan === "basic" && (
                  <>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Access to servers in 10 countries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Connect 2 devices simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Standard encryption</span>
                    </li>
                  </>
                )}

                {plan === "premium" && (
                  <>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Access to servers in 30 countries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Connect 5 devices simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Military-grade encryption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Ad and malware blocking</span>
                    </li>
                  </>
                )}

                {plan === "ultimate" && (
                  <>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Access to servers in all 50+ countries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Connect 10 devices simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Military-grade encryption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Dedicated IP option</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Double VPN routing</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <p className="text-sm text-gray-500">
              By subscribing, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

