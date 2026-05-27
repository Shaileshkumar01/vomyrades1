"use client"

import { useState, use } from "react"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard/header"
import { ModelTab } from "@/components/dashboard/assistant-tabs/model-tab"
import { SpeechInputTab } from "@/components/dashboard/assistant-tabs/speech-input-tab"
import { VoiceTab } from "@/components/dashboard/assistant-tabs/voice-tab"
import { ToolsTab } from "@/components/dashboard/assistant-tabs/tools-tab"
import { AdvanceSettingsTab } from "@/components/dashboard/assistant-tabs/advance-settings-tab"
import { ArrowLeft, Phone, MoreHorizontal } from "lucide-react"

const tabs = [
  { id: "model", label: "Model" },
  { id: "speech", label: "Speech Input" },
  { id: "voice", label: "Voice" },
  { id: "tools", label: "Tools" },
  { id: "advance", label: "Advance Settings" },
] as const

type TabId = (typeof tabs)[number]["id"]

const assistantData: Record<string, { name: string; phone: string; status: string }> = {
  "restaurant-reservations": {
    name: "Restaurant Reservations",
    phone: "+91 98765 43210",
    status: "Active",
  },
  "hotel-concierge": {
    name: "Hotel Concierge",
    phone: "+91 98765 43211",
    status: "Active",
  },
  "real-estate-lead-qualifier": {
    name: "Real Estate Lead Qualifier",
    phone: "+91 98765 43212",
    status: "Active",
  },
  "recruitment-screener": {
    name: "Recruitment Screener",
    phone: "+91 98765 43213",
    status: "Paused",
  },
}

export default function AssistantDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [activeTab, setActiveTab] = useState<TabId>("model")
  const assistant = assistantData[id] ?? {
    name: "Assistant",
    phone: "—",
    status: "Active",
  }

  return (
    <>
      <DashboardHeader title="Assistants" />
      <div className="p-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/assistants"
              className="w-9 h-9 rounded-lg border border-[#E4E1F0] bg-white flex items-center justify-center hover:bg-[#F7F6FB] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#1A1630]" />
            </Link>
            <div>
              <h2 className="text-2xl font-semibold text-[#1A1630]">
                {assistant.name}
              </h2>
              <div className="flex items-center gap-3 mt-1">
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    assistant.status === "Active"
                      ? "bg-[#10B981]/10 text-[#10B981]"
                      : "bg-[#F59E0B]/10 text-[#F59E0B]"
                  }`}
                >
                  {assistant.status}
                </span>
                <span className="text-xs text-[#6B7285] flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {assistant.phone}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg border border-[#E4E1F0] bg-white text-sm font-medium text-[#1A1630] hover:bg-[#F7F6FB] transition-colors">
              Test web call
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#1A1630] text-white text-sm font-medium hover:bg-[#2a2245] transition-colors">
              Get phone call from agent
            </button>
            <button className="w-9 h-9 rounded-lg border border-[#E4E1F0] bg-white flex items-center justify-center hover:bg-[#F7F6FB]">
              <MoreHorizontal className="w-4 h-4 text-[#6B7285]" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border border-[#E4E1F0] rounded-xl overflow-hidden">
          <div className="flex items-center border-b border-[#E4E1F0] overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#6C47FF]"
                    : "text-[#6B7285] hover:text-[#1A1630]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6C47FF]" />
                )}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "model" && <ModelTab />}
            {activeTab === "speech" && <SpeechInputTab />}
            {activeTab === "voice" && <VoiceTab />}
            {activeTab === "tools" && <ToolsTab />}
            {activeTab === "advance" && <AdvanceSettingsTab />}
          </div>
        </div>
      </div>
    </>
  )
}
