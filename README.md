# Esnaf Site Template

Astro ile hazırlanmış, küçük işletmeler için hızlı özelleştirilebilen statik website şablonu.

## Komutlar

```bash
npm install
npm run dev
npm run build
```

Geliştirme sunucusu açılınca vitrin site `/`, hazırlık paneli `/admin/` adresinde çalışır.

## İş Akışı

1. `/admin/` panelinde sektör şablonunu seç.
2. İşletme adı, slogan, renkler, hizmetler, adres ve fotoğraf linklerini düzenle.
3. `JSON indir` ile çıkan dosyanın içeriğini `src/data/site.json` dosyasına taşı.
4. `npm run build` ile kontrol et.
5. Cloudflare Pages'a bağla ve yayına al.

Bu proje bakım maliyetini düşük tutmak için tamamen statik çalışır. Canlı sitedeki panel tarayıcıdan doğrudan sunucuya dosya yazamaz; bunu yapmak için GitHub OAuth, Cloudflare Pages Functions veya ayrı bir CMS gerekir. İlk sürümde panel hızlı hazırlık ve teslim öncesi düzenleme için tasarlandı.

## Cloudflare Pages

Cloudflare Pages'ta yeni proje oluştururken:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20` veya daha yeni

Repository bağlandıktan sonra her push otomatik yeni yayın üretir. Tek seferlik teslimlerde müşteriye Cloudflare hesabı veya GitHub repo erişimi verilebilir.

## Özelleştirme

Ana veri dosyası [src/data/site.json](/Users/bokav/Desktop/website-template/src/data/site.json). Bölümleri kapatmak için ilgili `enabled` değerini `false` yapabilirsin. Renkler `theme` altında, hizmet kartları `sections.services.items` altında tutulur.
