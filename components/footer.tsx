import { Card, CardContent } from "@/components/ui/card"
import { Leaf, MapPin, Phone, Mail, Globe, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

interface FooterProps {
  setActiveSection?: (section: string) => void
}

export function Footer({ setActiveSection }: FooterProps) {
  const handleLinkClick = (section: string) => {
    if (setActiveSection) {
      setActiveSection(section)
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-green-800 to-emerald-800 text-white mt-16">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
            <div className="h-12 flex items-center justify-center">
              <img src="/images/pemalang.svg" alt="Pemalang" className="h-full w-auto" />
            </div>
              <div>
                <h3 className="text-xl font-bold">Desa Gandu</h3>
                <p className="text-sm text-green-100">Kec. Comal, Kab. Pemalang</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Desa yang kaya akan sejarah toleransi dan keberagaman, berkomitmen untuk kemajuan masyarakat melalui 
              gotong royong dan inovasi berkelanjutan.
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-green-300" />
                <span className="text-green-100">Desa Gandu, Kec. Comal, Kab. Pemalang, Jawa Tengah</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-green-300" />
                <span className="text-green-100">gandu@desakupemalang.id</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-green-300" />
                <span className="text-green-100">gandu.mousynano.my.id</span>
              </div>
            </div>
          </div>

          {/* Link Cepat */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Link Cepat</h4>
            <div className="space-y-2">
              <button 
                onClick={() => handleLinkClick("profile")}
                className="block text-green-100 hover:text-white text-sm transition-colors text-left w-full"
              >
                Profil Desa
              </button>
              <button 
                onClick={() => handleLinkClick("dashboard")}
                className="block text-green-100 hover:text-white text-sm transition-colors text-left w-full"
              >
                Dashboard Data
              </button>
              <button 
                onClick={() => handleLinkClick("perangkat")}
                className="block text-green-100 hover:text-white text-sm transition-colors text-left w-full"
              >
                Perangkat Desa
              </button>
              <button 
                onClick={() => handleLinkClick("kegiatan-rutinan")}
                className="block text-green-100 hover:text-white text-sm transition-colors text-left w-full"
              >
                Kegiatan Rutinan
              </button>
              <button 
                onClick={() => handleLinkClick("agustusan-2025")}
                className="block text-green-100 hover:text-white text-sm transition-colors text-left w-full"
              >
                Agustusan 2025
              </button>
              <button 
                onClick={() => handleLinkClick("kkn-unnes-2025")}
                className="block text-green-100 hover:text-white text-sm transition-colors text-left w-full"
              >
                KKN UNNES 2025
              </button>
            </div>
          </div>

          {/* Media Sosial */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/groups/445806908812371/?ref=share&mibextid=NSMWBT" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-green-100 text-sm">
              Dapatkan update terbaru tentang kegiatan dan perkembangan Desa Gandu
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100 text-sm">
            © 2025 Desa Gandu. Semua hak dilindungi. Dibuat dengan ❤️ untuk kemajuan desa.
          </p>
        </div>
      </div>
    </footer>
  )
}
