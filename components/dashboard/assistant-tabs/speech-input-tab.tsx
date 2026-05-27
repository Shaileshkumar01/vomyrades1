"use client"

export function SpeechInputTab() {
  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#1A1630]">Speech Input</h3>
          <p className="text-sm text-[#6B7285] mt-1">
            Configure transcription settings for the Assistant.
          </p>
        </div>
        <button className="px-4 py-1.5 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#5a39d9] transition-colors">
          Update
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-xs font-medium text-[#1A1630] mb-2 block">
            Provider
          </label>
          <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
            <option>AZURE</option>
            <option>Deepgram</option>
            <option>Whisper</option>
            <option>Google STT</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-[#1A1630] mb-2 block">
            Language Selection Mode
          </label>
          <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
            <option>Bilingual (faster response time)</option>
            <option>Single Language</option>
            <option>Auto-detect</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-[#1A1630] mb-2 block">
            Language
          </label>
          <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
            <option>Hindi (India)</option>
            <option>English (India)</option>
            <option>Marathi (India)</option>
            <option>Tamil (India)</option>
            <option>Telugu (India)</option>
            <option>Bengali (India)</option>
            <option>Gujarati (India)</option>
            <option>Punjabi (India)</option>
            <option>Kannada (India)</option>
            <option>Malayalam (India)</option>
          </select>
        </div>

        <div className="bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg p-4">
          <p className="text-xs text-[#6B7285] leading-relaxed">
            <span className="font-medium text-[#1A1630]">Tip:</span> Bilingual mode
            offers faster response times and is recommended for Indian markets where
            callers naturally code-switch between Hindi and English.
          </p>
        </div>
      </div>
    </div>
  )
}
