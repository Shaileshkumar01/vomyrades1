"use client"

import {
  TrendingUp,
  Clock,
  Bot,
  Target,
  Phone,
  ArrowUpRight,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  Wrench,
  ChevronRight,
  Plus,
} from "lucide-react"

// Stat cards data
const stats = [
  {
    label: "Total calls",
    value: "1,284",
    chip: "+18% this week",
    chipColor: "green",
    icon: Phone,
  },
  {
    label: "Minutes used",
    value: "3,670",
    chip: "₹18,350 spent",
    chipColor: "amber",
    icon: Clock,
  },
  {
    label: "Active assistants",
    value: "4",
    chip: "2 live · 2 demo",
    chipColor: "blue",
    icon: Bot,
  },
  {
    label: "Completion rate",
    value: "91%",
    chip: "+3% vs last week",
    chipColor: "green",
    icon: Target,
  },
]

// Assistants data
const assistants = [
  {
    name: "Restaurant Order Bot",
    model: "GPT-4.1",
    voice: "Azure",
    tools: 3,
    phone: "+91 98765 XXXXX",
    status: "live",
  },
  {
    name: "Support Assistant",
    model: "Llama 3.3",
    voice: "ElevenLabs",
    tools: 5,
    phone: "+91 98765 XXXXX",
    status: "live",
  },
  {
    name: "Lead Qualifier",
    model: "GPT-4.1",
    voice: "Cartesia",
    tools: 2,
    phone: null,
    status: "idle",
  },
  {
    name: "Test Bot",
    model: "Grok",
    voice: "Azure",
    tools: 1,
    phone: null,
    status: "demo",
  },
]

// Recent calls data
const recentCalls = [
  {
    caller: "Priya Sharma",
    assistant: "Restaurant Order Bot",
    time: "2 min ago",
    duration: "3:24",
    type: "inbound",
  },
  {
    caller: "Amit Patel",
    assistant: "Support Assistant",
    time: "15 min ago",
    duration: "5:12",
    type: "inbound",
  },
  {
    caller: "Marketing Lead",
    assistant: "Lead Qualifier",
    time: "1 hr ago",
    duration: "2:45",
    type: "outbound",
  },
  {
    caller: "Unknown Caller",
    assistant: "Restaurant Order Bot",
    time: "2 hrs ago",
    duration: "0:12",
    type: "missed",
  },
]

// Tools data
const tools = [
  {
    timing: "beforeCall",
    name: "Check Business Hours",
    description: "Verifies if the business is currently open before connecting",
  },
  {
    timing: "onCall",
    name: "Menu Lookup",
    description: "Retrieves current menu items and prices from Petpooja POS",
  },
  {
    timing: "onCall",
    name: "Order Placement",
    description: "Creates and confirms orders in the connected POS system",
  },
  {
    timing: "afterCall",
    name: "Send Confirmation SMS",
    description: "Sends order confirmation via SMS to the customer",
  },
]

function getChipClasses(color: string) {
  switch (color) {
    case "green":
      return "bg-[#10B981]/10 text-[#10B981]"
    case "amber":
      return "bg-[#F59E0B]/10 text-[#F59E0B]"
    case "blue":
      return "bg-[#3B82F6]/10 text-[#3B82F6]"
    default:
      return "bg-[#6B7285]/10 text-[#6B7285]"
  }
}

function getStatusClasses(status: string) {
  switch (status) {
    case "live":
      return "bg-[#10B981]"
    case "idle":
      return "bg-[#F59E0B]"
    case "demo":
      return "bg-[#6B7285]"
    default:
      return "bg-[#6B7285]"
  }
}

function getCallTypeIcon(type: string) {
  switch (type) {
    case "inbound":
      return { icon: PhoneIncoming, color: "bg-[#10B981]/10 text-[#10B981]" }
    case "outbound":
      return { icon: PhoneOutgoing, color: "bg-[#3B82F6]/10 text-[#3B82F6]" }
    case "missed":
      return { icon: PhoneMissed, color: "bg-[#EF4444]/10 text-[#EF4444]" }
    default:
      return { icon: Phone, color: "bg-[#6B7285]/10 text-[#6B7285]" }
  }
}

function getTimingClasses(timing: string) {
  switch (timing) {
    case "beforeCall":
      return "bg-[#F59E0B]/10 text-[#F59E0B]"
    case "onCall":
      return "bg-[#10B981]/10 text-[#10B981]"
    case "afterCall":
      return "bg-[#3B82F6]/10 text-[#3B82F6]"
    default:
      return "bg-[#6B7285]/10 text-[#6B7285]"
  }
}

export function DashboardOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={i}
              className="bg-white rounded-xl border border-[#E4E1F0] p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#6B7285] uppercase tracking-wide">
                  {stat.label}
                </span>
                <Icon className="w-4 h-4 text-[#6B7285]" />
              </div>
              <p className="text-2xl font-bold text-[#1A1630]">{stat.value}</p>
              <span
                className={`inline-block mt-2 px-2 py-0.5 rounded-full text-xs ${getChipClasses(
                  stat.chipColor
                )}`}
              >
                {stat.chip}
              </span>
            </div>
          )
        })}
      </div>

      {/* Two-column panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assistants panel */}
        <div className="bg-white rounded-xl border border-[#E4E1F0]">
          <div className="flex items-center justify-between p-4 border-b border-[#E4E1F0]">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#6B7285]" />
              <span className="font-medium text-[#1A1630]">Assistants</span>
            </div>
            <a
              href="/dashboard/assistants"
              className="text-sm text-[#6C47FF] hover:underline flex items-center gap-1"
            >
              View all
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="divide-y divide-[#E4E1F0]">
            {assistants.map((assistant, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-[#6C47FF]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1A1630]">
                      {assistant.name}
                    </p>
                    <p className="text-xs text-[#6B7285]">
                      {assistant.model} · {assistant.voice} · {assistant.tools} tools
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {assistant.phone && (
                    <span className="px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] text-xs rounded-full">
                      {assistant.phone}
                    </span>
                  )}
                  <span
                    className={`w-2 h-2 rounded-full ${getStatusClasses(
                      assistant.status
                    )}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent calls panel */}
        <div className="bg-white rounded-xl border border-[#E4E1F0]">
          <div className="flex items-center justify-between p-4 border-b border-[#E4E1F0]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#6B7285]" />
              <span className="font-medium text-[#1A1630]">Recent calls</span>
            </div>
            <a
              href="/dashboard/calls"
              className="text-sm text-[#6C47FF] hover:underline flex items-center gap-1"
            >
              View all
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="divide-y divide-[#E4E1F0]">
            {recentCalls.map((call, i) => {
              const { icon: CallIcon, color } = getCallTypeIcon(call.type)
              return (
                <div key={i} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}
                    >
                      <CallIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1A1630]">
                        {call.caller}
                      </p>
                      <p className="text-xs text-[#6B7285]">
                        {call.assistant} · {call.time}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-[#6B7285]">
                    {call.duration}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Active tools panel */}
      <div className="bg-white rounded-xl border border-[#E4E1F0]">
        <div className="flex items-center justify-between p-4 border-b border-[#E4E1F0]">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#6B7285]" />
            <span className="font-medium text-[#1A1630]">Active tools</span>
          </div>
          <button className="text-sm text-[#6C47FF] hover:underline flex items-center gap-1">
            <Plus className="w-3 h-3" />
            New tool
          </button>
        </div>
        <div className="divide-y divide-[#E4E1F0]">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 hover:bg-[#F9F8FF] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`px-2 py-1 rounded text-[11px] font-mono ${getTimingClasses(
                    tool.timing
                  )}`}
                >
                  {tool.timing}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#1A1630]">
                    {tool.name}
                  </p>
                  <p className="text-xs text-[#6B7285]">{tool.description}</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#6B7285]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
