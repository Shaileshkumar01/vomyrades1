"use client"

import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { CreateAssistantProvider } from "@/contexts/create-assistant-context"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CreateAssistantProvider>
      <div className="min-h-screen bg-[#F7F6FB]">
        <DashboardSidebar />
        <div className="ml-[220px]">
          {children}
        </div>
      </div>
    </CreateAssistantProvider>
  )
}
