"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { NewsModal } from "@/components/ui/news-modal"
import { Eye } from "lucide-react"

export function KegiatanRutinan() {
  const [selectedNews, setSelectedNews] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const kegiatanRutinan = [
    {
      title: "Kerja Bakti Desa",
      description:
        "Kegiatan membersihkan lingkungan desa yang dilakukan setiap minggu untuk menjaga kebersihan dan keindahan desa",
      image: "/images/rutinan/kerja-bakti.jpg",
      content: ``
    },
    {
      title: "Posyandu",
      description: "Pelayanan kesehatan untuk masyarakat",
      image: "/images/rutinan/posyandu.jpg",
      content: ``
    },
    {
      title: "Snntunan Anak Yatim",
      description: "Kegiatan rutinan tiap tahun untuk menyantuni anak yatim di desa",
      image: "/images/rutinan/santunan-yatim.jpg",
      content: ``
    },
    {
      title: "Tahlilan Giliran",
      description: "Tahlilan giliran di desa setiap malam Sabtu",
      image: "/images/rutinan/tahlilan.jpg",
      content: ``
    },    
    {
      title: "Senam Aerobik Dan Lansia",
      description: "Senam aerobik dan lansia bersama untuk mempromosikan gaya hidup sehat di masyarakat",
      image: "/images/rutinan/senam.jpg",
      content: ``
    }
  ]

  const openNewsModal = (news: any) => {
    setSelectedNews(news)
    setIsModalOpen(true)
  }

  const closeNewsModal = () => {
    setIsModalOpen(false)
    setSelectedNews(null)
  }

  return (
    <div className="space-y-6">
      {/* Hero Section - Full width */}
      <HeroSection
        title="Kegiatan Rutinan Desa"
        subtitle="Berbagai kegiatan rutin yang dilaksanakan untuk kemajuan dan kesejahteraan masyarakat Desa Gandu"
        backgroundImage="/images/hero-section/hero-4.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatanRutinan.map((kegiatan, index) => (
            <Card key={index} className="border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden group">
              <img
                src={kegiatan.image || "/placeholder.svg"}
                alt={kegiatan.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <CardContent className="p-4 space-y-3">
                <CardTitle className="text-lg font-bold text-gray-900 leading-tight">{kegiatan.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{kegiatan.description}</p>
                <Button 
                  onClick={() => openNewsModal(kegiatan)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <NewsModal
          isOpen={isModalOpen}
          onClose={closeNewsModal}
          title={selectedNews.title}
          description={selectedNews.description}
          image={selectedNews.image}
          content={selectedNews.content}
        />
      )}
    </div>
  )
}
