"use client"

import { DashboardHeader } from "@/components/dashboard/header"
import {
  Calendar,
  CreditCard,
  Database,
  MessageSquare,
  Mail,
  PhoneForwarded,
  Plus,
  Settings,
  CheckCircle2,
} from "lucide-react"

const tools = [
  {
    name: "Calendar Booking",
    description: "Connect Google Calendar or Cal.com to book appointments during calls",
    icon: Calendar,
    status: "Connected",
    integration: "Google Calendar",
    usedBy: 3,
  },
  {
    name: "Payment Collection",
    description: "Send Razorpay or Stripe payment links via SMS during the call",
    icon: CreditCard,
    status: "Connected",
    integration: "Razorpay",
    usedBy: 2,
  },
  {
    name: "CRM Sync",
    description: "Push call summaries and lead data to your CRM in real time",
    icon: Database,
    status: "Connected",
    integration: "HubSpot",
    usedBy: 4,
  },
  {
    name: "WhatsApp Follow-up",
    description: "Send automated WhatsApp messages after the call ends",
    icon: MessageSquare,
    status: "Connected",
    integration: "WhatsApp Business API",
    usedBy: 3,
  },
  {
    name: "Email Notifications",
    description: "Notify your team via email when specific call outcomes occur",
    icon: Mail,
    status: "Connected",
    integration: "SMTP",
    usedBy: 4,
  },
  {
    name: "Live Transfer",
    description: "Transfer calls to a human agent when escalation is needed",
    icon: PhoneForwarded,
    status: "Connected",
    integration: "SIP / PSTN",
    usedBy: 2,
  },
]

const available = [
  { name: "Slack", description: "Post call summaries to channels" },
  { name: "Salesforce", description: "Sync leads and opportunities" },
  { name: "Zendesk", description: "Create support tickets" },
  { name: "Twilio SMS", description: "Send SMS during calls" },
]

export default function ToolsPage() {
  return (
    <>
      <DashboardHeader title="Tools" />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#1A1630]">Tools & integrations</h2>
            <p className="text-sm text-[#6B7285] mt-1">
              Give your assistants real-world capabilities during calls
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#6C47FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5a39d9] transition-colors">
            <Plus className="w-4 h-4" />
            Add tool
          </button>
        </div>

        {/* Connected tools */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[#1A1630] mb-3">
            Connected tools ({tools.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <div
                  key={tool.name}
                  className="bg-white border border-[#E4E1F0] rounded-xl p-5 hover:border-[#6C47FF]/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F7F6FB] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#6C47FF]" />
                    </div>
                    <button className="p-1 rounded hover:bg-[#F7F6FB]">
                      <Settings className="w-4 h-4 text-[#6B7285]" />
                    </button>
                  </div>
                  <h4 className="text-sm font-semibold text-[#1A1630] mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-[#6B7285] leading-relaxed mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E4E1F0]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[11px] text-[#6B7285]">{tool.integration}</span>
                    </div>
                    <span className="text-[11px] text-[#6B7285]">
                      Used by {tool.usedBy}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Available */}
        <div>
          <h3 className="text-sm font-semibold text-[#1A1630] mb-3">Available to add</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {available.map((tool) => (
              <div
                key={tool.name}
                className="bg-white border border-dashed border-[#E4E1F0] rounded-xl p-4 hover:border-[#6C47FF]/40 hover:bg-[#F9F8FF] cursor-pointer transition-colors"
              >
                <h4 className="text-sm font-semibold text-[#1A1630] mb-1">{tool.name}</h4>
                <p className="text-xs text-[#6B7285] mb-3">{tool.description}</p>
                <button className="text-xs font-medium text-[#6C47FF] hover:underline">
                  Connect →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
