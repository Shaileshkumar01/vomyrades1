"use client"

import { useState } from "react"
import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard/header"
import { CreateAssistantModal } from "@/components/dashboard/create-assistant-modal"
import { Bot, Phone, Clock, MoreHorizontal, Plus, Search } from "lucide-react"

const assistants = [
  {
    id: "restaurant-reservations",
    name: "Restaurant Reservations",
    language: "Hindi + English",
    voice: "Aanya (Female)",
    calls: 342,
    avgDuration: "2m 14s",
    status: "Active",
    phone: "+91 98765 43210",
    description: "Handles table bookings, menu queries, and special requests",
  },
  {
    id: "hotel-concierge",
    name: "Hotel Concierge",
    language: "Hindi + English + Marathi",
    voice: "Arjun (Male)",
    calls: 218,
    avgDuration: "3m 02s",
    status: "Active",
    phone: "+91 98765 43211",
    description: "Room bookings, check-in queries, and local recommendations",
  },
  {
    id: "real-estate-lead-qualifier",
    name: "Real Estate Lead Qualifier",
    language: "Hindi + English",
    voice: "Priya (Female)",
    calls: 156,
    avgDuration: "4m 31s",
    status: "Active",
    phone: "+91 98765 43212",
    description: "Qualifies inbound leads and schedules property visits",
  },
  {
    id: "recruitment-screener",
    name: "Recruitment Screener",
    language: "English",
    voice: "Vikram (Male)",
    calls: 89,
    avgDuration: "5m 12s",
    status: "Paused",
    phone: "+91 98765 43213",
    description: "Initial candidate screening for engineering roles",
  },
]

export default function AssistantsPage() {
  const [search, setSearch] = useState("")
  const [createModalOpen, setCreateModalOpen] = useState(false)

  const filtered = assistants.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <DashboardHeader title="Assistants" />
      <CreateAssistantModal open={createModalOpen} onOpenChange={setCreateModalOpen} />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1630]">Your assistants</h2>
            <p className="text-sm text-[#6B7285] mt-1">
              Manage your voice AI agents and their configurations
            </p>
          </div>
          <button
            onClick={() => setCreateModalOpen(true)}
            className="flex items-center gap-2 bg-[#6C47FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5a39d9] transition-colors"
          >
            <Plus className="w-4 h-4" />
            New assistant
          </button>
        </div>

        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7285]" />
          <input
            type="text"
            placeholder="Search assistants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm focus:outline-none focus:border-[#6C47FF]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((assistant) => (
            <Link
              key={assistant.id}
              href={`/dashboard/assistants/${assistant.id}`}
              className="bg-white border border-[#E4E1F0] rounded-xl p-5 hover:border-[#6C47FF]/40 hover:shadow-sm transition-all block"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F6FB] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#6C47FF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A1630]">
                      {assistant.name}
                    </h3>
                    <p className="text-xs text-[#6B7285] mt-0.5">{assistant.voice}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  className="p-1 rounded hover:bg-[#F7F6FB]"
                >
                  <MoreHorizontal className="w-4 h-4 text-[#6B7285]" />
                </button>
              </div>

              <p className="text-xs text-[#6B7285] mb-4 leading-relaxed">
                {assistant.description}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    assistant.status === "Active"
                      ? "bg-[#10B981]/10 text-[#10B981]"
                      : "bg-[#F59E0B]/10 text-[#F59E0B]"
                  }`}
                >
                  {assistant.status}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F7F6FB] text-[#6B7285]">
                  {assistant.language}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E4E1F0]">
                <div>
                  <div className="flex items-center gap-1 text-[#6B7285]">
                    <Phone className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-wider">Calls</span>
                  </div>
                  <p className="text-sm font-semibold text-[#1A1630] mt-1">
                    {assistant.calls}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#6B7285]">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-wider">Avg</span>
                  </div>
                  <p className="text-sm font-semibold text-[#1A1630] mt-1">
                    {assistant.avgDuration}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6B7285]">
                    Number
                  </span>
                  <p className="text-xs font-medium text-[#1A1630] mt-1 truncate">
                    {assistant.phone}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
