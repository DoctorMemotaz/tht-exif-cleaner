# 🇹🇷 THT Exif Wiper & Poisoner

<div align="center">
  <img src="https://img.shields.io/badge/Platform-Windows-0078d7?style=for-the-badge&logo=windows" alt="Windows">
  <img src="https://img.shields.io/badge/Tech-Electron-47848f?style=for-the-badge&logo=electron" alt="Electron">
  <img src="https://img.shields.io/badge/Engine-ExifTool-111111?style=for-the-badge" alt="ExifTool">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
</div>

<br>

> **Anti-Forensics Exif Temizleme Aracı.**
> <br>
> Bu uygulama, THT üyeleri için geliştirilmiş, hedef dosyadaki tüm izleri silmek veya random verilerle manipüle etmek için tasarlanmış bir web-based masaüstü aracıdır.

---

## ⚡ Özellikler:

Uygulama, sıradan bir silme işlemi yerine, yapısal bütünlüğü bozmadan çalışır. <b>Forensic araçları ile geri getirilemez.</b> <br><br>

* **🛡️ Nuke (Tam Temizlik):** Dosyanın çalışması için gereken yapısal veriler hariç; tüm EXIF, XMP, IPTC, cihaz modeli, yazar ve yazılım izlerini kökünden kazır.
  <br><br>
* **☠️ Poison (Random Veri Enjeksiyonu):** Dosyayı tamamen temizledikten sonra içine sahte GPS koordinatları (Null Island), sahte tarihler (1980-2010 arası), sahte cihaz ve THT imzalı yazılım bilgileri gömer. Analiz yapanları tamamen yanlış yönlendirir.
  <br><br>
* **📂 Geniş Format Desteği:** `exiftool-vendored` motoru sayesinde JPG, PNG, MP4, PDF, DOCX dahil yüzlerce dosya formatını destekler. Dosyaları bozmadan temizliğini yapar.
  <br><br>
* **🔒 Obfuscated Core:** Uygulamanın çekirdek dosyaları tersine mühendisliğe karşı okunamaz hale getirilmiştir. Veriler geri getirilemez.

---

## 🚀 Kurulum ve Kullanım

### 📥 Direkt İndir (v1: Sadece Windows)
Kaynak koduyla uğraşmak istemiyorsanız, derlenmiş hazır `.exe` setup dosyasını indirebilirsiniz:
1. Sağ taraftaki **[Releases](https://github.com/DoctorMemotaz/tht-exif-cleaner/releases)** sekmesine gidin.
2. En güncel sürümün altındaki `THT Exif Cleaner` .setup dosyasını indirin ve kurun.

### 💻 Geliştiriciler İçin (Kaynak Kodundan Çalıştırma)
Projeyi kendi bilgisayarınızda geliştirmek veya incelemek isterseniz:

   ```bash
   git clone https://github.com/DoctorMemotaz/tht-exif-cleaner.git
   ```
   
   ```npm
   npm install
   ```

   ```npm
   npm start
   ```
