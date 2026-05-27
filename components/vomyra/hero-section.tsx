"use client"

import { Phone, X } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-[90vh] bg-white flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content (55%) */}
          <div className="lg:col-span-7">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1630] text-white text-[13px] mb-6">
              <span>Built for India</span>
              <span className="text-white/60">|</span>
              <span>32+ languages</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[48px] font-bold text-[#1A1630] leading-[1.1] tracking-tight mb-6">
              Your business, always on the phone.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-[#6B7280] max-w-[480px] leading-relaxed mb-8">
              Deploy AI voice agents that handle calls, book appointments, and close 
              leads — 24/7, in any Indian language. No coding needed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="h-12 px-6 bg-[#6C47FF] text-white font-medium rounded-lg hover:bg-[#5a3ad9] transition-colors">
                Start for free
              </button>
              <button className="h-12 px-6 text-[#6C47FF] font-medium rounded-lg border border-[#6C47FF]/20 hover:bg-[#6C47FF]/5 transition-colors">
                See how it works →
              </button>
            </div>

            {/* Social proof */}
            <p className="text-[13px] text-[#6B7280]">
              Trusted by 500+ businesses · ₹5/min · No setup fee
            </p>
          </div>

          {/* Right column - Phone mockup (45%) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-xl border border-[#E4E1F0] p-4 max-w-[360px] mx-auto">
              {/* Phone header */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-3">
                  {/* Logo mark */}
                  <div className="w-8 h-8 rounded-lg bg-[#6C47FF] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <span className="text-sm font-medium text-[#1A1630]">Restaurant Myra</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="text-xs text-[#10B981] font-medium">Live</span>
                </div>
              </div>

              {/* Chat transcript */}
              <div className="bg-[#F9F8FF] rounded-2xl p-4 space-y-3 min-h-[240px]">
                {/* AI message */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-[#1A1630]">Namaste! Aaj ka special kya lena chahenge?</p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#6C47FF] rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[85%]">
                    <p className="text-sm text-white">Paneer butter masala aur 2 naan</p>
                  </div>
                </div>

                {/* AI message */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-[#1A1630]">Perfect! Order placed. Estimated delivery: 30 mins.</p>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between mt-4 px-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#EF4444] text-white text-sm font-medium rounded-full hover:bg-[#DC2626] transition-colors">
                  <X className="w-4 h-4" />
                  End call
                </button>
                <span className="text-sm font-mono text-[#6B7285]">00:42</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
