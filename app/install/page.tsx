"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FolderOpen, Settings, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function InstallPage() {
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
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
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
            Installation Guide
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-[700px] mx-auto">
            Follow these simple steps to install our extensions
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-6 w-6 text-blue-600" />
                Step 1: Download the Extension
              </CardTitle>
              <CardDescription>
                Download the ZIP file for your chosen extension
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Storm AdBlocker</p>
                    <p className="text-sm text-gray-600">Lightweight ad and tracker blocker</p>
                  </div>
                  <Button asChild>
                    <a href="/storm-adblocker.zip" download>Download</a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Fast-Browse</p>
                    <p className="text-sm text-gray-600">Ad blocker with data compression</p>
                  </div>
                  <Button asChild>
                    <a href="/fast-browse.zip" download>Download</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="h-6 w-6 text-blue-600" />
                Step 2: Extract the ZIP File
              </CardTitle>
              <CardDescription>
                Extract the downloaded ZIP file to a folder on your computer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Right-click the ZIP file and select "Extract All" (Windows)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Or double-click the ZIP file (macOS)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Remember the location where you extracted the files</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-blue-600" />
                Step 3: Open Chrome Extensions Page
              </CardTitle>
              <CardDescription>
                Navigate to Chrome's extension management page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Open Google Chrome browser</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Type <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions/</code> in the address bar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Or click the three dots menu → Extensions → Manage Extensions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-blue-600" />
                Step 4: Enable Developer Mode
              </CardTitle>
              <CardDescription>
                Turn on Developer mode to install unpacked extensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Look for the "Developer mode" toggle in the top right corner</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Click the toggle to enable Developer mode</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>New buttons will appear: "Load unpacked", "Pack extension", "Update"</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Step 5: Load the Extension
              </CardTitle>
              <CardDescription>
                Install the extension from the extracted folder
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Click the "Load unpacked" button</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Navigate to the folder where you extracted the extension</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Select the folder and click "Select Folder"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>The extension is now installed and active!</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Troubleshooting</h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• If you see errors, make sure you selected the correct folder containing manifest.json</li>
              <li>• The extension must remain in the folder - don't delete it after installation</li>
              <li>• If the extension disappears after restart, reload it from the same folder</li>
              <li>• For automatic updates, consider publishing to Chrome Web Store</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-blue-900 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Need Help?
          </h2>
          <p className="text-xl text-blue-100 max-w-[700px] mx-auto mb-8">
            If you encounter any issues during installation, feel free to reach out
          </p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
            <a href="mailto:kiprutobeauttah@gmail.com">Contact Support</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
