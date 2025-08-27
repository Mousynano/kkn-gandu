import { AidaContent } from "./aida";
import { UmkmItem } from "./umkm";

export const mockAidaProfil: AidaContent = {
    audience: "Warga & Investor Desa Gandu",
    attention: {
        headline: "Desa Gandu: Potensi Lokal, Dampak Nasional",
        subheadline: "Kenali profil desa, SDM, dan keunggulan yang siap dikembangkan",
        mediaUrl: "/images/hero-desa.jpg",
        mediaAlt: "Panorama Desa Gandu",
    },
    interest: {
        bullets: [
            "Akses jalan memadai dan dekat pusat perdagangan",
            "SDM produktif dengan keahlian agrikultur & UMKM",
            "Komunitas aktif, kolaboratif, dan adaptif teknologi",
        ],
        supportingMediaUrl: "/images/peta-desa.jpg",
        supportingMediaAlt: "Peta Desa",
    },
    desire: {
        valueProps: [
            "Rendah hambatan untuk memulai usaha",
            "Biaya operasional kompetitif",
            "Dukungan pemerintah desa untuk perizinan",
        ],
        proof: {
            quote: "Investasi kecil, hasil terasa untuk banyak warga.",
            author: "Kepala Desa Gandu",
            metrics: [
                { label: "UMKM Aktif", value: "42+" },
                { label: "Tingkat Serapan Tenaga Kerja", value: "+18% YoY" },
            ],
        },
    },
    action: {
        ctas: [
            { label: "Hubungi Desa", href: "/kontak", variant: "primary" },
            { label: "Lihat Peluang", href: "#umkm", variant: "secondary" },
        ],
        disclaimer: "Kemitraan terbuka untuk investor sosial dan komersial.",
    },
    theme: "light",
};

export const mockUmkm: UmkmItem[] = [
    {
        id: "umkm-1",
        name: "Pabrik Mie Ayam Comal",
        category: "F&B",
        description: "Pusat produksi mie ayam di Comal dengan bahan lokal berkualitas.",
        products: [],
        heroImageUrl: "/images/umkm/mie.jpg",
        contact: {
            ownerName: "Bapak Win",
            whatsapp: "+6285780608443"
        },
        featured: true,
    },
    {
        id: "umkm-2",
        name: "Pengrajin Konveksi - Allin Tessa",
        category: "Fashion",
        description: "Produsen pakaian custom dengan bahan nyaman dan harga murah.",
        products: [],
        heroImageUrl: "/images/umkm/gopur.jpg",
        contact: {
            ownerName: "Bapak Haris Fadlilah",
            whatsapp: "+6287851238814",
        },
        featured: true,
    },
    {
        id: "umkm-3",
        name: "Pengrajin Tempe - Habib Mandiri",
        category: "F&B",
        description: "Produsen tempe berkualitas untuk daerah Comal dan Ulujami",
        products: [],
        heroImageUrl: "/images/umkm/tempe.jpg",
        contact: {
            ownerName: "Bapak Subhi",
            whatsapp: "+6285700046379",
        },
        featured: true,
    },
    {
        id: "umkm-4",
        name: "Pengrajin Buket - Enfloww Buket",
        category: "Kerajinan",
        description: "Produsen buket custom untuk berbagai acara",
        products: [],
        heroImageUrl: "/images/umkm/buket.jpg",
        contact: {
            ownerName: "Kak Nela",
            whatsapp: "+6285741965719",
        },
        featured: true,
    },
];


