"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

export function ModelTab() {
  const [temperature, setTemperature] = useState(0.3)
  const [welcomeEnabled, setWelcomeEnabled] = useState(true)
  const [keepContext, setKeepContext] = useState(false)

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#1A1630]">Model</h3>
          <p className="text-sm text-[#6B7285] mt-1">
            Configure the model for the Assistant.
          </p>
        </div>
        <button className="px-4 py-1.5 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#5a39d9] transition-colors">
          Update
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <Field label="AI Provider">
          <select className="select-input">
            <option>OpenAI</option>
            <option>Anthropic</option>
            <option>Google</option>
            <option>Azure</option>
          </select>
        </Field>
        <Field label="Model">
          <select className="select-input">
            <option>GPT-4.1 Mini</option>
            <option>GPT-4o</option>
            <option>GPT-4o Mini</option>
            <option>GPT-3.5 Turbo</option>
          </select>
        </Field>
        <Field label="Max Token">
          <input type="number" defaultValue={256} className="select-input" />
        </Field>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-medium text-[#1A1630]">Temperature</label>
          <span className="text-xs text-[#6B7285]">{temperature.toFixed(1)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full accent-[#6C47FF]"
        />
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-[#1A1630]">
            Dynamic Welcome Message
          </label>
          <Toggle enabled={welcomeEnabled} onChange={setWelcomeEnabled} />
        </div>
        <input
          type="text"
          defaultValue="Welcome, how can I assist you?"
          className="select-input"
        />
      </div>

      <div className="mb-5">
        <label className="text-sm font-medium text-[#1A1630] mb-2 block">
          System Prompt
        </label>
        <div className="relative">
          <textarea
            rows={6}
            placeholder="Describe the agent's role, tasks, and communication style in detail... and click Generate Prompt button"
            className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF] resize-none"
            defaultValue="You are a helpful assistant for a restaurant. Help customers book reservations, answer menu queries, and handle special requests politely in Hindi or English based on the caller's preference."
          />
          <button className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6C47FF] text-white text-xs font-medium hover:bg-[#5a39d9] transition-colors">
            <Sparkles className="w-3 h-3" />
            Generate Prompt
          </button>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-[#1A1630]">
            WhatsApp Summary Prompt
          </label>
          <button className="text-xs font-medium text-[#6C47FF] hover:underline">
            Add WhatsApp Summary Phone Number
          </button>
        </div>
        <input
          type="text"
          placeholder="WhatsApp Summary Prompt (if left empty, we will use default prompt)"
          className="select-input"
        />
      </div>

      <div className="mb-5">
        <label className="text-sm font-medium text-[#1A1630] mb-2 block">
          Outcome Prompt
        </label>
        <textarea
          rows={3}
          defaultValue="You are a call impact evaluator. Task: Analyse the conversation and classify the outcome as SUCCESS, FAILURE, or NEUTRAL based on whether the caller's intent was fulfilled."
          className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF] resize-none"
        />
      </div>

      <div className="flex items-center justify-between py-3 border-t border-[#E4E1F0]">
        <label className="text-sm font-medium text-[#1A1630]">
          Keep Last Conversation Context
        </label>
        <Toggle enabled={keepContext} onChange={setKeepContext} />
      </div>

      <div className="flex items-center justify-between py-3 border-t border-[#E4E1F0]">
        <label className="text-sm font-medium text-[#1A1630]">
          Transfer Call Setting
        </label>
        <button className="text-xs font-medium text-[#6C47FF] hover:underline">
          Configure Transfer Settings
        </button>
      </div>

      <style jsx>{`
        .select-input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          background-color: white;
          border: 1px solid #e4e1f0;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #1a1630;
        }
        .select-input:focus {
          outline: none;
          border-color: #6c47ff;
        }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-medium text-[#1A1630] mb-2 block">{label}</label>
      {children}
    </div>
  )
}

function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-10 h-5 rounded-full transition-colors ${
        enabled ? "bg-[#6C47FF]" : "bg-[#E4E1F0]"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  )
}
