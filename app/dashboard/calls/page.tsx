"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { Phone, PhoneIncoming, PhoneOutgoing, Play, Download, Search, Filter } from "lucide-react"

const calls = [
  {
    id: "CALL-2841",
    assistant: "Restaurant Reservations",
    caller: "+91 98201 45678",
    direction: "inbound",
    duration: "2m 14s",
    status: "Completed",
    outcome: "Booking confirmed",
    time: "2 min ago",
    cost: "₹11.20",
  },
  {
    id: "CALL-2840",
    assistant: "Hotel Concierge",
    caller: "+91 99873 21054",
    direction: "inbound",
    duration: "3m 42s",
    status: "Completed",
    outcome: "Transferred to agent",
    time: "8 min ago",
    cost: "₹18.50",
  },
  {
    id: "CALL-2839",
    assistant: "Real Estate Lead Qualifier",
    caller: "+91 98456 78921",
    direction: "outbound",
    duration: "5m 12s",
    status: "Completed",
    outcome: "Visit scheduled",
    time: "14 min ago",
    cost: "₹26.00",
  },
  {
    id: "CALL-2838",
    assistant: "Restaurant Reservations",
    caller: "+91 90876 54321",
    direction: "inbound",
    duration: "1m 08s",
    status: "Completed",
    outcome: "Hours inquiry",
    time: "22 min ago",
    cost: "₹5.40",
  },
  {
    id: "CALL-2837",
    assistant: "Recruitment Screener",
    caller: "+91 87654 32109",
    direction: "outbound",
    duration: "0m 24s",
    status: "Failed",
    outcome: "No answer",
    time: "35 min ago",
    cost: "₹2.00",
  },
  {
    id: "CALL-2836",
    assistant: "Hotel Concierge",
    caller: "+91 91234 56780",
    direction: "inbound",
    duration: "4m 51s",
    status: "Completed",
    outcome: "Room booked",
    time: "1 hr ago",
    cost: "₹24.25",
  },
  {
    id: "CALL-2835",
    assistant: "Real Estate Lead Qualifier",
    caller: "+91 98765 11223",
    direction: "outbound",
    duration: "3m 18s",
    status: "Completed",
    outcome: "Not interested",
    time: "2 hr ago",
    cost: "₹16.50",
  },
]

export default function CallsPage() {
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all" ? calls : calls.filter((c) => c.direction === filter)

  return (
    <>
      <DashboardHeader title="Calls" />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1630]">Call history</h2>
            <p className="text-sm text-[#6B7285] mt-1">
              Review recordings, transcripts, and outcomes
            </p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-[#E4E1F0] text-[#1A1630] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#F9F8FF] transition-colors">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total calls today", value: "128", change: "+12%" },
            { label: "Avg duration", value: "2m 48s", change: "-4%" },
            { label: "Success rate", value: "94.2%", change: "+1.8%" },
            { label: "Total spend", value: "₹1,847", change: "+8%" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#E4E1F0] rounded-xl p-4"
            >
              <p className="text-xs text-[#6B7285]">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className="text-xl font-semibold text-[#1A1630]">{stat.value}</p>
                <span
                  className={`text-[11px] font-medium ${
                    stat.change.startsWith("+") ? "text-[#10B981]" : "text-[#EF4444]"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex bg-white border border-[#E4E1F0] rounded-lg p-1">
            {[
              { key: "all", label: "All" },
              { key: "inbound", label: "Inbound" },
              { key: "outbound", label: "Outbound" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  filter === tab.key
                    ? "bg-[#6C47FF] text-white"
                    : "text-[#6B7285] hover:text-[#1A1630]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-white border border-[#E4E1F0] px-3 py-1.5 rounded-lg text-xs text-[#6B7285] hover:bg-[#F9F8FF]">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <div className="relative ml-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#6B7285]" />
            <input
              type="text"
              placeholder="Search by number or ID..."
              className="pl-9 pr-4 py-1.5 bg-white border border-[#E4E1F0] rounded-lg text-xs focus:outline-none focus:border-[#6C47FF] w-64"
            />
          </div>
        </div>

        {/* Calls table */}
        <div className="bg-white border border-[#E4E1F0] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#F9F8FF] border-b border-[#E4E1F0]">
              <tr>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Call ID
                </th>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Assistant
                </th>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Caller
                </th>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Duration
                </th>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Outcome
                </th>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Cost
                </th>
                <th className="text-left text-[11px] uppercase tracking-wider text-[#6B7285] font-medium px-4 py-3">
                  Time
                </th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((call) => (
                <tr
                  key={call.id}
                  className="border-b border-[#E4E1F0] last:border-0 hover:bg-[#F9F8FF]"
                >
                  <td className="px-4 py-3 text-xs font-mono text-[#1A1630]">
                    {call.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#1A1630]">{call.assistant}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {call.direction === "inbound" ? (
                        <PhoneIncoming className="w-3.5 h-3.5 text-[#10B981]" />
                      ) : (
                        <PhoneOutgoing className="w-3.5 h-3.5 text-[#6C47FF]" />
                      )}
                      <span className="text-xs text-[#1A1630]">{call.caller}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-[#6B7285]">{call.duration}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                        call.status === "Completed"
                          ? "bg-[#10B981]/10 text-[#10B981]"
                          : "bg-[#EF4444]/10 text-[#EF4444]"
                      }`}
                    >
                      {call.outcome}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs font-medium text-[#1A1630]">
                    {call.cost}
                  </td>
                  <td className="px-4 py-3 text-xs text-[#6B7285]">{call.time}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded hover:bg-[#F7F6FB]">
                      <Play className="w-3.5 h-3.5 text-[#6C47FF]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
