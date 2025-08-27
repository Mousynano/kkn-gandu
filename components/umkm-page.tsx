"use client"

import AidaSection from "@/components/aida-section"
import UmkmSection from "@/components/umkm-section"
import { mockUmkm } from "@/lib/mock"
import type { AidaContent } from "@/lib/aida"

const mockAidaUmkm: AidaContent = {
  audience: "Konsumen & Investor UMKM Desa",
  attention: {
    headline: "Produk Asli Gandu, Siap Dikonsumsi & Digunakan",
    subheadline: "Bukan sekadar produk, tapi kebanggaan dan cerita dari desa kami—hadir untuk menginspirasi dan mendekatkan kita.",
    mediaUrl: "/images/umkm/mie.jpg",
    mediaAlt: "UMKM Desa Gandu",
  },
  interest: {
    bullets: [
      "Kualitas ekspor tanpa bikin dompet gempor!",
      "Cocok untuk retail, reseller, atau distributor",
      "Pengiriman fleksibel & dukungan promosi",
      "Produk ramah lingkungan & berkelanjutan",
      "Terbuka untuk franchising & kemitraan",
    ],
    supportingMediaUrl: "/images/umkm/haris.jpg",
    supportingMediaAlt: "Tekstil Gandu",
  },
  theme: "light",
}

export function UmkmPage() {
  return (
    <div className="w-full" id="umkm">
      <AidaSection content={mockAidaUmkm} />
      <UmkmSection items={mockUmkm} />
    </div>
  )
}
