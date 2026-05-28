"use client"

import { Search, Bell, Plus } from "lucide-react"
import { useCreateAssistant } from "@/contexts/create-assistant-context"

interface DashboardHeaderProps {
  title: string
  hideNewAssistantButton?: boolean
}

export function DashboardHeader({ 
  title, 
  hideNewAssistantButton = false,
}: DashboardHeaderProps) {
  const { openCreateModal } = useCreateAssistant()

  return (
    <header className="h-14 bg-white border-b border-[#E4E1F0] flex items-center justify-between px-6">
      {/* Page title */}
      <h1 className="text-lg font-semibold text-[#1A1630]">{title}</h1>

      {/* Center - Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7285]" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full h-9 pl-9 pr-4 bg-[#F7F6FB] rounded-lg text-sm text-[#1A1630] placeholder:text-[#6B7285] border-none focus:outline-none focus:ring-2 focus:ring-[#6C47FF]/20"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-[#F7F6FB] transition-colors">
          <Bell className="w-5 h-5 text-[#6B7285]" />
        </button>
        {!hideNewAssistantButton && (
          <button 
            onClick={openCreateModal}
            className="flex items-center gap-2 h-9 px-4 bg-[#6C47FF] text-white text-sm font-medium rounded-lg hover:bg-[#5a3ad9] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New assistant</span>
          </button>
        )}
      </div>
    </header>
  )
}
