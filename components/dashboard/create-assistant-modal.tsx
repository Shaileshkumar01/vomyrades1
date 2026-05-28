"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Bot,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Upload,
  FileSpreadsheet,
  Calendar,
  Webhook,
  Check,
  Plus,
  Trash2,
  Link2,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

interface CreateAssistantModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateAssistant?: (assistant: {
    name: string
    description: string
    welcomeMessage: string
    voice: string
    language: string
  }) => void
}

type Step = "basics" | "configuration" | "integration"

function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
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

interface IntegrationCardProps {
  title: string
  description: string
  icon: React.ReactNode
  enabled: boolean
  onToggle: (enabled: boolean) => void
  children?: React.ReactNode
}

function IntegrationCard({
  title,
  description,
  icon,
  enabled,
  onToggle,
  children,
}: IntegrationCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-[#E4E1F0] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-3 bg-white">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 flex-1 text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F7F6FB] flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#1A1630]">{title}</p>
            <p className="text-[11px] text-[#6B7285] truncate">{description}</p>
          </div>
          {enabled &&
            (expanded ? (
              <ChevronUp className="w-4 h-4 text-[#6B7285]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#6B7285]" />
            ))}
        </button>
        <Toggle enabled={enabled} onChange={onToggle} />
      </div>
      {enabled && expanded && children && (
        <div className="p-3 pt-0 border-t border-[#E4E1F0] bg-[#FAFAFA]">
          {children}
        </div>
      )}
    </div>
  )
}

export function CreateAssistantModal({
  open,
  onOpenChange,
  onCreateAssistant,
}: CreateAssistantModalProps) {
  const [step, setStep] = useState<Step>("basics")

  // Basics
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState(
    "Hello! How can I help you today?"
  )

  // Configuration
  const [aiProvider, setAiProvider] = useState("openai")
  const [model, setModel] = useState("gpt-4.1-mini")
  const [voiceProvider, setVoiceProvider] = useState("azure")
  const [voice, setVoice] = useState("aarti")
  const [language, setLanguage] = useState("hi-IN")

  // Integration
  const [crmEnabled, setCrmEnabled] = useState(false)
  const [crmProvider, setCrmProvider] = useState("hubspot")
  const [petpoojaEnabled, setPetpoojaEnabled] = useState(false)
  const [petpoojaRestaurantId, setPetpoojaRestaurantId] = useState("")
  const [sheetsEnabled, setSheetsEnabled] = useState(false)
  const [sheetsUrl, setSheetsUrl] = useState("")
  const [calendarEnabled, setCalendarEnabled] = useState(false)
  const [webhookEnabled, setWebhookEnabled] = useState(false)
  const [webhooks, setWebhooks] = useState<
    Array<{ id: string; name: string; url: string; event: string }>
  >([])

  const addWebhook = () => {
    setWebhooks([
      ...webhooks,
      { id: Date.now().toString(), name: "", url: "", event: "call.started" },
    ])
  }

  const removeWebhook = (id: string) => {
    setWebhooks(webhooks.filter((w) => w.id !== id))
  }

  const updateWebhook = (
    id: string,
    field: "name" | "url" | "event",
    value: string
  ) => {
    setWebhooks(webhooks.map((w) => (w.id === id ? { ...w, [field]: value } : w)))
  }

  const handleCreate = () => {
    // Call the callback to add the new assistant
    if (onCreateAssistant) {
      onCreateAssistant({
        name,
        description,
        welcomeMessage,
        voice,
        language,
      })
    }
    onOpenChange(false)
    // Reset form
    setStep("basics")
    setName("")
    setDescription("")
    setWelcomeMessage("Hello! How can I help you today?")
  }

  const canProceed = () => {
    if (step === "basics") {
      return name.trim().length > 0
    }
    return true
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#6C47FF]/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#6C47FF]" />
            </div>
            Create New Assistant
          </DialogTitle>
          <DialogDescription>
            Set up a new AI voice agent with your preferred configuration.
          </DialogDescription>
        </DialogHeader>

        {/* Step indicators */}
        <div className="flex items-center gap-2 py-4 border-b border-[#E4E1F0]">
          {(["basics", "configuration", "integration"] as Step[]).map(
            (s, index) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  step === s
                    ? "bg-[#6C47FF] text-white"
                    : "bg-[#F7F6FB] text-[#6B7285] hover:bg-[#E4E1F0]"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    step === s
                      ? "bg-white/20"
                      : "bg-[#E4E1F0]"
                  }`}
                >
                  {index + 1}
                </span>
                {s === "basics"
                  ? "Basics"
                  : s === "configuration"
                  ? "Configuration"
                  : "Integration"}
              </button>
            )
          )}
        </div>

        {/* Step content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {step === "basics" && (
            <>
              <div>
                <label className="text-sm font-medium text-[#1A1630] mb-2 block">
                  Assistant Name <span className="text-[#EF4444]">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Restaurant Reservations"
                  className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#1A1630] mb-2 block">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what this assistant does..."
                  rows={3}
                  className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF] resize-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-[#1A1630]">
                    Welcome Message
                  </label>
                </div>
                <input
                  type="text"
                  value={welcomeMessage}
                  onChange={(e) => setWelcomeMessage(e.target.value)}
                  placeholder="Hello! How can I help you today?"
                  className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#1A1630] mb-2 block">
                  System Prompt
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Describe the agent's role, tasks, and communication style..."
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF] resize-none"
                  />
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded bg-[#6C47FF] text-white text-xs font-medium hover:bg-[#5a39d9]"
                  >
                    <Sparkles className="w-3 h-3" />
                    Generate
                  </button>
                </div>
              </div>
            </>
          )}

          {step === "configuration" && (
            <>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-[#1A1630]">
                  Model Settings
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      AI Provider
                    </label>
                    <select
                      value={aiProvider}
                      onChange={(e) => setAiProvider(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    >
                      <option value="openai">OpenAI</option>
                      <option value="groq">Groq</option>
                      <option value="xai">xAI</option>
                      <option value="vomyra">Vomyra AI</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Model
                    </label>
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    >
                      <option value="gpt-4.1-mini">GPT-4.1 Mini</option>
                      <option value="gpt-4o">GPT-4o</option>
                      <option value="gpt-4.1">GPT-4.1</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E4E1F0]">
                <h4 className="text-sm font-semibold text-[#1A1630]">
                  Voice Settings
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Voice Provider
                    </label>
                    <select
                      value={voiceProvider}
                      onChange={(e) => setVoiceProvider(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    >
                      <option value="azure">Azure</option>
                      <option value="elevenlabs">ElevenLabs</option>
                      <option value="cartesia">Cartesia</option>
                      <option value="openai">OpenAI TTS</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Voice
                    </label>
                    <select
                      value={voice}
                      onChange={(e) => setVoice(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    >
                      <option value="aarti">Aarti (Female, Hindi)</option>
                      <option value="arjun">Arjun (Male, Hindi)</option>
                      <option value="aanya">Aanya (Female, English)</option>
                      <option value="vikram">Vikram (Male, English)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E4E1F0]">
                <h4 className="text-sm font-semibold text-[#1A1630]">
                  Speech Input Settings
                </h4>
                <div>
                  <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                    Primary Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                  >
                    <option value="hi-IN">Hindi (India)</option>
                    <option value="en-IN">English (India)</option>
                    <option value="mr-IN">Marathi (India)</option>
                    <option value="ta-IN">Tamil (India)</option>
                    <option value="te-IN">Telugu (India)</option>
                    <option value="bn-IN">Bengali (India)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E4E1F0]">
                <h4 className="text-sm font-semibold text-[#1A1630]">
                  Advanced Settings
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Max Call Duration
                    </label>
                    <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
                      <option value="300">5 minutes</option>
                      <option value="600">10 minutes</option>
                      <option value="900">15 minutes</option>
                      <option value="1800">30 minutes</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-2 block">
                      Temperature
                    </label>
                    <select className="w-full px-3 py-2 bg-white border border-[#E4E1F0] rounded-lg text-sm text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
                      <option value="0.1">0.1 (Focused)</option>
                      <option value="0.3">0.3 (Balanced)</option>
                      <option value="0.5">0.5 (Creative)</option>
                      <option value="0.7">0.7 (Very Creative)</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          {step === "integration" && (
            <div className="space-y-3">
              <p className="text-sm text-[#6B7285] mb-4">
                Connect external services to enhance your assistant&apos;s
                capabilities. You can configure these later as well.
              </p>

              {/* CRM Integration */}
              <IntegrationCard
                title="CRM Upload"
                description="Sync leads and call data to your CRM"
                icon={<Upload className="w-4 h-4 text-[#6C47FF]" />}
                enabled={crmEnabled}
                onToggle={setCrmEnabled}
              >
                <div className="pt-3 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-1.5 block">
                      CRM Provider
                    </label>
                    <select
                      value={crmProvider}
                      onChange={(e) => setCrmProvider(e.target.value)}
                      className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    >
                      <option value="hubspot">HubSpot</option>
                      <option value="salesforce">Salesforce</option>
                      <option value="zoho">Zoho CRM</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-1.5 block">
                      API Key
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your CRM API key"
                      className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    />
                  </div>
                </div>
              </IntegrationCard>

              {/* Petpooja Integration */}
              <IntegrationCard
                title="Petpooja POS"
                description="Direct order sync for restaurants"
                icon={
                  <span className="text-sm font-bold text-[#6C47FF]">P</span>
                }
                enabled={petpoojaEnabled}
                onToggle={setPetpoojaEnabled}
              >
                <div className="pt-3 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-1.5 block">
                      Restaurant ID
                    </label>
                    <input
                      type="text"
                      value={petpoojaRestaurantId}
                      onChange={(e) => setPetpoojaRestaurantId(e.target.value)}
                      placeholder="Enter your Restaurant ID"
                      className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-1.5 block">
                      API Key
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your Petpooja API key"
                      className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    />
                  </div>
                </div>
              </IntegrationCard>

              {/* Google Sheets Integration */}
              <IntegrationCard
                title="Google Sheets"
                description="Read/write call data, leads, and logs"
                icon={<FileSpreadsheet className="w-4 h-4 text-[#10B981]" />}
                enabled={sheetsEnabled}
                onToggle={setSheetsEnabled}
              >
                <div className="pt-3 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-1.5 block">
                      Spreadsheet URL
                    </label>
                    <input
                      type="url"
                      value={sheetsUrl}
                      onChange={(e) => setSheetsUrl(e.target.value)}
                      placeholder="https://docs.google.com/spreadsheets/d/..."
                      className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]"
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#6C47FF] hover:text-[#5a39d9]"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Connect Google Account
                  </button>
                </div>
              </IntegrationCard>

              {/* Google Calendar Integration */}
              <IntegrationCard
                title="Google Calendar"
                description="Book appointments and check availability"
                icon={<Calendar className="w-4 h-4 text-[#4285F4]" />}
                enabled={calendarEnabled}
                onToggle={setCalendarEnabled}
              >
                <div className="pt-3 space-y-3">
                  <div>
                    <label className="text-xs font-medium text-[#1A1630] mb-1.5 block">
                      Calendar
                    </label>
                    <select className="w-full px-2 py-1.5 bg-white border border-[#E4E1F0] rounded text-xs text-[#1A1630] focus:outline-none focus:border-[#6C47FF]">
                      <option>Primary Calendar</option>
                      <option>Appointments</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#6C47FF] hover:text-[#5a39d9]"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Connect Google Account
                  </button>
                </div>
              </IntegrationCard>

              {/* Webhook Integration */}
              <IntegrationCard
                title="Webhooks"
                description="Send real-time events to your endpoints"
                icon={<Webhook className="w-4 h-4 text-[#F59E0B]" />}
                enabled={webhookEnabled}
                onToggle={setWebhookEnabled}
              >
                <div className="pt-3 space-y-3">
                  {webhooks.map((webhook) => (
                    <div
                      key={webhook.id}
                      className="bg-white border border-[#E4E1F0] rounded p-2 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={webhook.name}
                          onChange={(e) =>
                            updateWebhook(webhook.id, "name", e.target.value)
                          }
                          placeholder="Name"
                          className="flex-1 px-2 py-1 bg-white border border-[#E4E1F0] rounded text-xs focus:outline-none focus:border-[#6C47FF]"
                        />
                        <select
                          value={webhook.event}
                          onChange={(e) =>
                            updateWebhook(webhook.id, "event", e.target.value)
                          }
                          className="px-2 py-1 bg-white border border-[#E4E1F0] rounded text-xs focus:outline-none focus:border-[#6C47FF]"
                        >
                          <option value="call.started">Call Started</option>
                          <option value="call.ended">Call Ended</option>
                          <option value="appointment.booked">Appointment</option>
                        </select>
                        <button
                          type="button"
                          onClick={() => removeWebhook(webhook.id)}
                          className="p-1 text-[#6B7285] hover:text-[#EF4444]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Link2 className="w-3 h-3 text-[#6B7285]" />
                        <input
                          type="url"
                          value={webhook.url}
                          onChange={(e) =>
                            updateWebhook(webhook.id, "url", e.target.value)
                          }
                          placeholder="https://your-api.com/webhook"
                          className="flex-1 px-2 py-1 bg-white border border-[#E4E1F0] rounded text-xs focus:outline-none focus:border-[#6C47FF]"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addWebhook}
                    className="flex items-center gap-1 text-xs font-medium text-[#6C47FF] hover:text-[#5a39d9]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Webhook
                  </button>
                </div>
              </IntegrationCard>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E4E1F0]">
          <button
            type="button"
            onClick={() => {
              if (step === "configuration") setStep("basics")
              else if (step === "integration") setStep("configuration")
            }}
            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              step === "basics"
                ? "invisible"
                : "text-[#6B7285] hover:text-[#1A1630] hover:bg-[#F7F6FB]"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 text-sm font-medium text-[#6B7285] hover:text-[#1A1630] rounded-lg hover:bg-[#F7F6FB] transition-colors"
            >
              Cancel
            </button>
            {step === "integration" ? (
              <button
                type="button"
                onClick={handleCreate}
                disabled={!canProceed()}
                className="flex items-center gap-1 px-4 py-2 bg-[#6C47FF] text-white text-sm font-medium rounded-lg hover:bg-[#5a39d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Assistant
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  if (step === "basics") setStep("configuration")
                  else if (step === "configuration") setStep("integration")
                }}
                disabled={!canProceed()}
                className="flex items-center gap-1 px-4 py-2 bg-[#6C47FF] text-white text-sm font-medium rounded-lg hover:bg-[#5a39d9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
