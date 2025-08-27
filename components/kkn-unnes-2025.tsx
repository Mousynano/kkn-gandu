"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/hero-section"
import { NewsModal } from "@/components/ui/news-modal"
import { Calendar, MapPin, Users, ChevronDown, ChevronUp, GraduationCap, Eye } from 'lucide-react'

export function KknUnnes2025() {
  const [selectedNews, setSelectedNews] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const kegiatanKKN = [
    {
      title: "Kaka Asuh",
      description: "Program pendampingan dan mentoring kepada anak-anak di wilayah desa untuk meningkatkan semangat belajar dan memberikan bimbingan akademik serta non-akademik.",
      image: "/images/kkn/bimbel.jpg",
      content: `Pada Minggu, 27 Juli 2025, bertempat di rumah Ibu Yuana (satuan kesehatan desa), dilaksanakan Program KAKA ASUH. Kegiatan ini berupa dukungan tenaga dalam pembuatan serta pembagian makanan tambahan bergizi bagi ibu hamil dengan status gizi kronis dan balita dengan masalah gizi seperti weight faltering, underweight, dan wasting. Program ini menjadi bentuk kepedulian masyarakat untuk meningkatkan status gizi kelompok rentan sekaligus mendukung upaya pencegahan stunting di desa.

Tujuan kegiatan:
• Menyediakan makanan tambahan bergizi seimbang bagi ibu hamil dan balita bermasalah gizi.
• Memberikan dukungan tenaga dalam proses pembuatan dan distribusi makanan tambahan.
• Memantau agar pembagian makanan tepat sasaran.
• Mendukung program kesehatan desa dalam pencegahan gizi buruk dan stunting.
Manfaat kegiatan:
• Membantu memperbaiki asupan gizi ibu hamil dan balita dengan masalah gizi.
• Memberikan motivasi serta kesadaran keluarga sasaran tentang pentingnya gizi seimbang.
• Meningkatkan kepedulian dan partisipasi masyarakat dalam program kesehatan desa.
• Memperkuat kerjasama warga, kader kesehatan, dan perangkat desa untuk peningkatan kualitas hidup masyarakat.
Hasil kegiatan:
• Makanan tambahan bergizi tersedia sesuai kebutuhan sasaran.
• Proses distribusi berjalan tertib, lancar, dan tepat sasaran.
• Ibu hamil dan balita penerima manfaat memperoleh tambahan gizi untuk memperbaiki status kesehatan.
• Terbentuk sinergi positif antara masyarakat dan satuan kesehatan desa dalam mendukung perbaikan gizi serta pencegahan stunting.
Hasil monitoring dicatat dan dilaporkan melalui aplikasi Paijo milik Pemprov Jawa Tengah sebagai bagian dari pemantauan kasus stunting secara terintegrasi.`
    },
    {
      title: "Gerakan Pil Tambah Darah",
      description: "Kampanye kesehatan untuk meningkatkan kesadaran masyarakat tentang pentingnya suplemen penambah darah, terutama untuk ibu hamil dan remaja putri.",
      image: "/images/kkn/posrem.jpg",
      content: `Program ini dilaksanakan di Balai Desa Gandu sebagai bagian dari upaya promotif dan preventif kesehatan, berfokus pada peningkatan kualitas kesehatan remaja putri serta edukasi menyeluruh bagi siswa menjelang pubertas. Kegiatan terintegrasi dengan agenda posyandu remaja yang rutin dipandu bidan desa.

Gerakan Pil Tambah Darah dilakukan secara rutin dengan dukungan Puskesmas, guru, dan kader sekolah. Sasaran utamanya adalah remaja putri untuk mencegah anemia defisiensi zat besi yang dapat menurunkan konsentrasi belajar, menimbulkan kelelahan, hingga menghambat perkembangan. Selain pemberian pil, siswa juga mendapatkan edukasi tentang pola makan bergizi, hidup bersih, dan gaya hidup aktif.
Sosialisasi Kesehatan Reproduksi disampaikan melalui penyuluhan interaktif yang ramah anak, menggunakan media visual, permainan edukatif, dan sesi tanya jawab. Materinya meliputi perubahan fisik dan emosional saat pubertas, perawatan organ reproduksi, pencegahan penyakit menular, serta pentingnya menjaga privasi dan keselamatan diri.
Manfaat dan hasil kegiatan:
• Remaja putri terhindar dari anemia, sehingga lebih berenergi untuk belajar dan beraktivitas.
• Siswa memahami kesehatan tubuh dan reproduksi sejak dini dengan cara yang sesuai tingkat pemahaman mereka.
• Terbangun kesadaran hidup sehat, kebiasaan baik, serta kemampuan menjaga kesehatan secara mandiri.
• Program ini memperkuat komitmen sekolah dan desa dalam membentuk generasi sehat, cerdas, dan berdaya saing.`
    },
    {
      title: "Program Simperum Desa",
      description: "Pengembangan sistem pemberdayaan masyarakat melalui pendampingan dan pelatihan untuk meningkatkan kualitas hidup dan ekonomi kerakyatan di desa.",
      image: "/images/kkn/simperum.jpg",
      content: `Kegiatan survei rumah dilaksanakan pada Selasa, 11 Agustus 2025 di rumah-rumah warga Desa Gandu yang terdaftar di aplikasi SIMPERUM. Survei dilakukan secara kondisional dengan mendatangi langsung rumah warga, melibatkan tim mahasiswa UNES GIAT yang berinteraksi langsung dengan masyarakat.

Tujuan utama:
• Memverifikasi kondisi rumah warga yang tercatat di SIMPERUM.
• Menilai kelayakan hunian dari aspek atap, lantai, dinding, sanitasi, dan fasilitas dasar.
• Menghimpun data lapangan akurat sebagai dasar penetapan program bantuan perumahan.
Manfaat kegiatan:
• Tersedianya data faktual mengenai kondisi rumah masyarakat Desa Gandu.
• Terbangunnya komunikasi positif antara mahasiswa dan warga.
• Membantu pemerintah desa memetakan kebutuhan program perbaikan rumah tidak layak huni.
• Menjadi bahan perencanaan kebijakan pembangunan desa ke depan.
Hasil survei:
• Diperoleh data lapangan yang lebih valid tentang kondisi rumah warga.
• Warga bersikap kooperatif dalam memberikan informasi.
• Hasil menjadi acuan penting untuk menentukan skala prioritas perbaikan rumah.
• Terbentuk sinergi antara mahasiswa, pemerintah desa, dan masyarakat dalam mendukung peningkatan kesejahteraan.`
    },
    {
      title: "Edukasi PHBS",
      description: "Penyuluhan tentang Perilaku Hidup Bersih dan Sehat kepada masyarakat untuk mencegah penyakit dan meningkatkan kualitas kesehatan keluarga.",
      image: "/images/kkn/phbs.jpg",
      content: `Penyebab utama Demam Berdarah Dengue (DBD) adalah nyamuk Aedes aegypti yang berkembang biak di genangan air bersih dan aktif menggigit pada pagi serta sore hari. Gejala DBD meliputi demam tinggi mendadak, nyeri otot, mual, hingga pendarahan, dan bila tidak ditangani cepat dapat berakibat fatal.

Upaya pencegahan dilakukan dengan PHBS (Perilaku Hidup Bersih dan Sehat) melalui GERMUN (Gerakan Menguras, Menutup, Menimbun):
• Menguras tempat penampungan air (bak, drum, ember) minimal seminggu sekali.
• Menutup rapat wadah air agar tidak menjadi tempat bertelur nyamuk.
• Menimbun/memusnahkan barang bekas yang berpotensi menampung air (kaleng, botol, ban bekas).
Langkah tambahan:
• Menggunakan kelambu saat tidur.
• Memasang kawat nyamuk di jendela.
• Memakai lotion/obat anti nyamuk.
• Menanam tanaman pengusir nyamuk (misalnya sereh).
Karena lingkungan desa rawan menjadi sarang nyamuk, masyarakat diajak menjaga kebersihan mulai dari rumah masing-masing: menyapu halaman, membersihkan selokan, dan mencegah genangan air. Tim KKN juga akan memasang poster pencegahan DBD di balai desa sebagai pengingat bersama agar warga selalu menjaga lingkungan bersih dan sehat.`
    },
    {
      title: "Konten Pancasila",
      description: "Pembuatan dan penyebaran konten edukatif berbasis nilai-nilai Pancasila untuk meningkatkan pemahaman dan apresiasi generasi muda terhadap ideologi bangsa.",
      image: "/images/kkn/konten.jpg",
      content: `Pada Sabtu, 23 Agustus 2025 pukul 20.00 WIB di MDA Nurul Fatah Desa Gandu, dilaksanakan pelatihan pemanfaatan Canva berbasis AI untuk anggota PR IPNU-IPPNU Desa Gandu. Kegiatan ini bertujuan meningkatkan kemampuan anggota dalam mengelola konten visual kreatif sebagai sarana branding organisasi di Instagram.

Peserta mendapatkan materi dan praktik langsung meliputi pembuatan desain grafis, pengaturan template, serta optimalisasi konten agar lebih menarik dan komunikatif.
Tujuan utama:
• Membekali anggota dengan keterampilan dasar dan lanjutan penggunaan Canva AI.
• Meningkatkan kemampuan mengelola media sosial organisasi.
• Menumbuhkan kreativitas dan profesionalitas dalam menciptakan konten digital.
Manfaat kegiatan:
• Anggota memperoleh keterampilan baru di bidang desain grafis digital.
• Organisasi lebih mudah membangun citra positif di media sosial.
• Keterampilan editing dapat diterapkan untuk kepentingan organisasi maupun pribadi.
• Tumbuhnya budaya literasi digital yang kreatif di kalangan remaja desa.
Hasil kegiatan:
• Peserta mampu membuat dan mengelola konten Instagram yang menarik, informatif, dan sesuai identitas organisasi.
• Branding PR IPNU-IPPNU Desa Gandu semakin profesional.
• Anggota lebih siap menghadapi perkembangan teknologi informasi.
• Terbentuk tim kreatif internal untuk mengelola konten organisasi secara konsisten.`
    },
    {
      title: "Penguatan Nilai Pancasila",
      description: "Program sosialisasi dan internalisasi nilai-nilai Pancasila dalam kehidupan sehari-hari masyarakat melalui berbagai kegiatan pembentukan karakter.",
      image: "/images/kkn/penguatan-pancasila.jpg",
      content: `Kegiatan sosialisasi nilai kebangsaan dengan tema “Arti Bhinneka Tunggal Ika” dilaksanakan pada Senin–Selasa, 14–15 Juli 2025 pukul 09.00 WIB di SDN 1 Gandu dan SDN 2 Gandu. Kegiatan ini ditujukan bagi siswa-siswi sekolah dasar untuk menanamkan nilai persatuan, menghargai perbedaan, dan menumbuhkan rasa cinta tanah air sejak dini melalui pembelajaran yang menarik, edukatif, dan interaktif.

Tujuan kegiatan:
• Menanamkan pemahaman tentang arti Bhinneka Tunggal Ika sebagai dasar persatuan bangsa.
• Membiasakan sikap saling menghargai perbedaan di sekolah maupun masyarakat.
• Menumbuhkan cinta tanah air melalui pembelajaran nilai kebangsaan.
Manfaat kegiatan:
• Siswa memahami makna Bhinneka Tunggal Ika sebagai semboyan pemersatu bangsa.
• Tumbuhnya sikap toleransi dan saling menghargai antar teman.
• Kesadaran pentingnya menjaga persatuan semakin meningkat.
• Suasana belajar yang harmonis dan penuh kebersamaan tercipta di sekolah.
Hasil kegiatan:
• Siswa dapat menjelaskan arti Bhinneka Tunggal Ika dengan baik.
• Siswa menunjukkan sikap saling menghargai, bekerja sama, dan memahami arti persatuan dalam keberagaman.
• Meningkatnya motivasi untuk menerapkan nilai kebangsaan dalam kehidupan sehari-hari, baik di sekolah maupun di masyarakat.`
    },
    {
      title: "Perempuan Agen Pancasila",
      description: "Pemberdayaan perempuan sebagai agen perubahan dalam menyebarkan nilai-nilai Pancasila dan membangun masyarakat yang berkeadilan dan beradab.",
      image: "/images/kkn/jamu.jpg",
      content: `Kegiatan ini dilaksanakan pada Senin, 21 Juli 2025 dan Selasa, 5 Agustus 2025 di Aula Balai Desa Gandu pukul 13.00 WIB hingga selesai, dengan peserta utama ibu-ibu PKK Desa Gandu. Agenda meliputi sosialisasi pemanfaatan tanaman obat keluarga (TOGA) dan praktik pengolahan hasil TOGA menjadi produk sederhana yang bermanfaat bagi kesehatan keluarga.

Tujuan kegiatan:
• Memberikan pengetahuan tentang ketahanan pangan berbasis rumah tangga melalui pemanfaatan lahan pekarangan.
• Meningkatkan keterampilan ibu-ibu dalam mengolah TOGA menjadi obat tradisional maupun produk bernilai ekonomis.
Manfaat kegiatan:
• Ibu-ibu PKK memahami fungsi dan manfaat TOGA.
• Mampu mengolah TOGA menjadi produk bermanfaat bagi kesehatan maupun peluang usaha.
• Terbentuk ketahanan pangan keluarga yang lebih mandiri.
Hasil kegiatan:
Peserta mengikuti kegiatan dengan antusias, memperoleh pengetahuan sekaligus keterampilan praktis, serta berhasil membuat contoh olahan TOGA. Pada hari kedua, dibagikan bibit kunyit dan sereh untuk ditanam di rumah. Kegiatan ini meningkatkan kesadaran akan pemanfaatan TOGA sekaligus memperkuat peran perempuan sebagai agen ketahanan pangan keluarga.`
    },
    {
      title: "Penguatan UMKM",
      description: "Pembinaan dan pengembangan Usaha Mikro, Kecil, dan Menengah melalui pelatihan manajemen, pemasaran, dan peningkatan kapasitas produksi.",
      image: "/images/kkn/umkm.jpg",
      content: `Kegiatan Penguatan UMKM Desa Gandu dilaksanakan pada Minggu, 9 Agustus 2025 di rumah pemilik UMKM setempat. Fokus kegiatan meliputi:

Materi: strategi pemasaran, teknik membangun branding, serta pendampingan analisis SWOT usaha.
Implementasi: pembuatan banner usaha sebagai sarana promosi nyata.
Tujuan kegiatan adalah meningkatkan pengetahuan dan keterampilan pemilik UMKM dalam pemasaran, memperkuat identitas produk, serta membantu mereka merancang strategi pengembangan melalui analisis SWOT.
Manfaat yang diperoleh:
• Pemahaman baru tentang teknik marketing modern,
• Kemampuan lebih baik dalam membangun branding,
• Dukungan nyata berupa media promosi (banner).
Hasil kegiatan: meningkatnya wawasan dan keterampilan pemasaran, tersusunnya analisis SWOT sederhana sebagai acuan pengembangan usaha, serta terwujudnya banner promosi yang siap digunakan untuk memperkenalkan produk UMKM Desa Gandu.`
    },
    {
      title: "Pengembangan Website Desa",
      description: "Digitalisasi pemerintahan desa melalui pembuatan dan pengembangan website untuk meningkatkan transparansi dan efisiensi pelayanan publik.",
      image: "/images/kkn/website.jpg",
      content: `Kegiatan Pemberdayaan Teknologi Desa Gandu dilaksanakan pada 4 Juli – 27 Agustus 2025 dengan jadwal fleksibel. Fokus utama kegiatan adalah pengembangan website desa sebagai:

• sarana promosi potensi dan usaha lokal,
• media informasi dan komunikasi antarperangkat desa, masyarakat, dan pengusaha,
• serta wadah arsip dan dokumentasi digital.
Tujuan:
• Meningkatkan pemanfaatan teknologi digital dalam pengelolaan informasi, promosi, dan pencatatan kegiatan,
• Memperkuat kapasitas perangkat desa dan pengusaha lokal dalam penggunaan teknologi untuk pelayanan masyarakat dan pengembangan usaha.
Manfaat:
• Tersedianya media digital yang dapat diakses luas,
• Peningkatan kemampuan perangkat desa dalam mengelola informasi,
• Peluang promosi lebih luas bagi pengusaha lokal.
Hasil yang Diharapkan:
• Website resmi Desa Gandu dengan informasi lengkap tentang potensi, kegiatan, dan dokumentasi desa,
• Meningkatnya literasi digital perangkat desa dan pengusaha,
• Terciptanya sistem arsip dan dokumentasi yang rapi, modern, dan mudah diakses.`
    },
    {
      title: "Pelatihan Pemulasaran Jenazah",
      description: "Pelatihan teknis dan spiritual tentang tata cara pemulasaran jenazah sesuai ajaran agama untuk meningkatkan kualitas pelayanan di bidang keagamaan.",
      image: "/images/kkn/jenazah.jpg",
      content: `Kegiatan Pemulasaran Jenazah dilaksanakan pada Sabtu, 2 Agustus 2025 pukul 20.00 WIB di MDA Nurul Fatah, Desa Gandu.
Acara berupa pelatihan teknis-praktis tata cara merawat jenazah sesuai syariat Islam, mulai dari memandikan, mengkafani, hingga menyiapkan untuk salat dan pemakaman. Peserta adalah anggota PR IPNU-IPPNU Desa Gandu.

Tujuan:
• Membekali generasi muda dengan pengetahuan dan keterampilan pemulasaran jenazah sesuai tuntunan agama.
• Menumbuhkan tanggung jawab serta kepedulian sosial.
Manfaat:
• Generasi muda siap mengaplikasikan ilmu tersebut di masyarakat.
• Memperkuat nilai keagamaan, empati, dan ukhuwah antaranggota.
Hasil:
• Peningkatan pemahaman dan keterampilan pemulasaran jenazah.
• Terciptanya kader muda yang siap mengabdi dan peduli terhadap kebutuhan sosial-keagamaan di Desa Gandu.`
    },
    {
      title: "Senam Kreasi",
      description: "Kegiatan olahraga bersama untuk meningkatkan kesadaran masyarakat akan pentingnya hidup sehat dan mempererat hubungan sosial antarwarga.",
      image: "/images/kkn/senam.jpg",
      content: `Kegiatan Senam Kreasi dilaksanakan pada 15 Juli, 20 Juli, dan 5 Agustus 2025 pukul 08.00 WIB di Balai Desa Gandu, dengan melibatkan masyarakat setempat. Senam ini memadukan gerakan modern dan tradisional yang dikemas energik dan menyenangkan.

Tujuan utama kegiatan adalah:
• Meningkatkan kesadaran pentingnya olahraga bagi kesehatan.
• Memperkenalkan variasi gerakan senam modern-tradisional.
• Mempererat hubungan sosial antarwarga.
Manfaat yang diperoleh:
• Menjaga kebugaran jasmani dan mengurangi kejenuhan.
• Menumbuhkan semangat hidup sehat.
• Menjadi sarana rekreasi murah, mudah, dan inklusif.
Hasil kegiatan tampak dari antusiasme warga yang meningkat, terciptanya kebersamaan dan kekompakan, serta berkembangnya budaya hidup sehat dalam kehidupan sehari-hari.`
    },
    {
      title: "Pelestarian Batik Jumputan di SD",
      description: "Program edukasi dan pelatihan keterampilan batik jumputan kepada siswa sekolah dasar sebagai upaya pelestarian budaya lokal.",
      image: "/images/kkn/batik.jpg",
      content: `Kegiatan ini dilaksanakan pada Kamis, 21 Agustus 2025 pukul 09.00 WIB di SD Negeri 2 Gandu dengan sasaran siswa kelas V. Fokus kegiatan adalah memperkenalkan seni membatik melalui teknik Shibori, yaitu teknik celup ikat sederhana yang menghasilkan motif unik dan menarik.

Tujuan kegiatan:
• Mengenalkan seni membatik sejak dini.
• Melatih kreativitas, ketekunan, dan keterampilan tangan siswa.
• Menumbuhkan kecintaan terhadap budaya lokal.
Manfaat kegiatan:
• Memberikan pengalaman langsung dalam praktik membatik.
• Meningkatkan kreativitas, kemandirian, dan rasa percaya diri.
• Menumbuhkan kebanggaan terhadap seni dan budaya bangsa.
• Menghasilkan produk batik yang dapat dimanfaatkan di sekolah.
Hasil kegiatan:
Siswa kelas V berhasil membuat batik Shibori dengan berbagai motif sesuai kreativitas masing-masing. Proses berlangsung lancar dengan antusiasme tinggi, mulai dari melipat kain hingga pencelupan warna. Dari kegiatan ini dihasilkan 5 kain batik yang kemudian dimanfaatkan sebagai ujruk meja di SDN 2 Gandu, sekaligus menjadi bukti nyata karya siswa.`
    },
    {
      title: "Sosialisasi Penghijauan",
      description: "Kampanye lingkungan hidup untuk meningkatkan kesadaran masyarakat tentang pentingnya penanaman pohon dan penghijauan lingkungan.",
      image: "/images/kkn/penghijauan.jpg",
      content: `Pada Kamis, 17 Juli 2025 pukul 09.00 WIB, SDN 1 Gandu melaksanakan kegiatan penanaman bibit pohon yang melibatkan siswa, guru, dan warga sekolah. Tujuan kegiatan ini adalah menumbuhkan kepedulian siswa terhadap lingkungan, mengajarkan pentingnya penghijauan demi menjaga keseimbangan alam, serta menciptakan suasana sekolah yang lebih hijau, sejuk, dan nyaman.
Manfaat yang diperoleh meliputi terciptanya lingkungan sekolah yang asri dan bersih, meningkatnya kesadaran siswa akan pentingnya menjaga kelestarian lingkungan, serta tumbuhnya rasa tanggung jawab bersama dalam merawat pohon.
Hasil kegiatan ini terlihat dari lingkungan sekolah yang lebih hijau dan asri, siswa mendapat pengalaman langsung tentang penghijauan, serta munculnya kebiasaan positif warga sekolah untuk peduli dan merawat pohon yang telah ditanam.`
    },
    {
      title: "Analisis BUMDes",
      description: "Studi dan evaluasi terhadap kinerja Badan Usaha Milik Desa untuk memberikan rekomendasi pengembangan dan peningkatan kapasitas usaha desa.",
      image: "/images/kkn/bumdes.jpg",
      content: `Kegiatan Revitalisasi BUMDes dilaksanakan pada Sabtu, 9 Agustus 2025 di Balai Desa Gandu dengan tujuan memberikan pemahaman kepada perangkat desa dan warga mengenai pentingnya penyusunan business plan sebagai langkah strategis dalam pengembangan BUMDes.
Melalui pemaparan materi, peserta memperoleh pengetahuan tentang strategi pengelolaan usaha desa, potensi pengembangan unit usaha, serta tata kelola profesional dan transparan. Kegiatan ini juga mendorong meningkatnya partisipasi masyarakat dalam pengelolaan BUMDes sehingga terbangun kerja sama yang solid antara pemerintah desa dan warga.
Hasil yang diharapkan dari kegiatan ini adalah terciptanya kesepahaman bersama mengenai arah pengembangan BUMDes, tersusunnya draft awal business plan sebagai acuan program kerja, serta meningkatnya motivasi masyarakat untuk berkontribusi aktif demi kemandirian ekonomi dan kesejahteraan bersama.`
    },
    {
      title: "Bimbingan Belajar",
      description: "Program pendampingan akademik bagi siswa di berbagai jenjang pendidikan untuk meningkatkan prestasi belajar dan memperkuat pemahaman materi pelajaran.",
      image: "/images/kkn/bimbel.jpg",
      content: `Kegiatan Revitalisasi BUMDes dilaksanakan pada Sabtu, 9 Agustus 2025 di Balai Desa Gandu dengan tujuan memberikan pemahaman kepada perangkat desa dan warga mengenai pentingnya penyusunan business plan sebagai langkah strategis dalam pengembangan BUMDes.
Melalui pemaparan materi, peserta memperoleh pengetahuan tentang strategi pengelolaan usaha desa, potensi pengembangan unit usaha, serta tata kelola profesional dan transparan. Kegiatan ini juga mendorong meningkatnya partisipasi masyarakat dalam pengelolaan BUMDes sehingga terbangun kerja sama yang solid antara pemerintah desa dan warga.
Hasil yang diharapkan dari kegiatan ini adalah terciptanya kesepahaman bersama mengenai arah pengembangan BUMDes, tersusunnya draft awal business plan sebagai acuan program kerja, serta meningkatnya motivasi masyarakat untuk berkontribusi aktif demi kemandirian ekonomi dan kesejahteraan bersama.`
    },
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
        title="KKN UNNES 2025"
        subtitle="Program Kuliah Kerja Nyata Universitas Negeri Semarang di Desa Gandu"
        backgroundImage="/images/hero-section/hero-3.jpg"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kegiatanKKN.map((kegiatan, index) => (
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
