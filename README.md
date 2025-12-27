# 🏝️ KKN Neira Basudara 2026

Website resmi untuk **KKN-PPM UGM Periode 2026** di Kecamatan Banda & Kepulauan Banda, Maluku Tengah. 

Project ini berfungsi sebagai landing page interaktif untuk media branding, pusat informasi, dan portal rekrutmen anggota tim.

## ✨ Fitur Utama

- **🎬 Hero Section Imersif**: Background video loop yang mulus dengan teknik "Dip to Black" dan overlay informatif.
- **🤖 Asisten Neira (AI Chatbot)**: 
  - Terintegrasi dengan **Groq API** (model `llama-3.3-70b-versatile`).
  - Menjawab pertanyaan seputar KKN secara real-time.
  - Tampilan responsif (Floating Window di PC, Bottom Sheet di Mobile).
- **📢 Sistem Pengumuman**: Modal pop-up untuk menyampaikan status seleksi (Seleksi Berkas, Wawancara, Final) kepada pengunjung.
- **📅 Timeline Interaktif**: Visualisasi alur kegiatan rekrutmen dengan status aktif/selesai.
- **🗺️ Peta Lokasi**: Integrasi peta untuk menunjukkan lokasi KKN.
- **📱 Responsif Penuh**: Mendukung tampilan optimal di Desktop, Tablet, dan Mobile (iOS/Android).

## 🛠️ Teknologi yang Digunakan

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **AI Integration**: [Groq SDK](https://console.groq.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Cara Menjalankan Project

### 1. Clone Repository
```bash
git clone https://github.com/username/kkn-neira-basudara.git
cd kkn-neira-basudara
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Buat file `.env.local` di root project dan tambahkan API Key Groq Anda:
```env
GROQ_API_KEY=gsk_your_api_key_here
```
> **Catatan**: API Key diperlukan agar fitur Chatbot dapat berfungsi.

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📦 Struktur Folder

- `/app`: Halaman utama dan API routes (Next.js App Router).
- `/components`: Komponen UI reusable (Hero, Chatbot, Timeline, dll).
- `/public`: Aset statis (gambar, video, icon).

## ☁️ Deployment

Project ini dioptimalkan untuk di-deploy menggunakan **Vercel**.

1. Push kode ke GitHub.
2. Import project di dashboard Vercel.
3. **PENTING**: Masukkan `GROQ_API_KEY` di menu **Settings > Environment Variables** di Vercel agar Chatbot berjalan di production.

---
Dikembangkan dengan ❤️ oleh Tim Publikasi & Dekorasi KKN Neira Basudara.
