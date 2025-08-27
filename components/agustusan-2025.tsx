"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { NewsModal } from "@/components/ui/news-modal"
import { Eye } from "lucide-react"

export function Agustusan2025() {
  const [selectedNews, setSelectedNews] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const kegiatanAgustusan = [
    {
      title: "Upacara Bendera 17 Agustus",
      description: "Upacara peringatan Hari Kemerdekaan Indonesia ke-80 yang diikuti seluruh masyarakat desa",
      image: "/images/agustusan/upacara.jpg",
      content: ``
    },
    {
      title: "Sepak Bola Liga Undi Cup IV 2025",
      description: "Lomba sepak bola dalam rangka memeriahkan perayaan Agustusan di Desa Gandu",
      image: "/images/agustusan/sepakbola.jpg",
      content: ``
    },
    {
      title: "Senam Massal",
      description: "Kegiatan senam aerobik bersama untuk mempromosikan gaya hidup sehat di masyarakat",
      image: "/images/agustusan/senam-massal.jpg",
      content: ``
    },
    {
      title: "Karnaval",
      description: "Parade budaya dan kreativitas warga desa menampilkan kostum dan dekorasi unik",
      image: "/images/agustusan/karnaval-budaya.jpg",
      content: ``
    },
    {
      title: "Malam 17 Agustus",
      description: "Acara tahlilan dan kumpul warga untuk makan-makan memperingati hari kemerdekaan",
      image: "/images/agustusan/wungon.jpg",
      content: ``
    },
    {
      title: "Lomba Fokus Warna",
      description: "Lomba mengingat dan fokus bereaksi untuk lompat ke warna tertentu secara berurutan",
      image: "/images/agustusan/fokus-warna.jpg",
      content: ``
    },
        {
      title: "Lomba Joget Balon",
      description: "Lomba joget sambil menjaga balon tetap di punggung dua pemain dengan gerakan kreatif",
      image: "/images/agustusan/joget-balon.jpg",
      content: ``
    },
        {
      title: "Lomba Pancing",
      description: "Lomba mengingat dan fokus bereaksi untuk lompat ke warna tertentu secara berurutan",
      image: "/images/agustusan/pancing-paku.jpg",
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
        title="Perayaan Agustusan 2025"
        subtitle="Rangkaian kegiatan memperingati Hari Kemerdekaan Indonesia ke-80 di Desa Gandu"
        backgroundImage="/images/hero-section/hero-5.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatanAgustusan.map((kegiatan, index) => (
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
