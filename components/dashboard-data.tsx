"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Home,
  GraduationCap,
  Heart,
  Wheat,
  TrendingUp,
  PieChart,
  BarChart3,
  Activity,
  Briefcase,
  Stethoscope,
  Hammer,
  Fish,
  BookOpen,
  Car,
  ShoppingCart,
  Shield,
  Wrench,
  Truck,
  Building,
  User,
  UserCheck,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export function DashboardData() {
  // Define a more extensive and distinct color palette for various sections
  const sectionColors = [
    "#10B981", // Emerald Green
    "#F59E0B", // Amber
    "#8B5CF6", // Violet
    "#EF4444", // Red
    "#3B82F6", // Blue
    "#EC4899", // Pink
    "#06B6D4", // Cyan
    "#6D28D9", // Dark Violet
    "#CA8A04", // Yellow-Orange
    "#059669", // Dark Green
    "#1D4ED8", // Dark Blue
    "#7C3AED", // Purple
    "#DB2777", // Rose
    "#4B5563", // Gray
    "#15803D", // Forest Green
    "#22C55E", // Lime Green
    "#D97706", // Orange
    "#4338CA", // Indigo
    "#EA580C", // Orange-Red
    "#166534", // Darker Green
    "#9333EA", // Dark Purple
    "#B91C1C", // Dark Red
    "#FACC15", // Yellow
    "#A78BFA", // Lavender
    "#F472B6", // Light Pink
    "#2DD4BF", // Teal
    "#FB923C", // Orange
    "#A3E635", // Lime
    "#C084FC", // Purple
    "#F87171", // Light Red
    "#60A5FA", // Light Blue
    "#E879F9", // Fuchsia
  ]

  const demografiData = [
    { kategori: "Laki-laki", jumlah: 1966, persentase: 48.9, color: "#3B82F6", icon: User },
    { kategori: "Perempuan", jumlah: 2054, persentase: 51.1, color: "#EC4899", icon: UserCheck },
  ]

  // Menghitung total penduduk dari data komposisi
  const totalPenduduk = demografiData.reduce((total, item) => total + item.jumlah, 0)
  
  // Menghitung kepala keluarga (asumsi rata-rata 3.23 orang per KK berdasarkan data)
  const kepalaKeluarga = Math.round(totalPenduduk / 3.23)

  const pendidikanData = [
    { tingkat: "Tamat SD", jumlah: 89, persentase: 12.8, color: "#10B981" },
    { tingkat: "Tamat SMP", jumlah: 256, persentase: 36.8, color: "#F59E0B" },
    { tingkat: "Tamat SMA", jumlah: 296, persentase: 42.6, color: "#8B5CF6" },
    { tingkat: "Tamat Diploma/Sarjana", jumlah: 41, persentase: 5.9, color: "#EF4444" },
  ]

  // Define all pekerjaanData with their respective icons
  const pekerjaanData = [
    { jenis: "Belum/tidak bekerja", jumlah: 690, persentase: 17.2, icon: Users },
    { jenis: "Bidan/Perawat", jumlah: 4, persentase: 0.1, icon: Stethoscope },
    { jenis: "Buruh harian lepas", jumlah: 566, persentase: 14.1, icon: Hammer },
    { jenis: "Nelayan", jumlah: 15, persentase: 0.4, icon: Fish },
    { jenis: "Buruh tani/perkebunan", jumlah: 204, persentase: 5.1, icon: Wheat },
    { jenis: "Guru", jumlah: 13, persentase: 0.3, icon: BookOpen },
    { jenis: "Karyawan BUMD/BUMN", jumlah: 1, persentase: 0.0, icon: Building },
    { jenis: "Karyawan Honorer", jumlah: 4, persentase: 0.1, icon: Briefcase },
    { jenis: "Karyawan Swasta", jumlah: 46, persentase: 1.1, icon: Briefcase },
    { jenis: "Mekanik", jumlah: 12, persentase: 0.3, icon: Wrench },
    { jenis: "Pedagang", jumlah: 116, persentase: 2.9, icon: ShoppingCart },
    { jenis: "PNS", jumlah: 31, persentase: 0.8, icon: Shield },
    { jenis: "Pelajar/Mahasiswa", jumlah: 329, persentase: 8.2, icon: GraduationCap },
    { jenis: "ART", jumlah: 14, persentase: 0.3, icon: Home },
    { jenis: "Pensiunan", jumlah: 25, persentase: 0.6, icon: Users },
    { jenis: "Perangkat Desa", jumlah: 11, persentase: 0.3, icon: Shield },
    { jenis: "Petani/Pekebun", jumlah: 424, persentase: 10.5, icon: Wheat },
    { jenis: "Peternak", jumlah: 25, persentase: 0.6, icon: Heart },
    { jenis: "Sopir", jumlah: 24, persentase: 0.6, icon: Car },
    { jenis: "TNI/POLRI", jumlah: 2, persentase: 0.0, icon: Shield },
    { jenis: "Transportasi", jumlah: 21, persentase: 0.5, icon: Truck },
    { jenis: "Pertukangan", jumlah: 36, persentase: 0.9, icon: Hammer },
    { jenis: "Ustadz/Mubaligh", jumlah: 19, persentase: 0.5, icon: BookOpen },
    { jenis: "Wiraswasta", jumlah: 286, persentase: 7.1, icon: Briefcase },
  ]

  // Assign unique colors to each item in pekerjaanData
  const pekerjaanDataWithColors = pekerjaanData.map((item, index) => ({
    ...item,
    color: sectionColors[index % sectionColors.length],
  }))

  // Fungsi untuk membuat pie chart sederhana
  const createPieChart = () => {
    const radius = 80
    const centerX = 100
    const centerY = 100
    
    let currentAngle = 0
    const paths = demografiData.map((item) => {
      const angle = (item.persentase / 100) * 360
      const startAngle = currentAngle
      const endAngle = currentAngle + angle
      
      const x1 = centerX + radius * Math.cos((startAngle - 90) * Math.PI / 180)
      const y1 = centerY + radius * Math.sin((startAngle - 90) * Math.PI / 180)
      const x2 = centerX + radius * Math.cos((endAngle - 90) * Math.PI / 180)
      const y2 = centerY + radius * Math.sin((endAngle - 90) * Math.PI / 180)
      
      const largeArcFlag = angle > 180 ? 1 : 0
      
      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ')
      
      currentAngle += angle
      
      return { pathData, color: item.color }
    })
    
    return paths
  }

  const pieChartPaths = createPieChart()

  return (
    <div className="space-y-6">
      {/* Hero Section - Full width */}
      <HeroSection
        title="Dashboard Data Desa"
        subtitle="Infografis dan statistik terkini Desa Gandu"
        backgroundImage="/images/hero-section/hero-2.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Komposisi Penduduk Terintegrasi */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Komposisi Penduduk Desa Gandu
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pie Chart */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative">
                  <svg width="200" height="200" className="transform -rotate-90">
                    {pieChartPaths.map((path, index) => (
                      <path
                        key={index}
                        d={path.pathData}
                        fill={path.color}
                        stroke="white"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{totalPenduduk.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Penduduk</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistik Detail */}
              <div className="lg:col-span-2 space-y-6">
                {/* Total dan KK */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-600 text-sm font-medium">Total Penduduk</p>
                        <p className="text-2xl font-bold text-blue-800">{totalPenduduk.toLocaleString()}</p>
                        <p className="text-blue-600 text-xs">jiwa</p>
                      </div>
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-600 text-sm font-medium">Kepala Keluarga</p>
                        <p className="text-2xl font-bold text-green-800">{kepalaKeluarga.toLocaleString()}</p>
                        <p className="text-green-600 text-xs">KK</p>
                      </div>
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Home className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Komposisi Gender */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Komposisi Gender</h4>
                  {demografiData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <div className="flex items-center gap-2">
                            <item.icon className="w-4 h-4 text-gray-600" />
                            <span className="font-medium text-gray-700">{item.kategori}</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">{item.jumlah.toLocaleString()} jiwa</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="h-3 rounded-full transition-all duration-300"
                          style={{ width: `${item.persentase}%`, backgroundColor: item.color }}
                        ></div>
                      </div>
                      <div className="text-right text-xs text-gray-500">{item.persentase}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tingkat Pendidikan */}
        <Card className="border-0 shadow-lg mb-8">
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

        {/* Mata Pencaharian Penduduk */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              Mata Pencaharian Penduduk
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pekerjaanDataWithColors.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  style={{ borderColor: item.color }} // Use assigned color for border
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm leading-tight">{item.jenis}</div>
                      <div className="text-xs text-gray-600">
                        {item.jumlah} orang ({item.persentase}%)
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fasilitas Umum */}
        <div className="grid grid-cols-1 gap-6">
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
                  <span className="font-medium">Playgroup</span>
                  <Badge variant="outline">1 sekolah</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="font-medium">TK</span>
                  <Badge variant="outline">1 sekolah</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="font-medium">SD</span>
                  <Badge variant="outline">2 sekolah</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
