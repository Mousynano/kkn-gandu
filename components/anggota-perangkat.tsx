import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Users, FileText, Shield, Phone, Mail, MapPin } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export function AnggotaPerangkat() {
  const perangkatDesa = [
    {
      nama: "Solikhin",
      jabatan: "Kepala Desa",
      periode: "2019-2025",
      pendidikan: "S1",
      pengalaman: "6 tahun",
      telepon: "0812-3456-7890",
      email: "kades@desagandu.pemalangkab.go.id",
      icon: Crown,
      color: "bg-yellow-500",
      deskripsi: "Memimpin pemerintahan desa dan bertanggung jawab atas seluruh kegiatan pembangunan desa",
      foto: "/images/staff/solikhin.jpg",
    },
    {
      nama: "Bambang Susanto",
      jabatan: "Sekretaris Desa",
      periode: "2020-2026",
      pendidikan: "S1",
      pengalaman: "4 tahun",
      telepon: "0813-4567-8901",
      email: "sekdes@desagandu.pemalangkab.go.id",
      icon: FileText,
      color: "bg-blue-500",
      deskripsi: "Mengelola administrasi desa dan membantu kepala desa dalam tugas-tugas administratif",
      foto: "/images/staff/bambang.jpg",
    },
  ]

  // Kepala Seksi (Kasi) - Red color scheme
  const kasiData = [
    {
      nama: "Abdul Kholik",
      jabatan: "Kasi Pemerintahan",
      bidang: "Administrasi & Tata Kelola",
      color: "bg-red-500",
      foto: "/images/staff/kholik.jpg",
    },
    {
      nama: "Firda Natasya Khoirunnisa",
      jabatan: "Kasi Kesejahteraan",
      bidang: "Kesehatan & Sosial",
      color: "bg-red-500",
      foto: "/images/staff/firda.jpg",
    },
    {
      nama: "Kiswanto",
      jabatan: "Kasi Pelayanan",
      bidang: "Pelayanan Masyarakat",
      color: "bg-red-500",
      foto: "/images/staff/kiswanto.jpg",
    },
  ]

  // Kepala Urusan (Kaur) - Green color scheme
  const kaurData = [
    {
      nama: "Kukuh Agung Prasetyo",
      jabatan: "Kaur TU dan Umum",
      bidang: "Tata Usaha & Administrasi Umum",
      color: "bg-green-500",
      foto: "/images/staff/kukuh.jpg",
    },
    {
      nama: "Harnoto",
      jabatan: "Kaur Keuangan",
      bidang: "Pengelolaan Keuangan",
      color: "bg-green-500",
      foto: "/images/staff/harnoto.jpg",
    },
    {
      nama: "Kaswanto",
      jabatan: "Kaur Perencanaan",
      bidang: "Perencanaan Pembangunan",
      color: "bg-green-500",
      foto: "/images/staff/kaswanto.jpg",
    },
  ]

  // Kepala Dusun (Kadus) - Purple color scheme
  const kepalaDusun = [
    {
      nama: "Belum Terisi",
      dusun: "Dusun I",
      wilayah: "RT 01-04",
      jumlahKK: "- KK",
      status: "kosong",
      color: "bg-purple-500",
      foto: null,
    },
    {
      nama: "Gusaeri",
      dusun: "Dusun II",
      wilayah: "RT 05-08",
      jumlahKK: "180 KK",
      status: "aktif",
      color: "bg-purple-500",
      foto: "/images/staff/gusaeri.jpg",
    },
    {
      nama: "Didik Aryanto",
      dusun: "Dusun III",
      wilayah: "RT 09-12",
      jumlahKK: "195 KK",
      status: "aktif",
      color: "bg-purple-500",
      foto: "/images/staff/didik.jpg",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Hero Section - Full width */}
      <HeroSection
        title="Perangkat Desa Gandu"
        subtitle="Struktur organisasi dan profil lengkap perangkat Desa Gandu periode 2019-2025"
        backgroundImage="/images/hero-section/hero-6.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Pimpinan Desa */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-amber-50">
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <Crown className="w-6 h-6" />
              Pimpinan Desa
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {perangkatDesa.map((perangkat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={perangkat.foto || "/placeholder.svg"} alt={perangkat.nama} />
                        <AvatarFallback className="text-lg font-semibold">
                          {perangkat.nama
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{perangkat.nama}</h3>
                        <p className="text-lg text-yellow-600 font-medium">{perangkat.jabatan}</p>
                      </div>

                      <p className="text-gray-700">{perangkat.deskripsi}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Kepala Seksi */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Kepala Seksi (Kasi)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kasiData.map((staff, index) => (
                <div
                  key={index}
                  className="bg-white border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={staff.foto || "/placeholder.svg"} alt={staff.nama} />
                      <AvatarFallback className="bg-red-500 text-white font-semibold">
                        {staff.nama
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{staff.nama}</h4>
                      <p className="text-sm font-medium text-red-700 mb-2">{staff.jabatan}</p>
                      <p className="text-xs text-gray-600">{staff.bidang}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Kepala Urusan */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
            <CardTitle className="text-green-800 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Kepala Urusan (Kaur)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kaurData.map((staff, index) => (
                <div
                  key={index}
                  className="bg-white border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={staff.foto || "/placeholder.svg"} alt={staff.nama} />
                      <AvatarFallback className="bg-green-500 text-white font-semibold">
                        {staff.nama
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{staff.nama}</h4>
                      <p className="text-sm font-medium text-green-700 mb-2">{staff.jabatan}</p>
                      <p className="text-xs text-gray-600">{staff.bidang}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Kepala Dusun */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Kepala Dusun (Kadus)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kepalaDusun.map((kadus, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${
                    kadus.status === "kosong"
                      ? "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300"
                      : "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={kadus.foto || "/placeholder.svg?height=56&width=56"} alt={kadus.nama} />
                      <AvatarFallback
                        className={`font-semibold ${
                          kadus.status === "kosong" ? "bg-gray-400 text-white" : "bg-purple-500 text-white"
                        }`}
                      >
                        {kadus.status === "kosong"
                          ? "?"
                          : kadus.nama
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${kadus.status === "kosong" ? "text-gray-500" : "text-gray-900"}`}>
                        {kadus.nama}
                      </h4>
                      <p
                        className={`text-sm font-medium ${kadus.status === "kosong" ? "text-gray-400" : "text-purple-700"}`}
                      >
                        {kadus.dusun}
                      </p>
                      <div className="flex flex-col gap-1 mt-2">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <MapPin className="w-3 h-3" />
                          <span>{kadus.wilayah}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Users className="w-3 h-3" />
                          <span>{kadus.jumlahKK}</span>
                        </div>
                      </div>
                      {kadus.status === "kosong" && (
                        <Badge variant="outline" className="mt-2 text-xs border-orange-200 text-orange-600">
                          Posisi Kosong
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
