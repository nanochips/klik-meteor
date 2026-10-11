# ☄️ Klik Meteor

> Game clicker arcade sederhana: kejar skor tertinggi dalam 20 detik.

<div align="center">

[![Play Live](https://img.shields.io/badge/▶_Play_live-klik--meteor.vercel.app-8f9dff?style=for-the-badge&logo=vercel&logoColor=white)](https://klik-meteor.vercel.app)
[![Built with HTML](https://img.shields.io/badge/HTML-vanilla-e34f26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Built with JavaScript](https://img.shields.io/badge/JavaScript-vanilla-f7df1e?style=flat-square&logo=javascript&logoColor=111827)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Deploy](https://img.shields.io/badge/deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

**[Main sekarang →](https://klik-meteor.vercel.app)**

</div>

## ✨ Tentang game

Klik meteor sebanyak mungkin sebelum waktu habis. Setiap klik memindahkan meteor ke posisi baru — sederhana, cepat, dan lumayan bikin nagih.

### Fitur

- ⏱️ Sesi permainan 20 detik
- 🎯 Meteor berpindah secara acak setelah setiap klik
- 🏆 Leaderboard top 10 melalui Supabase
- 📱 Tampilan responsif untuk desktop dan mobile
- 📴 Tetap bisa dimainkan dalam mode lokal tanpa Supabase
- ⚡ Static site tanpa framework dan tanpa build step

## 🛠️ Teknologi

- HTML, CSS, JavaScript vanilla
- Supabase REST API untuk leaderboard opsional
- Vercel untuk deployment

## 🚀 Menjalankan secara lokal

```bash
git clone https://github.com/nanochips/klik-meteor.git
cd klik-meteor
python3 -m http.server 8080
```

Buka `http://localhost:8080` di browser.

## ☄️ Mengaktifkan leaderboard

1. Buat tabel menggunakan isi `supabase-schema.sql` di project Supabase.
2. Isi `config.js` dengan **URL project** dan **anon/public key**.
3. Jangan pernah memasukkan `service_role key` ke browser.
4. Deploy ulang ke Vercel.

Tanpa konfigurasi Supabase, game otomatis menggunakan mode lokal.

## 📁 Struktur project

```text
├── index.html          # Halaman game
├── style.css           # Visual dan layout
├── app.js              # Logika permainan dan leaderboard
├── config.js           # Konfigurasi Supabase publik
├── supabase-schema.sql  # Skema + RLS leaderboard
└── vercel.json          # Konfigurasi hosting
```

## 🗺️ Roadmap

- [x] Core gameplay
- [x] Responsive UI
- [x] Leaderboard Supabase opsional
- [x] Production deployment
- [ ] Sound effects dan feedback haptic
- [ ] Nama pemain custom
- [ ] Daily challenge

## 📄 Lisensi

Dibuat untuk eksperimen dan pembelajaran. Silakan fork, modifikasi, dan bikin versi meteor kamu sendiri.

---

<div align="center">
  <sub>Built with ☄️ by Alvin · 2026</sub>
</div>
