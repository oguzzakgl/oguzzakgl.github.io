## 2026-08-10 22:46 - CV İndirme Bağlantısı Güncellemesi

### YAPILANLAR:

- public/OguzkaanAkgulCV.pdf - Yeni CV PDF dosyası `public/` dizininde doğrulandı.
- src/components/HeroSection.jsx - "CV İndir" butonunun `href` ve `download` nitelikleri `/OguzkaanAkgulCV.pdf` olarak güncellendi.
- src/components/Navbar.jsx - Masaüstü ve mobil menüdeki "CV İndir" butonlarının `href` ve `download` nitelikleri `/OguzkaanAkgulCV.pdf` olarak güncellendi.

### KARARLAR:

- CV indirme bağlantılarının tümü direct link ve varsayılan dosya adı olarak `OguzkaanAkgulCV.pdf` kaynağına yönlendirildi.

## 2026-08-11 00:03 - Güncellenmiş CV PDF Dosyalarının Portfolyoya Kopyalanması ve Link Senkronizasyonu

### YAPILANLAR:
- public/Oguz_Kaan_Akgul_CV.pdf, public/OguzkaanAkgulCV.pdf, public/oguzCV.pdf - En son 1. şahıs diliyle üretilmiş CV PDF dosyası `public/` dizinindeki tüm ilgili PDF isimlerine kopyalandı ve güncellendi.
- src/components/Navbar.jsx - Masaüstü ve mobil menüdeki "CV İndir" bağlantıları `HeroSection.jsx` ile tam senkronize edilerek `/Oguz_Kaan_Akgul_CV.pdf` yapıldı.

### KARARLAR:
- Önbellek sorunlarını ve eski versiyon indirmelerini engellemek amacıyla `public/` klasöründeki tüm CV PDF alternatif isimleri tek ve en güncel sürüm ile değiştirildi.
