"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const voices = [
  { name: "Aarti", provider: "Azure", code: "hi-IN-AartiNeural", lang: "Hindi", gender: "female" },
  { name: "Arjun", provider: "Azure", code: "hi-IN-ArjunNeural", lang: "Hindi", gender: "male" },
  { name: "Aanya", provider: "Azure", code: "en-IN-AartiNeural", lang: "English", gender: "female" },
  { name: "Vikram", provider: "Azure", code: "en-IN-ArjunNeural", lang: "English", gender: "male" },
  { name: "Aarav", provider: "Azure", code: "hi-IN-AaravNeural", lang: "Hindi", gender: "male" },
  { name: "Ananya", provider: "Azure", code: "hi-IN-AnanyaNeural", lang: "Hindi", gender: "female" },
  { name: "Kavya", provider: "Azure", code: "hi-IN-KavyaNeural", lang: "Hindi", gender: "female" },
  { name: "Kunal", provider: "Azure", code: "hi-IN-KunalNeural", lang: "Hindi", gender: "male" },
  { name: "Madhur", provider: "Azure", code: "hi-IN-MadhurNeural", lang: "Hindi", gender: "male" },
  { name: "Rehaan", provider: "Azure", code: "hi-IN-RehaanNeural", lang: "Hindi", gender: "male" },
]

export function VoiceTab() {
  const [rate, setRate] = useState(20)

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#1A1630]">Voice</h3>
          <p className="text-sm text-[#6B7285] mt-1">
            Configure voice settings for the Assistant.
          </p>
        </div>
        <button className="px-4 py-1.5 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#5a39d9] transition-colors">
          Update
        </button>
      </div>

      <div className="space-y-5 mb-6">
        <div>
          <label className="text-xs font-medium text-[#1A1630] mb-2 block">
            Voice Provider
          </label>
          <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
            <option>Azure</option>
            <option>ElevenLabs</option>
            <option>Google TTS</option>
            <option>Sarvam AI</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-[#1A1630] mb-2 block">
            Voice
          </label>
          <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
            <option>Aarti — Soothing Voice India — Hindi</option>
            <option>Arjun — Confident Voice India — Hindi</option>
            <option>Aanya — Warm Voice India — English</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-[#1A1630] mb-2 block">
            Language <span className="text-[#EF4444]">*</span>
          </label>
          <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
            <option>Select a language</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Marathi</option>
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-[#1A1630]">Voice Rate</label>
            <span className="text-xs text-[#6B7285]">{rate}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={rate}
            onChange={(e) => setRate(parseInt(e.target.value))}
            className="w-full accent-[#6C47FF]"
          />
        </div>
      </div>

      <div className="border-t border-[#E4E1F0] pt-6">
        <h4 className="text-sm font-semibold text-[#1A1630] mb-4">Featured Voices</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {voices.map((voice, i) => (
            <div
              key={i}
              className="bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg p-3 hover:border-[#6C47FF]/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-semibold text-[#1A1630]">
                    {voice.name} — {voice.provider}
                  </p>
                  <p className="text-[10px] text-[#6B7285] font-mono mt-0.5">
                    {voice.code}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#6C47FF]/10 text-[#6C47FF] font-medium">
                  {voice.provider}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white border border-[#E4E1F0] text-[#6B7285] font-medium">
                  {voice.lang}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white border border-[#E4E1F0] text-[#6B7285] font-medium">
                  {voice.gender}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <button className="w-8 h-8 rounded-full bg-[#6C47FF] text-white flex items-center justify-center hover:bg-[#5a39d9] transition-colors">
                  <Play className="w-3 h-3 fill-current" />
                </button>
                <div className="text-right">
                  <p className="text-[10px] text-[#6B7285]">Details:</p>
                  <p className="text-[11px] font-medium text-[#1A1630]">IN — general</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
