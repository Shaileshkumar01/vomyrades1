"use client"

import { useState } from "react"
import { Check, UtensilsCrossed, Building2, Home, Users, Headphones } from "lucide-react"

const tabs = [
  { id: "restaurant", label: "Restaurant", icon: UtensilsCrossed },
  { id: "hotel", label: "Hotel & Hospitality", icon: Building2 },
  { id: "realestate", label: "Real Estate", icon: Home },
  { id: "recruitment", label: "Recruitment", icon: Users },
  { id: "support", label: "Customer Support", icon: Headphones },
]

const tabContent: Record<string, {
  title: string
  bullets: string[]
  conversation: { role: "ai" | "customer"; text: string }[]
}> = {
  restaurant: {
    title: "Restaurant — Order management",
    bullets: [
      "Takes orders in Hindi, English, or any regional language",
      "Upsells complementary items naturally during the call",
      "Syncs orders directly to Petpooja POS — zero manual entry",
    ],
    conversation: [
      { role: "ai", text: "Namaste! Kya aap order karna chahenge?" },
      { role: "customer", text: "Haan, ek veg biryani aur raita" },
      { role: "ai", text: "Great choice! Would you like to add a cold drink for just ₹49?" },
      { role: "customer", text: "Sure, ek Coke bhi" },
      { role: "ai", text: "Order confirmed! Total ₹349. Delivery in 25–30 minutes." },
    ],
  },
  hotel: {
    title: "Hotel & Hospitality — Guest services",
    bullets: [
      "Handles room bookings and availability checks instantly",
      "Processes special requests like extra pillows or late checkout",
      "Provides local recommendations and concierge services",
    ],
    conversation: [
      { role: "ai", text: "Good evening! How can I assist you today?" },
      { role: "customer", text: "I need to book a room for tomorrow night" },
      { role: "ai", text: "Of course! We have a deluxe room available at ₹3,500/night. Shall I proceed?" },
      { role: "customer", text: "Yes, and can I get a late checkout?" },
      { role: "ai", text: "Done! Booking confirmed with 2pm checkout. Check-in from 12pm tomorrow." },
    ],
  },
  realestate: {
    title: "Real Estate — Lead qualification",
    bullets: [
      "Qualifies leads by budget, location, and property preferences",
      "Schedules property visits and sends calendar invites",
      "Follows up with prospects automatically",
    ],
    conversation: [
      { role: "ai", text: "Hi! Thank you for your interest. What type of property are you looking for?" },
      { role: "customer", text: "2BHK in Andheri, budget around 80 lakhs" },
      { role: "ai", text: "Great! We have 3 properties matching your criteria. Would you like to schedule a visit?" },
      { role: "customer", text: "Yes, this Saturday if possible" },
      { role: "ai", text: "Perfect! I have booked you for Saturday 11am. You will receive a confirmation SMS shortly." },
    ],
  },
  recruitment: {
    title: "Recruitment — Candidate screening",
    bullets: [
      "Conducts initial screening calls at scale",
      "Collects candidate information and availability",
      "Schedules interviews and sends reminders",
    ],
    conversation: [
      { role: "ai", text: "Hi! This is a call from TechCorp regarding your application. Is now a good time?" },
      { role: "customer", text: "Yes, go ahead" },
      { role: "ai", text: "Great! Can you tell me about your experience with React and Node.js?" },
      { role: "customer", text: "I have 3 years of experience with both" },
      { role: "ai", text: "Excellent! I will schedule you for a technical interview. Does Monday 3pm work?" },
    ],
  },
  support: {
    title: "Customer Support — Issue resolution",
    bullets: [
      "Handles common queries without human intervention",
      "Escalates complex issues to the right team",
      "Tracks customer satisfaction and feedback",
    ],
    conversation: [
      { role: "ai", text: "Hello! How can I help you today?" },
      { role: "customer", text: "My order hasn't arrived yet. Order ID is 12345" },
      { role: "ai", text: "Let me check that for you... Your order is out for delivery and will arrive by 6pm today." },
      { role: "customer", text: "Oh okay, thanks!" },
      { role: "ai", text: "You are welcome! Is there anything else I can help with?" },
    ],
  },
}

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("restaurant")
  const content = tabContent[activeTab]

  return (
    <section className="bg-[#F9F8FF] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1630]">
            One platform, every industry
          </h2>
          <p className="text-[#6B7285] mt-3">
            See how Myra works across your business.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#6C47FF] text-white"
                  : "text-[#6B7285] hover:text-[#1A1630] hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Text content */}
          <div>
            {/* Industry icon */}
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
              {(() => {
                const Icon = tabs.find((t) => t.id === activeTab)?.icon || UtensilsCrossed
                return <Icon className="w-6 h-6 text-[#6C47FF]" />
              })()}
            </div>

            <h3 className="text-xl font-semibold text-[#1A1630] mb-6">
              {content.title}
            </h3>

            {/* Bullets */}
            <ul className="space-y-4 mb-8">
              {content.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#6C47FF] mt-0.5 flex-shrink-0" />
                  <span className="text-[#1A1630]">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <a href="#" className="text-[#6C47FF] font-medium hover:underline">
              See a live demo →
            </a>
          </div>

          {/* Right - Conversation card */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#E4E1F0] overflow-hidden">
            {/* Card header */}
            <div className="px-5 py-3 border-b border-[#E4E1F0]">
              <span className="inline-block px-3 py-1 bg-[#F9F8FF] rounded-full text-xs text-[#6B7285]">
                Sample conversation
              </span>
            </div>

            {/* Chat bubbles */}
            <div className="p-5 space-y-3">
              {content.conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[13px] ${
                      msg.role === "customer"
                        ? "bg-[#6C47FF] text-white rounded-tr-md"
                        : "bg-[#F7F6FB] text-[#1A1630] rounded-tl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
