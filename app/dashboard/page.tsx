"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Globe, Power, Settings, CreditCard, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-blue-600">
            SecureVPN
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="font-medium">
              Dashboard
            </Link>
            <Link href="/dashboard/servers" className="text-gray-600 hover:text-gray-900">
              Servers
            </Link>
            <Link href="/dashboard/settings" className="text-gray-600 hover:text-gray-900">
              Settings
            </Link>
            <Link href="/dashboard/account" className="text-gray-600 hover:text-gray-900">
              Account
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Premium Plan</span>
            <Button variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Connection Card */}
            <Card className="border-2 border-blue-100">
              <CardHeader className="pb-4">
                <CardTitle>VPN Connection</CardTitle>
                <CardDescription>Connect to secure your internet traffic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-6 space-y-6">
                  <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center ${isConnected ? "bg-green-100" : "bg-gray-100"}`}
                  >
                    <Power className={`h-16 w-16 ${isConnected ? "text-green-500" : "text-gray-400"}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">{isConnected ? "Connected" : "Disconnected"}</h3>
                    {isConnected && <p className="text-gray-500">Connected to New York, USA for 00:45:12</p>}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${isConnected ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
                  onClick={() => setIsConnected(!isConnected)}
                >
                  {isConnected ? "Disconnect" : "Connect Now"}
                </Button>
              </CardFooter>
            </Card>

            {/* Server Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Server Selection</CardTitle>
                <CardDescription>Choose from our global network of servers</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="recommended">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="recommended">Recommended</TabsTrigger>
                    <TabsTrigger value="all">All Locations</TabsTrigger>
                    <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  </TabsList>
                  <TabsContent value="recommended" className="space-y-4">
                    {["New York, USA", "London, UK", "Frankfurt, Germany", "Tokyo, Japan"].map((location, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center">
                          <Globe className="h-5 w-5 text-blue-500 mr-3" />
                          <span>{location}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-3">45ms</span>
                          <Button variant="outline" size="sm">
                            Connect
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="all">
                    <p className="text-gray-500">Browse our full list of 500+ servers in 50+ countries.</p>
                  </TabsContent>
                  <TabsContent value="favorites">
                    <p className="text-gray-500">You haven't added any servers to your favorites yet.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Subscription Info */}
            <Card>
              <CardHeader>
                <CardTitle>Your Subscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-medium text-lg mb-1">Premium Plan</div>
                  <div className="text-sm text-gray-500">Daily subscription</div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Next billing:</span> Today, 11:59 PM
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="font-medium mb-2">Plan features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Shield className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Access to servers in 30 countries</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Connect 5 devices simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span>Military-grade encryption</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Manage Billing
                </Button>
                <Button variant="outline" size="sm">
                  Upgrade Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/settings">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/devices">
                    <Shield className="h-4 w-4 mr-2" />
                    My Devices
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard/support">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Get Support
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Data Used</span>
                      <span>1.2 GB / Unlimited</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Connected Devices</span>
                      <span>2 / 5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

