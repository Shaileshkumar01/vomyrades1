import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F7F6FB]">
      <DashboardSidebar />
      <div className="ml-[220px]">
        {children}
      </div>
    </div>
  )
}
