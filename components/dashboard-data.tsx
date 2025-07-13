"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, Home, GraduationCap, Heart, Wheat, TrendingUp, PieChart, BarChart3, Activity } from "lucide-react"

export function DashboardData() {
  const demografiData = [
    { kategori: "Laki-laki", jumlah: 1750, persentase: 50, color: "bg-blue-500" },
    { kategori: "Perempuan", jumlah: 1750, persentase: 50, color: "bg-pink-500" },
  ]

  const pendidikanData = [
    { tingkat: "SD/Sederajat", jumlah: 1200, persentase: 34.3 },
    { tingkat: "SMP/Sederajat", jumlah: 980, persentase: 28.0 },
    { tingkat: "SMA/Sederajat", jumlah: 840, persentase: 24.0 },
    { tingkat: "Diploma/S1", jumlah: 420, persentase: 12.0 },
    { tingkat: "S2/S3", jumlah: 60, persentase: 1.7 },
  ]

  const pekerjaanData = [
    { jenis: "Petani", jumlah: 1050, persentase: 30.0, color: "bg-green-500" },
    { jenis: "Pedagang", jumlah: 525, persentase: 15.0, color: "bg-blue-500" },
    { jenis: "Buruh", jumlah: 420, persentase: 12.0, color: "bg-orange-500" },
    { jenis: "PNS/TNI/Polri", jumlah: 350, persentase: 10.0, color: "bg-purple-500" },
    { jenis: "Wiraswasta", jumlah: 315, persentase: 9.0, color: "bg-red-500" },
    { jenis: "Lainnya", jumlah: 840, persentase: 24.0, color: "bg-gray-500" },
  ]

  const produksiPertanian = [
    { komoditas: "Padi", produksi: "450 ton/tahun", trend: "+12%", color: "bg-yellow-500" },
    { komoditas: "Jagung", produksi: "180 ton/tahun", trend: "+8%", color: "bg-orange-500" },
    { komoditas: "Kedelai", produksi: "75 ton/tahun", trend: "+15%", color: "bg-green-500" },
    { komoditas: "Sayuran", produksi: "320 ton/tahun", trend: "+20%", color: "bg-emerald-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Data Desa</h1>
        <p className="text-lg text-gray-600">Infografis dan statistik terkini Desa Sejahtera</p>
      </div>

      {/* Statistik Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Penduduk</p>
                <p className="text-3xl font-bold text-blue-800">3,500</p>
                <p className="text-blue-600 text-xs">jiwa</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Kepala Keluarga</p>
                <p className="text-3xl font-bold text-green-800">875</p>
                <p className="text-green-600 text-xs">KK</p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Luas Wilayah</p>
                <p className="text-3xl font-bold text-purple-800">15.5</p>
                <p className="text-purple-600 text-xs">km²</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <PieChart className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-600 text-sm font-medium">Kepadatan</p>
                <p className="text-3xl font-bold text-amber-800">226</p>
                <p className="text-amber-600 text-xs">jiwa/km²</p>
              </div>
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demografi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Komposisi Penduduk
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {demografiData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{item.kategori}</span>
                    <span className="text-sm text-gray-600">{item.jumlah.toLocaleString()} jiwa</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`h-3 rounded-full ${item.color}`} style={{ width: `${item.persentase}%` }}></div>
                  </div>
                  <div className="text-right text-xs text-gray-500">{item.persentase}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-green-800 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Tingkat Pendidikan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-3">
              {pendidikanData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">{item.tingkat}</span>
                    <div className="mt-1">
                      <Progress value={item.persentase} className="h-2" />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="font-semibold text-gray-900">{item.jumlah}</div>
                    <div className="text-xs text-gray-500">{item.persentase}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mata Pencaharian */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Activity className="w-6 h-6" />
            Mata Pencaharian Penduduk
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pekerjaanData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.jenis}</div>
                    <div className="text-sm text-gray-600">
                      {item.jumlah} orang ({item.persentase}%)
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Produksi Pertanian */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardTitle className="text-amber-800 flex items-center gap-2">
            <Wheat className="w-6 h-6" />
            Produksi Pertanian
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {produksiPertanian.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{item.komoditas}</h4>
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-gray-800">{item.produksi}</div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {item.trend}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fasilitas Umum */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Fasilitas Kesehatan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Puskesmas</span>
                <Badge variant="outline">1 unit</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Posyandu</span>
                <Badge variant="outline">4 unit</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Bidan Desa</span>
                <Badge variant="outline">2 orang</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Kader Kesehatan</span>
                <Badge variant="outline">12 orang</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Fasilitas Pendidikan
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium">SD/MI</span>
                <Badge variant="outline">3 sekolah</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium">SMP</span>
                <Badge variant="outline">1 sekolah</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium">PAUD/TK</span>
                <Badge variant="outline">2 sekolah</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <span className="font-medium">Perpustakaan Desa</span>
                <Badge variant="outline">1 unit</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
