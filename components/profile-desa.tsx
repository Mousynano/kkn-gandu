import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Users, TreePine, Wheat } from "lucide-react"

export function ProfileDesa() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-8 py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Selamat Datang di Desa Sejahtera</h1>
            <p className="text-xl text-green-100 mb-6">
              Desa yang kaya akan hasil pertanian dan kearifan lokal, terletak di jantung Kabupaten Harmoni
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <TreePine className="w-4 h-4 mr-2" />
                Desa Hijau
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Wheat className="w-4 h-4 mr-2" />
                Pertanian Organik
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-2" />
                Komunitas Harmonis
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informasi Umum */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="text-green-800">Tentang Desa Sejahtera</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Desa Sejahtera adalah sebuah desa yang terletak di kaki Gunung Harmoni, dikelilingi oleh hamparan sawah
                hijau dan kebun-kebun produktif. Desa ini dikenal sebagai penghasil beras organik terbaik di wilayah
                Kabupaten Harmoni.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dengan luas wilayah 15,5 km² dan jumlah penduduk sekitar 3.500 jiwa, Desa Sejahtera memiliki potensi
                besar dalam bidang pertanian, peternakan, dan pariwisata alam. Masyarakat desa masih menjaga tradisi
                gotong royong dan kearifan lokal yang telah diwariskan turun-temurun.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Visi desa adalah menjadi desa mandiri yang sejahtera, berbudaya, dan berwawasan lingkungan dengan tetap
                melestarikan nilai-nilai kearifan lokal.
              </p>
            </CardContent>
          </Card>

          {/* Potensi Desa */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
              <CardTitle className="text-amber-800">Potensi Unggulan Desa</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Wheat className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pertanian Organik</h4>
                    <p className="text-sm text-gray-600">Beras, jagung, dan sayuran organik berkualitas tinggi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Wisata Alam</h4>
                    <p className="text-sm text-gray-600">Pemandangan sawah terasering dan air terjun</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kerajinan Tangan</h4>
                    <p className="text-sm text-gray-600">Anyaman bambu dan tenun tradisional</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kuliner Khas</h4>
                    <p className="text-sm text-gray-600">Gudeg organik dan jajanan tradisional</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informasi Kontak */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-blue-800">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-sm text-gray-600">
                    Jl. Raya Harmoni No. 123
                    <br />
                    Kec. Sejahtera, Kab. Harmoni
                    <br />
                    Jawa Tengah 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">Telepon</p>
                  <p className="text-sm text-gray-600">(0274) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">info@desasejahtera.id</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-sm text-gray-600">www.desasejahtera.id</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistik Singkat */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="text-green-800">Statistik Desa</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Luas Wilayah</span>
                  <span className="font-semibold">15,5 km²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jumlah Penduduk</span>
                  <span className="font-semibold">3.500 jiwa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jumlah KK</span>
                  <span className="font-semibold">875 KK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jumlah RT</span>
                  <span className="font-semibold">12 RT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jumlah RW</span>
                  <span className="font-semibold">4 RW</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
