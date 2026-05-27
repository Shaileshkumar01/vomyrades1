"use client"

import { Check } from "lucide-react"

const plans = [
  {
    name: "Free trial",
    price: "₹0",
    priceSub: "to get started",
    features: [
      "1 assistant",
      "Demo phone number (shared)",
      "50 free minutes",
      "All AI models included",
      "Email support",
    ],
    cta: "Start free",
    ctaStyle: "ghost",
    highlighted: false,
  },
  {
    name: "Pay-as-you-go",
    price: "₹5",
    priceSub: "per minute · no monthly fee",
    features: [
      "Unlimited assistants",
      "Live Indian phone numbers",
      "All TTS providers (Azure, ElevenLabs, Cartesia…)",
      "All AI models (GPT-4.1, Llama 3.3, Grok…)",
      "Google Sheets + Petpooja integrations",
      "Full call transcripts",
      "Priority support",
    ],
    cta: "Get started",
    ctaStyle: "primary",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSub: "volume discounts available",
    features: [
      "Everything in Pay-as-you-go",
      "Dedicated phone numbers",
      "White-label option",
      "Custom AI model fine-tuning",
      "SLA guarantee",
      "Dedicated account manager",
    ],
    cta: "Talk to us",
    ctaStyle: "ghost-dark",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1630]">
            Simple, transparent pricing
          </h2>
          <p className="text-[#6B7285] mt-3">
            No contracts. No setup fee. Pay only for what you use.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border bg-white p-6 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-[#6C47FF] shadow-lg"
                  : "border-[#E4E1F0]"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-[#6C47FF] text-white text-xs font-medium rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-semibold text-[#1A1630]">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-[#6C47FF]" : "text-[#1A1630]"
                  }`}
                >
                  {plan.price}
                </span>
                <p className="text-sm text-[#6B7285] mt-1">{plan.priceSub}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E4E1F0] my-6"></div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#6C47FF] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1A1630]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-6 w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.ctaStyle === "primary"
                    ? "bg-[#6C47FF] text-white hover:bg-[#5a3ad9]"
                    : plan.ctaStyle === "ghost"
                    ? "border border-[#6C47FF] text-[#6C47FF] hover:bg-[#6C47FF]/5"
                    : "border border-[#1A1630] text-[#1A1630] hover:bg-[#1A1630]/5"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
