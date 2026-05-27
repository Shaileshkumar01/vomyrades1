"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  Bot,
  Phone,
  Wrench,
  Hash,
  Link2,
  BarChart3,
  Settings,
  MoreVertical,
} from "lucide-react"

const mainNav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Assistants", href: "/dashboard/assistants", icon: Bot, badge: "4" },
  { label: "Calls", href: "/dashboard/calls", icon: Phone, badge: "128" },
  { label: "Tools", href: "/dashboard/tools", icon: Wrench, badge: "6" },
]

const settingsNav = [
  { label: "Phone Numbers", href: "/dashboard/phone-numbers", icon: Hash },
  { label: "Integrations", href: "/dashboard/integrations", icon: Link2 },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[220px] bg-white border-r border-[#E4E1F0] flex flex-col">
      {/* Logo */}
      <div className="h-14 flex items-center px-5 border-b border-[#E4E1F0]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#6C47FF] flex items-center justify-center">
            <span className="text-white text-xs font-bold">V</span>
          </div>
          <span className="text-base font-semibold text-[#1A1630]">Vomyra</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {/* Main section */}
        <div className="mb-6">
          <span className="px-2 text-[11px] font-medium text-[#6B7285] uppercase tracking-wider">
            Main
          </span>
          <div className="mt-2 space-y-1">
            {mainNav.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-[#F7F6FB] text-[#6C47FF]"
                      : "text-[#6B7285] hover:bg-[#F9F8FF] hover:text-[#1A1630]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-[#6C47FF]" : ""}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      isActive ? "bg-[#6C47FF]/10 text-[#6C47FF]" : "bg-[#E4E1F0] text-[#6B7285]"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Settings section */}
        <div>
          <span className="px-2 text-[11px] font-medium text-[#6B7285] uppercase tracking-wider">
            Settings
          </span>
          <div className="mt-2 space-y-1">
            {settingsNav.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-[#F7F6FB] text-[#6C47FF]"
                      : "text-[#6B7285] hover:bg-[#F9F8FF] hover:text-[#1A1630]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#6C47FF]" : ""}`} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* User section */}
      <div className="p-3 border-t border-[#E4E1F0]">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#6C47FF] flex items-center justify-center">
              <span className="text-white text-xs font-medium">RK</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A1630]">Rahul K.</p>
              <p className="text-[11px] text-[#6B7285]">Pay-as-you-go · ₹5/min</p>
            </div>
          </div>
          <button className="p-1 rounded hover:bg-[#F7F6FB]">
            <MoreVertical className="w-4 h-4 text-[#6B7285]" />
          </button>
        </div>
      </div>
    </aside>
  )
}
