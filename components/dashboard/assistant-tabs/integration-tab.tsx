"use client"

import { useState } from "react"
import {
  Upload,
  FileSpreadsheet,
  Calendar,
  Webhook,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Link2,
  Plus,
  Trash2,
} from "lucide-react"

type IntegrationStatus = "connected" | "disconnected" | "configuring"

interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status: IntegrationStatus
  children: React.ReactNode
  defaultExpanded?: boolean
}

function IntegrationCard({
  title,
  description,
  icon,
  status,
  children,
  defaultExpanded = false,
}: IntegrationCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="border border-[#E4E1F0] rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#F7F6FB]/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#F7F6FB] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-[#1A1630]">{title}</h4>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  status === "connected"
                    ? "bg-[#10B981]/10 text-[#10B981]"
                    : status === "configuring"
                    ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                    : "bg-[#E4E1F0] text-[#6B7285]"
                }`}
              >
                {status === "connected"
                  ? "Connected"
                  : status === "configuring"
                  ? "Configuring"
                  : "Not Connected"}
              </span>
            </div>
            <p className="text-xs text-[#6B7285] mt-0.5">{description}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-[#6B7285]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#6B7285]" />
        )}
      </button>
      {expanded && (
        <div className="p-4 pt-0 border-t border-[#E4E1F0] bg-[#FAFAFA]">
          {children}
        </div>
      )}
    </div>
  )
}

function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-10 h-5 rounded-full transition-colors ${
        enabled ? "bg-[#6C47FF]" : "bg-[#E4E1F0]"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
          enabled ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      />
    </button>
  )
}

export function IntegrationTab() {
  // CRM Upload state
  const [crmEnabled, setCrmEnabled] = useState(false)
  const [crmProvider, setCrmProvider] = useState("hubspot")
  const [crmSyncLeads, setCrmSyncLeads] = useState(true)
  const [crmSyncTranscripts, setCrmSyncTranscripts] = useState(true)

  // Petpooja state
  const [petpoojaEnabled, setPetpoojaEnabled] = useState(false)
  const [petpoojaRestaurantId, setPetpoojaRestaurantId] = useState("")
  const [petpoojaApiKey, setPetpoojaApiKey] = useState("")
  const [petpoojaSyncOrders, setPetpoojaSyncOrders] = useState(true)
  const [petpoojaSyncMenu, setPetpoojaSyncMenu] = useState(true)

  // Google Sheets state
  const [sheetsEnabled, setSheetsEnabled] = useState(true)
  const [sheetsUrl, setSheetsUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1abc..."
  )
  const [sheetsWriteCallLogs, setSheetsWriteCallLogs] = useState(true)
  const [sheetsReadData, setSheetsReadData] = useState(true)

  // Google Calendar state
  const [calendarEnabled, setCalendarEnabled] = useState(true)
  const [calendarEmail, setCalendarEmail] = useState("assistant@vomyra.com")
  const [calendarBookAppointments, setCalendarBookAppointments] = useState(true)
  const [calendarCheckAvailability, setCalendarCheckAvailability] = useState(true)

  // Webhook state
  const [webhookEnabled, setWebhookEnabled] = useState(false)
  const [webhooks, setWebhooks] = useState([
    {
      id: "1",
      name: "Call Started",
      url: "https://api.example.com/webhooks/call-start",
      event: "call.started",
      enabled: true,
    },
    {
      id: "2",
      name: "Call Ended",
      url: "https://api.example.com/webhooks/call-end",
      event: "call.ended",
      enabled: true,
    },
  ])

  const addWebhook = () => {
    setWebhooks([
      ...webhooks,
      {
        id: Date.now().toString(),
        name: "",
        url: "",
        event: "call.started",
        enabled: true,
      },
    ])
  }

  const removeWebhook = (id: string) => {
    setWebhooks(webhooks.filter((w) => w.id !== id))
  }

  const updateWebhook = (
    id: string,
    field: "name" | "url" | "event" | "enabled",
    value: string | boolean
  ) => {
    setWebhooks(
      webhooks.map((w) => (w.id === id ? { ...w, [field]: value } : w))
    )
  }

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-[#1A1630]">Integrations</h3>
          <p className="text-sm text-[#6B7285] mt-1">
            Connect external services to enhance your assistant&apos;s capabilities.
          </p>
        </div>
        <button className="px-4 py-1.5 rounded-lg bg-[#6C47FF] text-white text-sm font-medium hover:bg-[#5a39d9] transition-colors">
          Save All
        </button>
      </div>

      <div className="space-y-4">
        {/* CRM Upload Integration */}
        <IntegrationCard
          title="CRM Upload"
          description="Sync leads, contacts, and call data to your CRM"
          icon={<Upload className="w-5 h-5 text-[#6C47FF]" />}
          status={crmEnabled ? "connected" : "disconnected"}
        >
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#1A1630]">
                Enable CRM Integration
              </label>
              <Toggle enabled={crmEnabled} onChange={setCrmEnabled} />
            </div>

            {crmEnabled && (
              <>
                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    CRM Provider
                  </label>
                  <select
                    value={crmProvider}
                    onChange={(e) => setCrmProvider(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  >
                    <option value="hubspot">HubSpot</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="zoho">Zoho CRM</option>
                    <option value="pipedrive">Pipedrive</option>
                    <option value="freshsales">Freshsales</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    API Key / Access Token
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your CRM API key"
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-medium text-[#6B7285] uppercase tracking-wider">
                    Sync Options
                  </p>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Sync leads automatically
                    </label>
                    <Toggle enabled={crmSyncLeads} onChange={setCrmSyncLeads} />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Upload call transcripts
                    </label>
                    <Toggle
                      enabled={crmSyncTranscripts}
                      onChange={setCrmSyncTranscripts}
                    />
                  </div>
                </div>

                <button className="flex items-center gap-1.5 text-xs font-medium text-[#6C47FF] hover:text-[#5a39d9]">
                  <ExternalLink className="w-3.5 h-3.5" />
                  View CRM Integration Guide
                </button>
              </>
            )}
          </div>
        </IntegrationCard>

        {/* Petpooja Integration */}
        <IntegrationCard
          title="Petpooja POS"
          description="Direct order sync for restaurants - eliminate manual entry"
          icon={
            <span className="text-base font-bold text-[#6C47FF]">P</span>
          }
          status={petpoojaEnabled ? "connected" : "disconnected"}
        >
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#1A1630]">
                Enable Petpooja Integration
              </label>
              <Toggle enabled={petpoojaEnabled} onChange={setPetpoojaEnabled} />
            </div>

            {petpoojaEnabled && (
              <>
                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Restaurant ID
                  </label>
                  <input
                    type="text"
                    value={petpoojaRestaurantId}
                    onChange={(e) => setPetpoojaRestaurantId(e.target.value)}
                    placeholder="Enter your Petpooja Restaurant ID"
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    API Key
                  </label>
                  <input
                    type="password"
                    value={petpoojaApiKey}
                    onChange={(e) => setPetpoojaApiKey(e.target.value)}
                    placeholder="Enter your Petpooja API key"
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-medium text-[#6B7285] uppercase tracking-wider">
                    Sync Options
                  </p>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Sync orders to POS
                    </label>
                    <Toggle
                      enabled={petpoojaSyncOrders}
                      onChange={setPetpoojaSyncOrders}
                    />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Fetch menu from Petpooja
                    </label>
                    <Toggle
                      enabled={petpoojaSyncMenu}
                      onChange={setPetpoojaSyncMenu}
                    />
                  </div>
                </div>

                <div className="bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg p-3">
                  <p className="text-xs text-[#6B7285]">
                    <span className="font-medium text-[#1A1630]">Note:</span>{" "}
                    The assistant will automatically place orders in your
                    Petpooja POS when customers complete their order over the
                    phone.
                  </p>
                </div>
              </>
            )}
          </div>
        </IntegrationCard>

        {/* Google Sheets Integration */}
        <IntegrationCard
          title="Google Sheets"
          description="Read and write call data, leads, menus, and logs"
          icon={<FileSpreadsheet className="w-5 h-5 text-[#10B981]" />}
          status={sheetsEnabled ? "connected" : "disconnected"}
          defaultExpanded
        >
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#1A1630]">
                Enable Google Sheets
              </label>
              <Toggle enabled={sheetsEnabled} onChange={setSheetsEnabled} />
            </div>

            {sheetsEnabled && (
              <>
                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Connected Account
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-3 py-2 bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#10B981]" />
                      assistant@vomyra.com
                    </div>
                    <button className="px-3 py-2 text-xs font-medium text-[#6C47FF] border border-[#E4E1F0] rounded-lg hover:bg-[#F7F6FB]">
                      Change
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Spreadsheet URL
                  </label>
                  <input
                    type="url"
                    value={sheetsUrl}
                    onChange={(e) => setSheetsUrl(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Sheet Name (Tab)
                  </label>
                  <input
                    type="text"
                    defaultValue="Call Logs"
                    placeholder="Sheet1"
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-medium text-[#6B7285] uppercase tracking-wider">
                    Permissions
                  </p>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Write call logs to sheet
                    </label>
                    <Toggle
                      enabled={sheetsWriteCallLogs}
                      onChange={setSheetsWriteCallLogs}
                    />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Read data from sheet (e.g., menus, FAQs)
                    </label>
                    <Toggle
                      enabled={sheetsReadData}
                      onChange={setSheetsReadData}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </IntegrationCard>

        {/* Google Calendar Integration */}
        <IntegrationCard
          title="Google Calendar"
          description="Book appointments and check availability in real-time"
          icon={<Calendar className="w-5 h-5 text-[#4285F4]" />}
          status={calendarEnabled ? "connected" : "disconnected"}
        >
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#1A1630]">
                Enable Google Calendar
              </label>
              <Toggle enabled={calendarEnabled} onChange={setCalendarEnabled} />
            </div>

            {calendarEnabled && (
              <>
                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Connected Account
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-3 py-2 bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#10B981]" />
                      {calendarEmail}
                    </div>
                    <button className="px-3 py-2 text-xs font-medium text-[#6C47FF] border border-[#E4E1F0] rounded-lg hover:bg-[#F7F6FB]">
                      Change
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Calendar to Use
                  </label>
                  <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
                    <option>Primary Calendar</option>
                    <option>Appointments</option>
                    <option>Business Hours</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Default Appointment Duration
                    </label>
                    <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
                      <option>15 minutes</option>
                      <option>30 minutes</option>
                      <option>45 minutes</option>
                      <option>1 hour</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Buffer Between Appointments
                    </label>
                    <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
                      <option>No buffer</option>
                      <option>5 minutes</option>
                      <option>10 minutes</option>
                      <option>15 minutes</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-medium text-[#6B7285] uppercase tracking-wider">
                    Permissions
                  </p>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Allow booking appointments
                    </label>
                    <Toggle
                      enabled={calendarBookAppointments}
                      onChange={setCalendarBookAppointments}
                    />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <label className="text-sm text-[#1A1630]">
                      Check availability before booking
                    </label>
                    <Toggle
                      enabled={calendarCheckAvailability}
                      onChange={setCalendarCheckAvailability}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </IntegrationCard>

        {/* Webhook Integration */}
        <IntegrationCard
          title="Webhooks"
          description="Send real-time events to your own endpoints"
          icon={<Webhook className="w-5 h-5 text-[#F59E0B]" />}
          status={webhookEnabled ? "connected" : "disconnected"}
        >
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-[#1A1630]">
                Enable Webhooks
              </label>
              <Toggle enabled={webhookEnabled} onChange={setWebhookEnabled} />
            </div>

            {webhookEnabled && (
              <>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-[#6B7285] uppercase tracking-wider">
                      Configured Webhooks ({webhooks.length})
                    </p>
                    <button
                      onClick={addWebhook}
                      className="flex items-center gap-1 text-xs font-medium text-[#6C47FF] hover:text-[#5a39d9]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Webhook
                    </button>
                  </div>

                  {webhooks.map((webhook) => (
                    <div
                      key={webhook.id}
                      className="bg-white border border-[#E4E1F0] rounded-lg p-3 space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] font-medium text-[#6B7285] uppercase mb-1 block">
                              Name
                            </label>
                            <input
                              type="text"
                              value={webhook.name}
                              onChange={(e) =>
                                updateWebhook(webhook.id, "name", e.target.value)
                              }
                              placeholder="Webhook name"
                              className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-medium text-[#6B7285] uppercase mb-1 block">
                              Event
                            </label>
                            <select
                              value={webhook.event}
                              onChange={(e) =>
                                updateWebhook(webhook.id, "event", e.target.value)
                              }
                              className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                            >
                              <option value="call.started">Call Started</option>
                              <option value="call.ended">Call Ended</option>
                              <option value="call.transferred">
                                Call Transferred
                              </option>
                              <option value="appointment.booked">
                                Appointment Booked
                              </option>
                              <option value="order.placed">Order Placed</option>
                              <option value="lead.captured">Lead Captured</option>
                            </select>
                          </div>
                        </div>
                        <button
                          onClick={() => removeWebhook(webhook.id)}
                          className="ml-2 p-1 text-[#6B7285] hover:text-[#EF4444]"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div>
                        <label className="text-[10px] font-medium text-[#6B7285] uppercase mb-1 block">
                          Endpoint URL
                        </label>
                        <div className="flex items-center gap-2">
                          <Link2 className="w-3.5 h-3.5 text-[#6B7285] flex-shrink-0" />
                          <input
                            type="url"
                            value={webhook.url}
                            onChange={(e) =>
                              updateWebhook(webhook.id, "url", e.target.value)
                            }
                            placeholder="https://your-api.com/webhook"
                            className="flex-1 px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-[#6B7285]">Active</span>
                        <Toggle
                          enabled={webhook.enabled}
                          onChange={(v) =>
                            updateWebhook(webhook.id, "enabled", v)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F7F6FB] border border-[#E4E1F0] rounded-lg p-3">
                  <p className="text-xs text-[#6B7285]">
                    <span className="font-medium text-[#1A1630]">
                      Webhook Payload:
                    </span>{" "}
                    Events are sent as POST requests with JSON payload including
                    event type, timestamp, call ID, and relevant data.
                  </p>
                </div>

                <button className="flex items-center gap-1.5 text-xs font-medium text-[#6C47FF] hover:text-[#5a39d9]">
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Webhook Documentation
                </button>
              </>
            )}
          </div>
        </IntegrationCard>
      </div>
    </div>
  )
}
