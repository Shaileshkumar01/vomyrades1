"use client"

import { useState } from "react"

export function AdvanceSettingsTab() {
  const [waitTime, setWaitTime] = useState(12)
  const [maxLength, setMaxLength] = useState(600)
  const [timeoutEnd, setTimeoutEnd] = useState(5)
  const [fillerWords, setFillerWords] = useState(true)

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#1A1630]">Advance Settings</h3>
          <p className="text-sm text-[#6B7285] mt-1">
            Configure advance settings for the Assistant.
          </p>
        </div>
        <button className="px-4 py-1.5 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#5a39d9] transition-colors">
          Update
        </button>
      </div>

      <div className="space-y-6">
        {/* Wait Time */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-[#1A1630]">
              Wait Time Before Asking Again
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={waitTime}
                onChange={(e) => setWaitTime(parseInt(e.target.value) || 0)}
                className="w-16 px-2 py-1 bg-white border border-[#E4E1F0] rounded-md text-sm text-right focus:outline-none focus:border-[#6C47FF]"
              />
              <span className="text-xs text-[#6B7285]">sec</span>
            </div>
          </div>
          <p className="text-xs text-[#6B7285] mb-2">
            How long the system waits when the customer is silent before prompting them.
          </p>
          <input
            type="range"
            min={10}
            max={60}
            value={waitTime}
            onChange={(e) => setWaitTime(parseInt(e.target.value))}
            className="w-full accent-[#6C47FF]"
          />
          <div className="flex items-center justify-between text-[10px] text-[#6B7285] mt-1">
            <span>10 (sec)</span>
            <span>60 (sec)</span>
          </div>
        </div>

        {/* Max Call Length */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-[#1A1630]">Max Call Length</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={maxLength}
                onChange={(e) => setMaxLength(parseInt(e.target.value) || 0)}
                className="w-20 px-2 py-1 bg-white border border-[#E4E1F0] rounded-md text-sm text-right focus:outline-none focus:border-[#6C47FF]"
              />
              <span className="text-xs text-[#6B7285]">sec</span>
            </div>
          </div>
          <p className="text-xs text-[#6B7285] mb-2">The longest time a call can last.</p>
          <input
            type="range"
            min={30}
            max={3600}
            value={maxLength}
            onChange={(e) => setMaxLength(parseInt(e.target.value))}
            className="w-full accent-[#6C47FF]"
          />
          <div className="flex items-center justify-between text-[10px] text-[#6B7285] mt-1">
            <span>30 (sec)</span>
            <span>3600 (sec)</span>
          </div>
        </div>

        {/* Prompt Message */}
        <div>
          <label className="text-sm font-medium text-[#1A1630] mb-1 block">
            Prompt Message
          </label>
          <p className="text-xs text-[#6B7285] mb-2">
            The message played to check if the customer is still there, e.g., &quot;Are
            you there?&quot;
          </p>
          <input
            type="text"
            defaultValue="Are you still there?"
            className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
          />
        </div>

        {/* Goodbye Message */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-[#1A1630]">Goodbye Message</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={timeoutEnd}
                onChange={(e) => setTimeoutEnd(parseInt(e.target.value) || 0)}
                className="w-16 px-2 py-1 bg-white border border-[#E4E1F0] rounded-md text-sm text-right focus:outline-none focus:border-[#6C47FF]"
              />
              <span className="text-xs text-[#6B7285]">sec</span>
            </div>
          </div>
          <p className="text-xs text-[#6B7285] mb-2">
            The final message before the call ends, e.g., &quot;Thank you for calling.
            Goodbye!&quot;
          </p>
          <textarea
            rows={2}
            defaultValue="Thank you for calling. Goodbye!"
            className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF] resize-none"
          />
          <p className="text-xs text-[#6B7285] mt-2">
            <span className="font-medium text-[#1A1630]">Timeout End Message:</span>{" "}
            How long the system waits after playing the prompt message.
          </p>
        </div>

        {/* Instant Filler Words */}
        <div className="border border-[#E4E1F0] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <label className="text-sm font-medium text-[#1A1630]">
                Instant Filler Words
              </label>
              <p className="text-xs text-[#6B7285] mt-0.5">
                Play short acknowledgements (e.g., &quot;hmm...&quot;, &quot;okay...&quot;)
                while the assistant thinks.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6B7285]">Enabled</span>
              <button
                onClick={() => setFillerWords(!fillerWords)}
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  fillerWords ? "bg-[#6C47FF]" : "bg-[#E4E1F0]"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                    fillerWords ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
          <textarea
            rows={2}
            defaultValue="हाँ, ठीक है जी, ठीक है, बिल्कुल, जी, हाँ जी, अच्छा जी, अच्छा, हाँ ठीक है"
            className="w-full px-3 py-2 mt-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF] resize-none"
          />
          <p className="text-[11px] text-[#6B7285] mt-2">
            Separate phrases with commas or new lines. Defaults adapt to your
            transcription language.
          </p>
        </div>
      </div>
    </div>
  )
}
