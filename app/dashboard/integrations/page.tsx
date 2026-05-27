import { Check, Plus, ExternalLink } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"

const connected = [
  { name: "Google Calendar", category: "Scheduling", desc: "Book and manage appointments", since: "Mar 12, 2025" },
  { name: "Razorpay", category: "Payments", desc: "Process payments over phone", since: "Mar 14, 2025" },
  { name: "HubSpot CRM", category: "CRM", desc: "Sync leads and contacts", since: "Mar 18, 2025" },
  { name: "WhatsApp Business", category: "Messaging", desc: "Send confirmations and follow-ups", since: "Mar 20, 2025" },
]

const available = [
  { name: "Salesforce", category: "CRM", desc: "Enterprise CRM integration" },
  { name: "Zoho", category: "CRM", desc: "Indian CRM with lead management" },
  { name: "Stripe", category: "Payments", desc: "Global payment processing" },
  { name: "Calendly", category: "Scheduling", desc: "Automated meeting scheduling" },
  { name: "Slack", category: "Notifications", desc: "Team alerts and notifications" },
  { name: "Zapier", category: "Automation", desc: "Connect to 5000+ apps" },
  { name: "Twilio", category: "Telephony", desc: "Programmable voice and SMS" },
  { name: "Freshworks", category: "Support", desc: "Customer support platform" },
]

export default function IntegrationsPage() {
  return (
    <>
      <DashboardHeader title="Integrations" />
      <main className="p-8">
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1A1630]">Connected</h2>
              <p className="text-sm text-[#6B7285] mt-1">{connected.length} integrations active</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {connected.map((c) => (
              <div key={c.name} className="bg-white border border-[#E4E1F0] rounded-xl p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F6FB] flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-semibold text-[#6C47FF]">{c.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-[#1A1630]">{c.name}</h3>
                    <span className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-[#E8F7EE] text-[#16A34A]">
                      <Check className="w-3 h-3" />
                      Connected
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7285] mt-1">{c.desc}</p>
                  <p className="text-[11px] text-[#6B7285] mt-2">Since {c.since}</p>
                </div>
                <button className="text-xs text-[#6B7285] hover:text-[#1A1630]">Manage</button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-[#1A1630]">Browse integrations</h2>
            <p className="text-sm text-[#6B7285] mt-1">Connect Vomyra to your existing stack</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {available.map((a) => (
              <div key={a.name} className="bg-white border border-[#E4E1F0] rounded-xl p-5 hover:border-[#6C47FF] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F7F6FB] flex items-center justify-center">
                    <span className="text-sm font-semibold text-[#6C47FF]">{a.name.charAt(0)}</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#F7F6FB] text-[#6B7285]">{a.category}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#1A1630]">{a.name}</h3>
                <p className="text-xs text-[#6B7285] mt-1 mb-4 leading-relaxed">{a.desc}</p>
                <button className="flex items-center gap-1.5 text-xs font-medium text-[#6C47FF] hover:text-[#5A3AE0]">
                  <Plus className="w-3.5 h-3.5" />
                  Connect
                </button>
              </div>
            ))}
          </div>
          <button className="mt-6 flex items-center gap-1.5 text-sm text-[#6B7285] hover:text-[#1A1630]">
            View all integrations
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </section>
      </main>
    </>
  )
}
