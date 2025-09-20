import { Download, Settings, Wifi } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "1. Sign Up & Subscribe",
      description: "Choose a plan that fits your needs and create your account in just a few minutes.",
    },
    {
      icon: Settings,
      title: "2. Download & Install",
      description: "Download our easy-to-use apps for all your devices and follow the simple setup instructions.",
    },
    {
      icon: Wifi,
      title: "3. Connect & Browse",
      description: "Connect to any of our global servers with one click and enjoy secure, unrestricted internet.",
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 bg-blue-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">How It Works</h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Getting started with our VPN service is quick and easy. Follow these simple steps:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <step.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Our intuitive apps work on all major platforms including Windows, Mac, iOS, Android, and Linux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">Windows</div>
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">macOS</div>
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">iOS</div>
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">Android</div>
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">Linux</div>
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">Chrome</div>
            <div className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">Firefox</div>
          </div>
        </div>
      </div>
    </section>
  )
}

