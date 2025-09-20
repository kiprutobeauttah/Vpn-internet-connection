"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How does the daily subscription work?",
      answer:
        "Our daily subscription allows you to pay only for the days you need VPN service. You can subscribe for as little as one day at a time, and your subscription will automatically end after the period you've paid for. There's no need to remember to cancel.",
    },
    {
      question: "Is my online activity tracked or logged?",
      answer:
        "No. We maintain a strict no-logs policy, which means we don't track, collect, or share your browsing history, traffic destination, data content, or DNS queries. We only process the minimum amount of data required to provide our service.",
    },
    {
      question: "How many devices can I connect simultaneously?",
      answer:
        "The number of simultaneous connections depends on your subscription plan. Our Basic plan allows 2 devices, Premium allows 5 devices, and Ultimate allows up to 10 devices to connect at the same time.",
    },
    {
      question: "Will a VPN slow down my internet connection?",
      answer:
        "While all VPNs can potentially reduce speed due to the encryption process, our high-speed servers are optimized to minimize this impact. Most users experience minimal to no noticeable difference in speed for regular browsing, streaming, and downloading.",
    },
    {
      question: "Can I use the VPN for streaming services?",
      answer:
        "Yes, our VPN works with most major streaming services, allowing you to access content from different regions. However, please note that using a VPN to access streaming services may violate their terms of service.",
    },
    {
      question: "Is it legal to use a VPN?",
      answer:
        "VPNs are legal in most countries, but there are some exceptions. It's your responsibility to ensure that using a VPN is legal in your country. Regardless of legality, we do not condone using our service for illegal activities.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and various cryptocurrencies for enhanced privacy. All transactions are processed securely, and we don't store your full payment details.",
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer:
        "Yes, we offer a 7-day money-back guarantee on all subscription plans. If you're not satisfied with our service for any reason, you can request a full refund within 7 days of your purchase.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-gray-500 md:text-xl max-w-[700px]">
            Find answers to common questions about our VPN service.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

