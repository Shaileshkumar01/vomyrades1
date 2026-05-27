"use client"

import { useState } from "react"
import { User, Building2, CreditCard, Bell, Shield, Key } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/header"

const sections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "workspace", label: "Workspace", icon: Building2 },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "api", label: "API keys", icon: Key },
]

export default function SettingsPage() {
  const [active, setActive] = useState("profile")

  return (
    <>
      <DashboardHeader title="Settings" />
      <main className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 max-w-5xl">
          <nav className="flex flex-col gap-1">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                    active === s.id
                      ? "bg-[#F7F6FB] text-[#6C47FF]"
                      : "text-[#6B7285] hover:bg-[#F9F8FF] hover:text-[#1A1630]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {s.label}
                </button>
              )
            })}
          </nav>

          <div className="bg-white border border-[#E4E1F0] rounded-xl p-6">
            {active === "profile" && (
              <div>
                <h2 className="text-lg font-semibold text-[#1A1630]">Profile</h2>
                <p className="text-sm text-[#6B7285] mt-1 mb-6">Update your personal information</p>
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E4E1F0]">
                  <div className="w-16 h-16 rounded-full bg-[#6C47FF] flex items-center justify-center">
                    <span className="text-white text-lg font-medium">RK</span>
                  </div>
                  <div>
                    <button className="text-sm font-medium text-[#6C47FF] hover:text-[#5A3AE0]">Upload photo</button>
                    <p className="text-xs text-[#6B7285] mt-1">PNG or JPG, max 2MB</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Field label="Full name" value="Rahul Kumar" />
                  <Field label="Email" value="rahul@vomyra.ai" />
                  <Field label="Phone" value="+91 98765 43210" />
                  <Field label="Role" value="Founder" />
                </div>
              </div>
            )}

            {active === "workspace" && (
              <div>
                <h2 className="text-lg font-semibold text-[#1A1630]">Workspace</h2>
                <p className="text-sm text-[#6B7285] mt-1 mb-6">Manage your team workspace</p>
                <div className="space-y-4">
                  <Field label="Workspace name" value="Vomyra HQ" />
                  <Field label="Workspace URL" value="vomyra.ai/hq" />
                  <Field label="Industry" value="SaaS" />
                  <Field label="Team size" value="2-10 people" />
                </div>
              </div>
            )}

            {active === "billing" && (
              <div>
                <h2 className="text-lg font-semibold text-[#1A1630]">Billing</h2>
                <p className="text-sm text-[#6B7285] mt-1 mb-6">Manage your plan and payment</p>
                <div className="bg-[#F7F6FB] border border-[#E4E1F0] rounded-xl p-5 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-[#1A1630]">Pay-as-you-go</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-[#6C47FF] text-white">Current plan</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#1A1630]">₹5<span className="text-sm font-normal text-[#6B7285]">/min</span></p>
                  <p className="text-xs text-[#6B7285] mt-2">Next invoice on Apr 1, 2025 — estimated ₹64,235</p>
                </div>
                <div className="space-y-4">
                  <Field label="Billing email" value="billing@vomyra.ai" />
                  <Field label="GST number" value="29AABCU9603R1ZK" />
                  <Field label="Card on file" value="•••• 4242 (Visa)" />
                </div>
              </div>
            )}

            {active === "notifications" && (
              <div>
                <h2 className="text-lg font-semibold text-[#1A1630]">Notifications</h2>
                <p className="text-sm text-[#6B7285] mt-1 mb-6">Choose what you get notified about</p>
                <div className="space-y-4">
                  <Toggle label="Failed calls" desc="Alert when a call fails or times out" defaultOn />
                  <Toggle label="Daily summary" desc="Get a daily report of all calls" defaultOn />
                  <Toggle label="Spend alerts" desc="Notify when monthly spend exceeds threshold" defaultOn />
                  <Toggle label="New integrations" desc="Updates about new tools and integrations" />
                  <Toggle label="Product updates" desc="Vomyra product news and changelog" />
                </div>
              </div>
            )}

            {active === "security" && (
              <div>
                <h2 className="text-lg font-semibold text-[#1A1630]">Security</h2>
                <p className="text-sm text-[#6B7285] mt-1 mb-6">Protect your account</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-[#E4E1F0] rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-[#1A1630]">Password</p>
                      <p className="text-xs text-[#6B7285] mt-1">Last changed 2 months ago</p>
                    </div>
                    <button className="text-sm font-medium text-[#6C47FF] hover:text-[#5A3AE0]">Change</button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-[#E4E1F0] rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-[#1A1630]">Two-factor authentication</p>
                      <p className="text-xs text-[#6B7285] mt-1">Add an extra layer of security</p>
                    </div>
                    <button className="text-sm font-medium text-[#6C47FF] hover:text-[#5A3AE0]">Enable</button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-[#E4E1F0] rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-[#1A1630]">Active sessions</p>
                      <p className="text-xs text-[#6B7285] mt-1">3 devices signed in</p>
                    </div>
                    <button className="text-sm font-medium text-[#6C47FF] hover:text-[#5A3AE0]">Manage</button>
                  </div>
                </div>
              </div>
            )}

            {active === "api" && (
              <div>
                <h2 className="text-lg font-semibold text-[#1A1630]">API keys</h2>
                <p className="text-sm text-[#6B7285] mt-1 mb-6">Programmatic access to Vomyra</p>
                <div className="space-y-3">
                  {[
                    { name: "Production", key: "vmr_live_••••••••8a4f", created: "Mar 12, 2025" },
                    { name: "Staging", key: "vmr_test_••••••••2c91", created: "Mar 14, 2025" },
                  ].map((k) => (
                    <div key={k.name} className="flex items-center justify-between p-4 border border-[#E4E1F0] rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-[#1A1630]">{k.name}</p>
                        <p className="text-xs text-[#6B7285] font-mono mt-1">{k.key}</p>
                        <p className="text-[11px] text-[#6B7285] mt-1">Created {k.created}</p>
                      </div>
                      <button className="text-sm font-medium text-[#DC2626] hover:text-[#B91C1C]">Revoke</button>
                    </div>
                  ))}
                  <button className="w-full py-2.5 border border-dashed border-[#E4E1F0] rounded-lg text-sm font-medium text-[#6C47FF] hover:bg-[#F9F8FF] transition-colors">
                    + Create new key
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#6B7285] mb-1.5">{label}</label>
      <input
        type="text"
        defaultValue={value}
        className="w-full px-3 py-2 border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] bg-white focus:outline-none focus:ring-2 focus:ring-[#6C47FF]/20 focus:border-[#6C47FF]"
      />
    </div>
  )
}

function Toggle({ label, desc, defaultOn = false }: { label: string; desc: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <div className="flex items-center justify-between p-4 border border-[#E4E1F0] rounded-lg">
      <div>
        <p className="text-sm font-medium text-[#1A1630]">{label}</p>
        <p className="text-xs text-[#6B7285] mt-1">{desc}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-6 rounded-full transition-colors relative ${on ? "bg-[#6C47FF]" : "bg-[#E4E1F0]"}`}
      >
        <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${on ? "left-[18px]" : "left-0.5"}`} />
      </button>
    </div>
  )
}
