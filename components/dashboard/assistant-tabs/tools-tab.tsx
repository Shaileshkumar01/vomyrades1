"use client"

import { useState } from "react"
import { Wrench, Search, Check, ChevronDown } from "lucide-react"

const availableTools = [
  { id: "calendar", name: "Google Calendar", desc: "Book appointments and check availability" },
  { id: "whatsapp", name: "WhatsApp Notify", desc: "Send confirmations and summaries via WhatsApp" },
  { id: "transfer", name: "Live Call Transfer", desc: "Forward calls to a human agent" },
  { id: "crm", name: "CRM Sync", desc: "Push leads and call notes to your CRM" },
  { id: "payments", name: "Payment Link", desc: "Generate UPI/Razorpay payment links" },
  { id: "email", name: "Email Summary", desc: "Send post-call email summaries" },
]

export function ToolsTab() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>(["calendar", "whatsapp"])
  const [search, setSearch] = useState("")

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    )
  }

  const filtered = availableTools.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F7F6FB] flex items-center justify-center">
            <Wrench className="w-5 h-5 text-[#6C47FF]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1A1630]">Tools</h3>
            <p className="text-sm text-[#6B7285] mt-0.5">
              Capabilities available to this assistant
            </p>
          </div>
        </div>
        <button className="px-4 py-1.5 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#5a39d9] transition-colors">
          Update
        </button>
      </div>

      <div>
        <label className="text-xs font-medium text-[#1A1630] uppercase tracking-wider mb-2 block">
          Select Tools
        </label>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-3 py-2.5 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] hover:border-[#6C47FF]/40 transition-colors"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Search className="w-4 h-4 text-[#6B7285] flex-shrink-0" />
              {selected.length === 0 ? (
                <span className="text-[#6B7285]">Search and select tools...</span>
              ) : (
                <div className="flex items-center gap-1.5 overflow-hidden">
                  {selected.slice(0, 3).map((id) => {
                    const tool = availableTools.find((t) => t.id === id)
                    return (
                      <span
                        key={id}
                        className="text-xs px-2 py-0.5 rounded-full bg-[#6C47FF]/10 text-[#6C47FF] font-medium whitespace-nowrap"
                      >
                        {tool?.name}
                      </span>
                    )
                  })}
                  {selected.length > 3 && (
                    <span className="text-xs text-[#6B7285]">+{selected.length - 3}</span>
                  )}
                </div>
              )}
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#6B7285] transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute z-10 mt-2 w-full bg-white border border-[#E4E1F0] rounded-lg shadow-lg overflow-hidden">
              <div className="p-2 border-b border-[#E4E1F0]">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#F7F6FB] border border-transparent rounded-md text-sm focus:outline-none focus:border-[#6C47FF]"
                />
              </div>
              <div className="max-h-72 overflow-y-auto">
                {filtered.map((tool) => {
                  const isSelected = selected.includes(tool.id)
                  return (
                    <button
                      key={tool.id}
                      onClick={() => toggle(tool.id)}
                      className="w-full flex items-start gap-3 px-3 py-2.5 hover:bg-[#F7F6FB] transition-colors text-left"
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? "bg-[#6C47FF] border-[#6C47FF]"
                            : "border-[#E4E1F0]"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#1A1630]">{tool.name}</p>
                        <p className="text-xs text-[#6B7285] mt-0.5">{tool.desc}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {selected.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-medium text-[#6B7285] uppercase tracking-wider mb-3">
              Active Tools ({selected.length})
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {selected.map((id) => {
                const tool = availableTools.find((t) => t.id === id)
                if (!tool) return null
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg px-3 py-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#1A1630]">{tool.name}</p>
                      <p className="text-xs text-[#6B7285]">{tool.desc}</p>
                    </div>
                    <button
                      onClick={() => toggle(id)}
                      className="text-xs font-medium text-[#6B7285] hover:text-[#EF4444]"
                    >
                      Remove
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
