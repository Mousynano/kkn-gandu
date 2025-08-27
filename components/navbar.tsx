"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, BarChart3, Users, Leaf, Menu, User, Archive, ChevronDown, Store } from "lucide-react"

const menuItems = [
  {
    id: "profile",
    title: "Profil Desa",
    icon: Home,
  },
  {
    id: "dashboard",
    title: "Dashboard Data",
    icon: BarChart3,
  },
  {
    id: "perangkat",
    title: "Perangkat Desa",
    icon: Users,
  },
  {
    id: "umkm",
    title: "UMKM",
    icon: Store,
  },
]

const arsipItems = [
  {
    id: "kegiatan-rutinan",
    title: "Kegiatan Rutinan",
  },
  {
    id: "agustusan-2025",
    title: "Agustusan 2025",
  },
  {
    id: "kkn-unnes-2025",
    title: "KKN UNNES 2025",
  },
]

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isArsipActive = arsipItems.some((item) => item.id === activeSection)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-12 flex items-center justify-center">
              <img src="/images/pemalang.svg" alt="Pemalang" className="h-full w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Desa Gandu</h1>
              <p className="text-xs text-gray-600">Kec. Comal, Kab. Pemalang</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 ${
                  activeSection === item.id
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.title}
              </Button>
            ))}

            {/* Arsip Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isArsipActive ? "default" : "ghost"}
                  className={`flex items-center gap-2 ${
                    isArsipActive
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  <Archive className="w-4 h-4" />
                  Arsip
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {arsipItems.map((item) => (
                  <DropdownMenuItem
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`cursor-pointer ${activeSection === item.id ? "bg-green-50 text-green-700" : ""}`}
                  >
                    {item.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-4 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">Desa Gandu</h2>
                      <p className="text-sm text-gray-600">Kec. Comal, Kab. Pemalang</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="space-y-2">
                    {menuItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={activeSection === item.id ? "default" : "ghost"}
                        onClick={() => {
                          setActiveSection(item.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className={`w-full justify-start gap-3 ${
                          activeSection === item.id
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "hover:bg-green-50 hover:text-green-700"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        {item.title}
                      </Button>
                    ))}

                    {/* Mobile Arsip Section */}
                    <div className="pt-2 border-t">
                      <p className="text-sm font-medium text-gray-600 px-3 py-2">Arsip</p>
                      {arsipItems.map((item) => (
                        <Button
                          key={item.id}
                          variant={activeSection === item.id ? "default" : "ghost"}
                          onClick={() => {
                            setActiveSection(item.id)
                            setIsMobileMenuOpen(false)
                          }}
                          className={`w-full justify-start gap-3 ml-4 ${
                            activeSection === item.id
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "hover:bg-green-50 hover:text-green-700"
                          }`}
                        >
                          <Archive className="w-4 h-4" />
                          {item.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
