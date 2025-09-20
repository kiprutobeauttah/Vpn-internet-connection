import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Digital Nomad",
      content:
        "I travel constantly for work, and this VPN has been a lifesaver. I can access all my accounts securely from anywhere in the world. The daily subscription option is perfect for my unpredictable schedule.",
      avatar: "AJ",
    },
    {
      name: "Sarah Chen",
      role: "Privacy Advocate",
      content:
        "After trying several VPN services, I've finally found one that truly respects privacy. No logs, fast connections, and the ability to access content from my home country while traveling abroad. Worth every penny!",
      avatar: "SC",
    },
    {
      name: "Michael Torres",
      role: "Streaming Enthusiast",
      content:
        "I subscribe whenever I need to access region-locked content. The speeds are amazing - no buffering even when streaming in 4K. The affordable daily rate means I only pay when I actually need the service.",
      avatar: "MT",
    },
    {
      name: "Emma Wilson",
      role: "Remote Worker",
      content:
        "Working remotely means I'm often on public WiFi. This VPN gives me peace of mind knowing my work communications are secure. The app is so easy to use, just one click and I'm protected.",
      avatar: "EW",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Users Say</h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Don't just take our word for it. Here's what our customers have to say about our service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10 border-2 border-blue-500">
                    <AvatarFallback className="bg-blue-100 text-blue-700">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

