import { Hash, Plus, MoreHorizontal, Phone } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"

const numbers = [
  {
    number: "+91 80 4567 8901",
    label: "Bangalore Main",
    assistant: "Priya - Restaurant Bot",
    type: "Local",
    status: "Active",
    minutes: "2,341",
    cost: "₹11,705",
  },
  {
    number: "+91 22 3456 7890",
    label: "Mumbai Sales",
    assistant: "Arjun - Real Estate",
    type: "Local",
    status: "Active",
    minutes: "1,892",
    cost: "₹9,460",
  },
  {
    number: "+91 11 2345 6789",
    label: "Delhi Support",
    assistant: "Kavya - Hotel Concierge",
    type: "Local",
    status: "Active",
    minutes: "3,124",
    cost: "₹15,620",
  },
  {
    number: "+91 1800 123 456",
    label: "Toll-Free National",
    assistant: "Rohan - Recruitment",
    type: "Toll-free",
    status: "Provisioning",
    minutes: "0",
    cost: "₹0",
  },
]

export default function PhoneNumbersPage() {
  return (
    <>
      <DashboardHeader title="Phone Numbers" />
      <main className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-[#1A1630]">Your numbers</h2>
            <p className="text-sm text-[#6B7285] mt-1">
              4 active numbers across 3 cities
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#6C47FF] text-white rounded-lg text-sm font-medium hover:bg-[#5A3AE0] transition-colors">
            <Plus className="w-4 h-4" />
            Buy number
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-[#E4E1F0] rounded-xl p-5">
            <p className="text-xs text-[#6B7285] uppercase tracking-wider">Total numbers</p>
            <p className="text-2xl font-semibold text-[#1A1630] mt-2">4</p>
          </div>
          <div className="bg-white border border-[#E4E1F0] rounded-xl p-5">
            <p className="text-xs text-[#6B7285] uppercase tracking-wider">Total minutes</p>
            <p className="text-2xl font-semibold text-[#1A1630] mt-2">7,357</p>
          </div>
          <div className="bg-white border border-[#E4E1F0] rounded-xl p-5">
            <p className="text-xs text-[#6B7285] uppercase tracking-wider">Monthly spend</p>
            <p className="text-2xl font-semibold text-[#1A1630] mt-2">₹36,785</p>
          </div>
        </div>

        <div className="bg-white border border-[#E4E1F0] rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#F9F8FF] border-b border-[#E4E1F0]">
              <tr>
                <th className="text-left text-xs font-medium text-[#6B7285] uppercase tracking-wider px-5 py-3">Number</th>
                <th className="text-left text-xs font-medium text-[#6B7285] uppercase tracking-wider px-5 py-3">Assistant</th>
                <th className="text-left text-xs font-medium text-[#6B7285] uppercase tracking-wider px-5 py-3">Type</th>
                <th className="text-left text-xs font-medium text-[#6B7285] uppercase tracking-wider px-5 py-3">Status</th>
                <th className="text-left text-xs font-medium text-[#6B7285] uppercase tracking-wider px-5 py-3">Minutes</th>
                <th className="text-left text-xs font-medium text-[#6B7285] uppercase tracking-wider px-5 py-3">Cost</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {numbers.map((n, i) => (
                <tr key={i} className="border-b border-[#E4E1F0] last:border-0 hover:bg-[#F9F8FF]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F7F6FB] flex items-center justify-center">
                        <Phone className="w-4 h-4 text-[#6C47FF]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1630]">{n.number}</p>
                        <p className="text-xs text-[#6B7285]">{n.label}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#1A1630]">{n.assistant}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs px-2 py-1 rounded-md bg-[#F7F6FB] text-[#6B7285]">{n.type}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2 py-1 rounded-md ${
                      n.status === "Active"
                        ? "bg-[#E8F7EE] text-[#16A34A]"
                        : "bg-[#FFF4E5] text-[#D97706]"
                    }`}>
                      {n.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-[#1A1630]">{n.minutes}</td>
                  <td className="px-5 py-4 text-sm text-[#1A1630]">{n.cost}</td>
                  <td className="px-5 py-4 text-right">
                    <button className="p-1 rounded hover:bg-[#F7F6FB]">
                      <MoreHorizontal className="w-4 h-4 text-[#6B7285]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
