import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Users, FileText, DollarSign, Shield, Heart, Phone, Mail, MapPin } from "lucide-react"

export function AnggotaPerangkat() {
  const perangkatDesa = [
    {
      nama: "Bapak Suyanto, S.Sos",
      jabatan: "Kepala Desa",
      periode: "2019-2025",
      pendidikan: "S1 Sosiologi",
      pengalaman: "6 tahun",
      telepon: "0812-3456-7890",
      email: "kades@desasejahtera.id",
      icon: Crown,
      color: "bg-yellow-500",
      deskripsi: "Memimpin pemerintahan desa dan bertanggung jawab atas seluruh kegiatan pembangunan desa",
    },
    {
      nama: "Ibu Siti Aminah, S.Pd",
      jabatan: "Sekretaris Desa",
      periode: "2020-2026",
      pendidikan: "S1 Pendidikan",
      pengalaman: "4 tahun",
      telepon: "0813-4567-8901",
      email: "sekdes@desasejahtera.id",
      icon: FileText,
      color: "bg-blue-500",
      deskripsi: "Mengelola administrasi desa dan membantu kepala desa dalam tugas-tugas administratif",
    },
    {
      nama: "Bapak Wahyu Santoso",
      jabatan: "Bendahara Desa",
      periode: "2020-2026",
      pendidikan: "SMK Akuntansi",
      pengalaman: "5 tahun",
      telepon: "0814-5678-9012",
      email: "bendahara@desasejahtera.id",
      icon: DollarSign,
      color: "bg-green-500",
      deskripsi: "Mengelola keuangan desa dan bertanggung jawab atas pelaporan keuangan",
    },
  ]

  const kasiKaur = [
    {
      nama: "Bapak Ahmad Fauzi",
      jabatan: "Kasi Pemerintahan",
      bidang: "Administrasi & Tata Kelola",
      icon: Shield,
      color: "bg-purple-500",
    },
    {
      nama: "Ibu Dewi Sartika",
      jabatan: "Kasi Kesejahteraan",
      bidang: "Kesehatan & Sosial",
      icon: Heart,
      color: "bg-red-500",
    },
    {
      nama: "Bapak Bambang Wijaya",
      jabatan: "Kasi Pelayanan",
      bidang: "Pelayanan Masyarakat",
      icon: Users,
      color: "bg-indigo-500",
    },
    {
      nama: "Ibu Ratna Sari",
      jabatan: "Kaur Tata Usaha",
      bidang: "Administrasi Umum",
      icon: FileText,
      color: "bg-gray-500",
    },
    {
      nama: "Bapak Joko Susilo",
      jabatan: "Kaur Keuangan",
      bidang: "Pengelolaan Keuangan",
      icon: DollarSign,
      color: "bg-emerald-500",
    },
    {
      nama: "Ibu Endang Suryani",
      jabatan: "Kaur Perencanaan",
      bidang: "Perencanaan Pembangunan",
      icon: MapPin,
      color: "bg-orange-500",
    },
  ]

  const kepalaDusun = [
    {
      nama: "Bapak Sutrisno",
      dusun: "Dusun Makmur",
      wilayah: "RT 01-03",
      jumlahKK: "180 KK",
    },
    {
      nama: "Bapak Haryanto",
      dusun: "Dusun Sejahtera",
      wilayah: "RT 04-06",
      jumlahKK: "195 KK",
    },
    {
      nama: "Bapak Mulyono",
      dusun: "Dusun Harmoni",
      wilayah: "RT 07-09",
      jumlahKK: "220 KK",
    },
    {
      nama: "Bapak Sugeng",
      dusun: "Dusun Lestari",
      wilayah: "RT 10-12",
      jumlahKK: "280 KK",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Perangkat Desa Sejahtera</h1>
        <p className="text-lg text-gray-600">
          Struktur organisasi dan profil lengkap perangkat Desa Sejahtera periode 2019-2025
        </p>
      </div>

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
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={`/placeholder.svg?height=80&width=80`} />
                      <AvatarFallback className="text-lg font-semibold">
                        {perangkat.nama
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`w-12 h-12 ${perangkat.color} rounded-lg flex items-center justify-center`}>
                      <perangkat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{perangkat.nama}</h3>
                      <p className="text-lg text-gray-600 font-medium">{perangkat.jabatan}</p>
                    </div>

                    <p className="text-gray-700">{perangkat.deskripsi}</p>

                    <div className="flex flex-wrap gap-3">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Periode: {perangkat.periode}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {perangkat.pendidikan}
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        Pengalaman: {perangkat.pengalaman}
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{perangkat.telepon}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{perangkat.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Kepala Seksi dan Kepala Urusan */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Kepala Seksi & Kepala Urusan
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kasiKaur.map((staff, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${staff.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <staff.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{staff.nama}</h4>
                    <p className="text-sm font-medium text-gray-700 mb-2">{staff.jabatan}</p>
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
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-green-800 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            Kepala Dusun
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kepalaDusun.map((kadus, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={`/placeholder.svg?height=56&width=56`} />
                    <AvatarFallback className="bg-green-500 text-white font-semibold">
                      {kadus.nama
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{kadus.nama}</h4>
                    <p className="text-sm font-medium text-green-700">{kadus.dusun}</p>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Struktur Organisasi */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-purple-800">Struktur Organisasi</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-300 rounded-lg p-4 mb-6 inline-block">
              <h3 className="font-bold text-yellow-800">KEPALA DESA</h3>
              <p className="text-sm text-yellow-700">Bapak Suyanto, S.Sos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300 rounded-lg p-3">
                <h4 className="font-semibold text-blue-800">SEKRETARIS DESA</h4>
                <p className="text-sm text-blue-700">Ibu Siti Aminah, S.Pd</p>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-3">
                <h4 className="font-semibold text-green-800">BENDAHARA DESA</h4>
                <p className="text-sm text-green-700">Bapak Wahyu Santoso</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-lg p-3">
                <h5 className="font-medium text-purple-800 text-sm">KASI PEMERINTAHAN</h5>
                <p className="text-xs text-purple-700">Bapak Ahmad Fauzi</p>
              </div>
              <div className="bg-gradient-to-r from-red-100 to-pink-100 border border-red-300 rounded-lg p-3">
                <h5 className="font-medium text-red-800 text-sm">KASI KESEJAHTERAAN</h5>
                <p className="text-xs text-red-700">Ibu Dewi Sartika</p>
              </div>
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 border border-indigo-300 rounded-lg p-3">
                <h5 className="font-medium text-indigo-800 text-sm">KASI PELAYANAN</h5>
                <p className="text-xs text-indigo-700">Bapak Bambang Wijaya</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {kepalaDusun.map((kadus, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-3"
                >
                  <h5 className="font-medium text-green-800 text-sm">KEPALA DUSUN</h5>
                  <p className="text-xs text-green-700">{kadus.nama}</p>
                  <p className="text-xs text-green-600">{kadus.dusun}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
