"use client"

import { Mic, Globe, Plug, Shield, Zap, Clock } from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "Sounds human. Responds instantly.",
    description: "Sub-500ms response times with natural pauses, interruption handling, and context memory across the call.",
    visual: "latency",
    reverse: false,
  },
  {
    icon: Globe,
    title: "32+ Indian languages, out of the box.",
    description: "From Hindi and Tamil to Bhojpuri and Marathi — your agent switches languages mid-call if needed.",
    visual: "languages",
    reverse: true,
  },
  {
    icon: Plug,
    title: "Plugs into your existing systems.",
    description: "Connect to Google Sheets, Petpooja POS, or any REST API. Your agent reads menus, places orders, and logs data automatically.",
    visual: "integrations",
    reverse: false,
  },
  {
    icon: Shield,
    title: "Deploy in minutes, not months.",
    description: "No engineers needed. Create an assistant, set its persona, assign a phone number, and go live — all from one dashboard.",
    visual: "timeline",
    reverse: true,
  },
]

const languages = ["Hindi", "Tamil", "Telugu", "Kannada", "Bengali", "Marathi", "Gujarati", "Punjabi"]

function LatencyVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#6B7285] w-28">Human agent</span>
        <div className="flex-1 bg-[#E4E1F0] rounded-full h-3 overflow-hidden">
          <div className="bg-[#F59E0B] h-full rounded-full" style={{ width: "85%" }}></div>
        </div>
        <span className="text-sm font-medium text-[#1A1630] w-20 text-right">2.1s avg</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#6B7285] w-28">Vomyra</span>
        <div className="flex-1 bg-[#E4E1F0] rounded-full h-3 overflow-hidden">
          <div className="bg-[#6C47FF] h-full rounded-full" style={{ width: "19%" }}></div>
        </div>
        <span className="text-sm font-medium text-[#6C47FF] w-20 text-right">0.4s avg</span>
      </div>
    </div>
  )
}

function LanguagesVisual() {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => (
        <span
          key={lang}
          className="px-3 py-1.5 bg-white rounded-full text-sm text-[#1A1630] border border-[#E4E1F0] shadow-sm"
        >
          {lang}
        </span>
      ))}
    </div>
  )
}

function IntegrationsVisual() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex items-center gap-3">
        {/* Google Sheets */}
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E1F0] flex items-center justify-center shadow-sm">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" rx="2" fill="#0F9D58"/>
            <rect x="6" y="8" width="12" height="2" fill="white"/>
            <rect x="6" y="12" width="12" height="2" fill="white"/>
            <rect x="6" y="16" width="8" height="2" fill="white"/>
          </svg>
        </div>
        {/* Petpooja */}
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E1F0] flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-[#FF6B35]">PP</span>
        </div>
        {/* REST API */}
        <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E1F0] flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-[#6B7285]">API</span>
        </div>
      </div>
      {/* Connector line */}
      <div className="w-8 h-0.5 bg-[#E4E1F0]"></div>
      {/* Vomyra logo */}
      <div className="w-12 h-12 rounded-xl bg-[#6C47FF] flex items-center justify-center">
        <span className="text-white text-sm font-bold">V</span>
      </div>
    </div>
  )
}

function TimelineVisual() {
  const steps = [
    { num: "1", label: "Create assistant" },
    { num: "2", label: "Assign number" },
    { num: "3", label: "Go live" },
  ]
  return (
    <div className="flex items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={step.num} className="flex items-center">
          <div className="flex items-center gap-2 px-3 py-2 bg-[#6C47FF] rounded-full">
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs text-white font-medium">
              {step.num}
            </span>
            <span className="text-xs text-white font-medium">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <svg className="w-6 h-6 text-[#6C47FF] mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

function getVisual(type: string) {
  switch (type) {
    case "latency":
      return <LatencyVisual />
    case "languages":
      return <LanguagesVisual />
    case "integrations":
      return <IntegrationsVisual />
    case "timeline":
      return <TimelineVisual />
    default:
      return null
  }
}

export function FeaturesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[13px] uppercase tracking-wider text-[#6C47FF] font-semibold">
            Why Vomyra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1630] mt-3">
            Everything your phone agent needs
          </h2>
        </div>

        {/* Features */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  feature.reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Text content */}
                <div className={feature.reverse ? "md:[direction:ltr]" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-[#F7F6FB] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#6C47FF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1A1630] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7285] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Visual */}
                <div className={`bg-[#F9F8FF] rounded-2xl p-8 ${feature.reverse ? "md:[direction:ltr]" : ""}`}>
                  {getVisual(feature.visual)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
