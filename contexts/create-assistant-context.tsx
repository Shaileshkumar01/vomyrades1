"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { CreateAssistantModal } from "@/components/dashboard/create-assistant-modal"

interface CreateAssistantContextType {
  openCreateModal: () => void
}

const CreateAssistantContext = createContext<CreateAssistantContextType | undefined>(undefined)

export function useCreateAssistant() {
  const context = useContext(CreateAssistantContext)
  if (!context) {
    throw new Error("useCreateAssistant must be used within CreateAssistantProvider")
  }
  return context
}

export function CreateAssistantProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const openCreateModal = () => setModalOpen(true)

  const handleCreateAssistant = (newAssistant: {
    name: string
    description: string
    welcomeMessage: string
    voice: string
    language: string
  }) => {
    const id = newAssistant.name.toLowerCase().replace(/\s+/g, "-")
    // Navigate to the new assistant's detail page
    router.push(`/dashboard/assistants/${id}`)
  }

  return (
    <CreateAssistantContext.Provider value={{ openCreateModal }}>
      {children}
      <CreateAssistantModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onCreateAssistant={handleCreateAssistant}
      />
    </CreateAssistantContext.Provider>
  )
}
