import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Landmark } from "lucide-react"

export function SejarahDesa() {
  const timelineEvents = [
    {
      year: "1850",
      title: "Pembukaan Lahan Pertama",
      description: "Sekelompok petani dari Yogyakarta membuka lahan pertanian di kaki Gunung Harmoni",
      icon: MapPin,
      color: "bg-blue-500",
    },
    {
      year: "1875",
      title: "Pembentukan Kampung",
      description: "Terbentuknya kampung kecil dengan 15 keluarga yang menetap secara permanen",
      icon: Users,
      color: "bg-green-500",
    },
    {
      year: "1920",
      title: "Pengakuan Resmi",
      description: "Kampung diakui secara resmi oleh pemerintah kolonial sebagai desa administratif",
      icon: Landmark,
      color: "bg-purple-500",
    },
    {
      year: "1945",
      title: "Era Kemerdekaan",
      description: "Desa ikut berpartisipasi dalam perjuangan kemerdekaan Indonesia",
      icon: Calendar,
      color: "bg-red-500",
    },
    {
      year: "1970",
      title: "Revolusi Hijau",
      description: "Modernisasi pertanian dengan sistem irigasi dan varietas unggul",
      icon: MapPin,
      color: "bg-emerald-500",
    },
    {
      year: "2000",
      title: "Era Digital",
      description: "Mulai mengembangkan sistem informasi desa dan e-government",
      icon: Calendar,
      color: "bg-indigo-500",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Sejarah Desa Sejahtera</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Perjalanan panjang dari sebuah kampung kecil hingga menjadi desa yang sejahtera dan mandiri
        </p>
      </div>

      {/* Asal Usul */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardTitle className="text-amber-800 flex items-center gap-2">
            <Landmark className="w-6 h-6" />
            Asal Usul Desa
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Desa Sejahtera bermula dari sebuah cerita tentang sekelompok petani yang mencari tanah subur untuk
              bercocok tanam. Pada pertengahan abad ke-19, mereka menemukan lahan yang sangat cocok di kaki Gunung
              Harmoni yang memiliki tanah vulkanis yang subur dan sumber air yang melimpah.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nama "Sejahtera" dipilih karena para pendiri desa berharap tempat ini akan memberikan kehidupan yang
              sejahtera bagi generasi mendatang. Mereka percaya bahwa dengan kerja keras dan gotong royong, tanah yang
              subur ini akan memberikan hasil yang melimpah.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tradisi gotong royong dan kearifan lokal dalam mengelola sumber daya alam telah menjadi warisan yang terus
              dijaga hingga saat ini. Sistem subak (irigasi tradisional) yang mereka kembangkan masih digunakan dan
              menjadi salah satu keunggulan desa.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Sejarah */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Perjalanan Sejarah
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="font-mono font-bold">
                        {event.year}
                      </Badge>
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tokoh Bersejarah */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-green-800 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Tokoh Bersejarah
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Mbah Suryo (1825-1890)</h4>
              <p className="text-sm text-gray-600 mb-2">Pendiri dan Kepala Desa Pertama</p>
              <p className="text-sm text-gray-700">
                Pemimpin karismatik yang memimpin pembukaan lahan pertama dan meletakkan dasar-dasar tata kelola desa
                yang masih digunakan hingga saat ini.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Nyai Sari (1840-1920)</h4>
              <p className="text-sm text-gray-600 mb-2">Pelopor Kerajinan Tradisional</p>
              <p className="text-sm text-gray-700">
                Mengembangkan kerajinan anyaman bambu dan tenun yang menjadi sumber penghasilan tambahan masyarakat
                desa.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Pak Tani (1900-1980)</h4>
              <p className="text-sm text-gray-600 mb-2">Pelopor Pertanian Modern</p>
              <p className="text-sm text-gray-700">
                Memperkenalkan teknik pertanian modern dan sistem irigasi yang meningkatkan produktivitas pertanian
                desa.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Bu Guru Siti (1935-2010)</h4>
              <p className="text-sm text-gray-600 mb-2">Pelopor Pendidikan</p>
              <p className="text-sm text-gray-700">
                Mendirikan sekolah dasar pertama di desa dan memperjuangkan pendidikan untuk semua anak desa.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
