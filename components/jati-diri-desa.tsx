import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Leaf, Users, Music, Utensils } from "lucide-react"

export function JatiDiriDesa() {
  const budayaLokal = [
    {
      nama: "Slametan Panen",
      deskripsi: "Upacara syukuran setelah panen raya sebagai wujud rasa syukur kepada Tuhan",
      waktu: "Setiap musim panen (April & Oktober)",
      icon: Leaf,
      color: "bg-green-500",
    },
    {
      nama: "Gotong Royong Bersih Desa",
      deskripsi: "Kegiatan membersihkan lingkungan desa yang dilakukan setiap bulan",
      waktu: "Minggu pertama setiap bulan",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      nama: "Festival Kerajinan",
      deskripsi: "Pameran dan lomba kerajinan tangan tradisional khas desa",
      waktu: "Setiap bulan Agustus",
      icon: Star,
      color: "bg-purple-500",
    },
    {
      nama: "Pagelaran Seni Tradisional",
      deskripsi: "Pertunjukan musik dan tari tradisional untuk melestarikan budaya",
      waktu: "Hari kemerdekaan dan hari besar",
      icon: Music,
      color: "bg-red-500",
    },
  ]

  const makananKhas = [
    {
      nama: "Gudeg Organik",
      deskripsi: "Gudeg yang dibuat dari nangka muda organik dengan bumbu tradisional",
      bahan: "Nangka muda, santan, gula kelapa, rempah pilihan",
    },
    {
      nama: "Tempe Benguk",
      deskripsi: "Tempe dari kacang benguk yang kaya protein dan cita rasa unik",
      bahan: "Kacang benguk, ragi tempe tradisional",
    },
    {
      nama: "Keripik Singkong",
      deskripsi: "Keripik dari singkong lokal dengan berbagai varian rasa",
      bahan: "Singkong segar, bumbu tradisional",
    },
    {
      nama: "Wedang Jahe Sereh",
      deskripsi: "Minuman hangat dari jahe dan sereh segar kebun sendiri",
      bahan: "Jahe merah, sereh, gula kelapa, pandan",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Jati Diri Desa Sejahtera</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Identitas, budaya, dan kearifan lokal yang menjadi ciri khas dan kebanggaan Desa Sejahtera
        </p>
      </div>

      {/* Visi Misi */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Star className="w-6 h-6" />
              Visi Desa
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              "Menjadi desa mandiri yang sejahtera, berbudaya, dan berwawasan lingkungan dengan tetap melestarikan
              nilai-nilai kearifan lokal untuk kesejahteraan masyarakat yang berkelanjutan."
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Misi Desa
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Mengembangkan potensi pertanian organik dan berkelanjutan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Melestarikan budaya dan kearifan lokal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Meningkatkan kualitas sumber daya manusia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Membangun tata kelola pemerintahan yang transparan</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Nilai-Nilai Desa */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Nilai-Nilai Luhur Desa
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Gotong Royong</h4>
              <p className="text-sm text-blue-700">Semangat kebersamaan dan saling membantu</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Lestari</h4>
              <p className="text-sm text-green-700">Menjaga kelestarian alam dan lingkungan</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-purple-800 mb-2">Harmonis</h4>
              <p className="text-sm text-purple-700">Hidup rukun dan damai bersama</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-amber-800 mb-2">Mandiri</h4>
              <p className="text-sm text-amber-700">Kemandirian dalam berbagai aspek</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budaya dan Tradisi */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardTitle className="text-amber-800 flex items-center gap-2">
            <Music className="w-6 h-6" />
            Budaya dan Tradisi
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {budayaLokal.map((budaya, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${budaya.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <budaya.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">{budaya.nama}</h4>
                    <p className="text-sm text-gray-600 mb-2">{budaya.deskripsi}</p>
                    <Badge variant="outline" className="text-xs">
                      {budaya.waktu}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Kuliner Khas */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
          <CardTitle className="text-red-800 flex items-center gap-2">
            <Utensils className="w-6 h-6" />
            Kuliner Khas Desa
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {makananKhas.map((makanan, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{makanan.nama}</h4>
                <p className="text-sm text-gray-600 mb-3">{makanan.deskripsi}</p>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Bahan utama:</span> {makanan.bahan}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Logo dan Lambang */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50">
          <CardTitle className="text-indigo-800">Lambang dan Filosofi Desa</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="w-16 h-16 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-4">Filosofi Lambang Desa</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Daun Hijau:</strong> Melambangkan kesuburan tanah dan kelestarian alam yang menjadi sumber
                  kehidupan masyarakat desa.
                </p>
                <p>
                  <strong>Lingkaran:</strong> Menggambarkan persatuan dan kesatuan masyarakat dalam mencapai tujuan
                  bersama.
                </p>
                <p>
                  <strong>Warna Hijau:</strong> Representasi dari pertanian, alam yang asri, dan harapan untuk masa
                  depan yang berkelanjutan.
                </p>
                <p>
                  <strong>Bentuk Sederhana:</strong> Mencerminkan kesederhanaan dan ketulusan hati masyarakat desa.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
