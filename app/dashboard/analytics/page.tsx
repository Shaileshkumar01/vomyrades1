import { TrendingUp, TrendingDown, Phone, Clock, IndianRupee, CheckCircle2 } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"

const stats = [
  { label: "Total calls", value: "12,847", change: "+18.2%", up: true, icon: Phone },
  { label: "Avg duration", value: "2m 14s", change: "-8s", up: true, icon: Clock },
  { label: "Total spend", value: "₹64,235", change: "+12.4%", up: false, icon: IndianRupee },
  { label: "Success rate", value: "94.6%", change: "+2.1%", up: true, icon: CheckCircle2 },
]

const dailyData = [
  { day: "Mon", calls: 1240, height: 65 },
  { day: "Tue", calls: 1580, height: 82 },
  { day: "Wed", calls: 1420, height: 74 },
  { day: "Thu", calls: 1890, height: 98 },
  { day: "Fri", calls: 1720, height: 89 },
  { day: "Sat", calls: 980, height: 51 },
  { day: "Sun", calls: 720, height: 37 },
]

const languages = [
  { name: "Hindi", percent: 42, color: "#6C47FF" },
  { name: "English", percent: 28, color: "#9B7EFF" },
  { name: "Tamil", percent: 12, color: "#C4B0FF" },
  { name: "Telugu", percent: 9, color: "#D9CCFF" },
  { name: "Marathi", percent: 6, color: "#E4DCFF" },
  { name: "Other", percent: 3, color: "#F0EBFF" },
]

const topAssistants = [
  { name: "Priya - Restaurant Bot", calls: 4231, success: 96 },
  { name: "Kavya - Hotel Concierge", calls: 3124, success: 94 },
  { name: "Arjun - Real Estate", calls: 2892, success: 91 },
  { name: "Rohan - Recruitment", calls: 1820, success: 93 },
  { name: "Meera - Support", calls: 780, success: 89 },
]

export default function AnalyticsPage() {
  return (
    <>
      <DashboardHeader title="Analytics" />
      <main className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-[#1A1630]">Last 7 days</h2>
            <p className="text-sm text-[#6B7285] mt-1">Mar 21 - Mar 27, 2025</p>
          </div>
          <select className="px-3 py-2 border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] bg-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="bg-white border border-[#E4E1F0] rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F7F6FB] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#6C47FF]" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${s.up ? "text-[#16A34A]" : "text-[#DC2626]"}`}>
                    {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {s.change}
                  </div>
                </div>
                <p className="text-xs text-[#6B7285]">{s.label}</p>
                <p className="text-2xl font-semibold text-[#1A1630] mt-1">{s.value}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white border border-[#E4E1F0] rounded-xl p-6">
            <h3 className="text-sm font-semibold text-[#1A1630] mb-1">Call volume</h3>
            <p className="text-xs text-[#6B7285] mb-6">Daily call count over the past week</p>
            <div className="flex items-end justify-between gap-3 h-48">
              {dailyData.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col justify-end h-full">
                    <div
                      className="w-full bg-[#6C47FF] rounded-t-lg hover:bg-[#5A3AE0] transition-colors relative group"
                      style={{ height: `${d.height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1A1630] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {d.calls} calls
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#6B7285]">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E4E1F0] rounded-xl p-6">
            <h3 className="text-sm font-semibold text-[#1A1630] mb-1">Languages</h3>
            <p className="text-xs text-[#6B7285] mb-6">Distribution across calls</p>
            <div className="space-y-3">
              {languages.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-[#1A1630]">{l.name}</span>
                    <span className="text-xs text-[#6B7285]">{l.percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F7F6FB] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${l.percent}%`, backgroundColor: l.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E4E1F0] rounded-xl p-6">
          <h3 className="text-sm font-semibold text-[#1A1630] mb-1">Top assistants</h3>
          <p className="text-xs text-[#6B7285] mb-6">Ranked by call volume this week</p>
          <div className="space-y-4">
            {topAssistants.map((a, i) => (
              <div key={a.name} className="flex items-center gap-4">
                <span className="text-xs font-medium text-[#6B7285] w-5">#{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-[#1A1630]">{a.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#6B7285]">{a.calls.toLocaleString()} calls</span>
                      <span className="text-xs text-[#16A34A]">{a.success}% success</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#F7F6FB] overflow-hidden">
                    <div
                      className="h-full bg-[#6C47FF] rounded-full"
                      style={{ width: `${(a.calls / 4231) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
