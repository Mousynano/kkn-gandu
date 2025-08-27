"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { ProfileDesa } from "@/components/profile-desa"
import { DashboardData } from "@/components/dashboard-data"
import { AnggotaPerangkat } from "@/components/anggota-perangkat"
import { KegiatanRutinan } from "@/components/kegiatan-rutinan"
import { Agustusan2025 } from "@/components/agustusan-2025"
import { KknUnnes2025 } from "@/components/kkn-unnes-2025"
import { UmkmPage } from "@/components/umkm-page"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("profile")

  const renderActiveSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileDesa />
      case "dashboard":
        return <DashboardData />
      case "perangkat":
        return <AnggotaPerangkat />
      case "umkm":
        return <UmkmPage />
      case "kegiatan-rutinan":
        return <KegiatanRutinan />
      case "agustusan-2025":
        return <Agustusan2025 />
      case "kkn-unnes-2025":
        return <KknUnnes2025 />
      default:
        return <ProfileDesa />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className={activeSection === "auth" ? "container mx-auto px-4 py-8" : ""}>
        {activeSection === "auth" ? (
          renderActiveSection()
        ) : (
          <div className="w-full">
            {renderActiveSection()}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
