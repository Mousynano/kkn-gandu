### Cara menggunakan AIDA di halaman

1) Import tipe dan komponen
```tsx
import AidaSection from "@/components/aida-section";
import { mockAidaProfil } from "@/lib/mock";
```

2) Render di halaman
```tsx
<AidaSection content={mockAidaProfil} />
```

3) Susun per halaman (saran)
- Profil Desa: AIDA untuk positioning desa + CTA ke kontak/UMKM.
- Dashboard Data: AIDA fokus manfaat data untuk warga & investor.
- Perangkat Desa: AIDA untuk kepercayaan/akuntabilitas layanan publik.
- Arsip: AIDA untuk kemudahan akses informasi & transparansi.
- UMKM: AIDA ajak beli/invest, dilanjut grid UMKM.

### Menambah Section UMKM

1) Import komponen dan data
```tsx
import UmkmSection from "@/components/umkm-section";
import { mockUmkm } from "@/lib/mock";
```

2) Render
```tsx
<UmkmSection id="umkm" items={mockUmkm} description="Produk & jasa unggulan warga Gandu" />
```

### Tips targeting AIDA
- Tentukan audience spesifik (warga, investor, wisatawan, distributor).
- Di Attention, sebutkan masalah/aspirasi mereka secara eksplisit.
- Di Interest, pakai 3-5 bullet manfaat relevan.
- Di Desire, tampilkan bukti: kisah sukses, angka pertumbuhan, testimonial.
- Di Action, sertakan 1-2 CTA jelas (beli, chat WA, ajukan kemitraan).


