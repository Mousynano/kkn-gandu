"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Home, History, Heart, BarChart3, Users, Leaf } from "lucide-react"

const menuItems = [
  {
    id: "profile",
    title: "Profil Desa",
    icon: Home,
    description: "Informasi umum desa",
  },
  {
    id: "sejarah",
    title: "Sejarah Desa",
    icon: History,
    description: "Perjalanan sejarah desa",
  },
  {
    id: "jati-diri",
    title: "Jati Diri Desa",
    icon: Heart,
    description: "Identitas dan budaya desa",
  },
  {
    id: "dashboard",
    title: "Dashboard Data",
    icon: BarChart3,
    description: "Infografis dan statistik",
  },
  {
    id: "perangkat",
    title: "Perangkat Desa",
    icon: Users,
    description: "Struktur organisasi desa",
  },
]

interface AppSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function AppSidebar({ activeSection, setActiveSection }: AppSidebarProps) {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="border-b bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Desa Sejahtera</h2>
            <p className="text-green-100 text-sm">Kab. Harmoni, Jawa Tengah</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 font-medium px-3 py-2">Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    isActive={activeSection === item.id}
                    className="w-full justify-start gap-3 px-3 py-3 hover:bg-green-50 data-[active=true]:bg-green-100 data-[active=true]:text-green-800 data-[active=true]:border-r-2 data-[active=true]:border-green-600"
                  >
                    <item.icon className="w-5 h-5" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-gray-500">{item.description}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t bg-gray-50 p-4">
        <div className="text-center text-xs text-gray-500">
          <p>© 2024 Desa Sejahtera</p>
          <p>Sistem Informasi Desa</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
