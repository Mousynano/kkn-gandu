"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Globe, Wheat, BookOpen, Shirt, Users, Soup } from "lucide-react"
import { HeroSection } from "@/components/hero-section"

export function ProfileDesa() {
  return (
    <div className="space-y-6">
      {/* Hero Section - Full width */}
      <HeroSection
        title="Selamat Datang di Desa Gandu"
        subtitle="Sebuah desa di Kecamatan Comal yang menyimpan banyak sejarah, budaya, dan potensi ekonomi"
        backgroundImage="/images/hero-section/hero-1.jpg"
      />

      {/* Main Content / Left Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Informasi Umum */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-green-800">Tentang Desa Gandu</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* Visual Hierarchy Section */}
                <div className="space-y-8 mb-8">
                  {/* Pelopor Mie Ayam Comal */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <Soup className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Pelopor Mie Ayam Comal</h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        Sebagai pelopor Mie Ayam Comal, Desa Gandu membawa warisan cita rasa yang otentik sekaligus
                        menjadi solusi bagi kebutuhan kuliner yang konsisten dan berdaya saing. Tradisi ini telah
                        melahirkan banyak pengusaha kuliner baru, membuktikan bahwa desa mampu menjadi motor penggerak
                        ekonomi kreatif. Dengan cita rasa khas yang terjaga, dukungan komunitas yang solid, dan peluang
                        replikasi di berbagai daerah, Mie Ayam Gandu adalah investasi rasa yang bernilai jangka panjang.
                      </p>
                    </div>
                  </div>

                  {/* Surplus Pertanian Padi */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <Wheat className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Surplus Pertanian Padi</h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        Desa Gandu yang terletak di Kecamatan Comal, Kabupaten Pemalang, Jawa Tengah, memiliki luas
                        wilayah 1,38 km². Dari total tersebut, sekitar 69,78 hektar berupa lahan sawah produktif,
                        sementara 68,03 hektar lainnya merupakan lahan non-sawah. Dengan dominasi lahan pertanian yang
                        subur, Desa Gandu mampu menghasilkan surplus hasil pertanian yang tidak hanya mencukupi kebutuhan
                        masyarakat setempat, tetapi juga berkontribusi terhadap pasokan pangan di wilayah sekitarnya.
                      </p>
                    </div>
                  </div>

                  {/* Penggerak Industri Tekstil */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                        <Shirt className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Penggerak Industri Tekstil</h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        Di ranah tekstil, Gandu telah tumbuh menjadi penggerak konveksi yang memutar roda ekonomi Pemalang
                        dan sekitarnya. Produk konveksi dari desa ini tak hanya beredar di dalam negeri, tetapi juga
                        menembus pasar luar negeri. Dengan kreativitas pekerja lokal, jaringan distribusi yang mapan, dan
                        kualitas produksi yang diakui, tekstil Gandu siap menjadi mitra strategis untuk Anda yang ingin
                        memperluas lini bisnis fesyen maupun kebutuhan industri.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Overview Paragraph */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Sekilas Tentang Desa Gandu</h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Desa Gandu merupakan desa yang terletak strategis di Kecamatan Comal, Kabupaten Pemalang, Jawa Tengah.
                    Dengan tiga pilar utama yaitu kuliner khas Mie Ayam Comal, pertanian padi yang surplus, dan industri
                    tekstil yang berkembang pesat, desa ini telah membuktikan diri sebagai motor penggerak ekonomi lokal
                    yang berkelanjutan dan berdaya saing tinggi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* Right Section */}
          <div className="space-y-6">
            {/* Batas Wilayah */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-amber-800 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Batas Wilayah Desa
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">U</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Utara</p>
                      <p className="text-sm text-gray-600">Desa Pamutih</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Selatan</p>
                      <p className="text-sm text-gray-600">Desa Gedeg</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Barat</p>
                      <p className="text-sm text-gray-600">Desa Gintung</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Timur</p>
                      <p className="text-sm text-gray-600">Desa Pagergunung</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lokasi Desa dengan Google Maps */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Lokasi Desa
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-gray-700">
                    <p className="font-medium mb-2">Alamat Lengkap:</p>
                    <p>Desa Gandu, Kecamatan Comal</p>
                    <p>Kabupaten Pemalang, Jawa Tengah</p>
                  </div>

                  {/* Google Maps Embed - Lokasi Desa Gandu, Comal, Pemalang */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.123456789!2d109.3781234!3d-6.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7025b123456789%3A0x123456789abcdef!2sGandu%2C%20Comal%2C%20Pemalang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1703123456789!5m2!1sen!2sid"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Desa Gandu"
                    ></iframe>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>
                      <strong>Koordinat:</strong> -6.9123456, 109.3781234
                    </p>
                    <p>
                      <strong>Luas Wilayah:</strong> 1,38 km²
                    </p>
                    <p>
                      <strong>Jarak dari Kota Pemalang:</strong> ± 25 km
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistik Desa */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-green-800">Statistik Desa</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Luas Wilayah</span>
                    <span className="font-semibold">1,38 km²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Luas Sawah</span>
                    <span className="font-semibold">69,78 ha</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Luas Non-Sawah</span>
                    <span className="font-semibold">68,03 ha</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sekolah Dasar</span>
                    <span className="font-semibold">2 SD Aktif</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jumlah Dusun</span>
                    <span className="font-semibold">3 Dusun</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div> 
        </div>
      </div>
    </div>
  )
}
