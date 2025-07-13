"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { ProfileDesa } from "@/components/profile-desa"
import { SejarahDesa } from "@/components/sejarah-desa"
import { JatiDiriDesa } from "@/components/jati-diri-desa"
import { DashboardData } from "@/components/dashboard-data"
import { AnggotaPerangkat } from "@/components/anggota-perangkat"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("profile")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDesa />
      case "sejarah":
        return <SejarahDesa />
      case "jati-diri":
        return <JatiDiriDesa />
      case "dashboard":
        return <DashboardData />
      case "perangkat":
        return <AnggotaPerangkat />
      default:
        return <ProfileDesa />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-green-50 to-emerald-50">
        <AppSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <SidebarInset className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-white/80 backdrop-blur-sm px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Desa Sejahtera</h1>
                <p className="text-xs text-gray-600">Portal Resmi Desa</p>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6">{renderActiveSection()}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
