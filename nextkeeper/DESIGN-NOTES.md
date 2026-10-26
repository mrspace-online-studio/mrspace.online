# Next Keeper tasarım yenilemesi

## Tasarım kararı

Giysi barınağı konsepti daha sakin bir butik vitrini ve arşiv düzeniyle sunulur. Kullanıcının renkleri iyileştirme izni doğrultusunda adaçayı `#E3E9E0`, emaye `#F5F6F0`, derin yeşil `#203D35`, soluk mor `#69567D` kullanılır. Renkler `nk.css` değişkenlerinden yönetilir. Marka fontları korunur ve yerel sunulur; lisansları `fonts/` içindedir.

Otomatik dönen eğik kartlar tek büyük vitrinle değiştirilmiştir. Koridor çizimi korunur, düşük kontrastlı arka plan olarak kullanılır. Katalogda üç sütun masaüstü, iki sütun mobil görünüm vardır. Yedi mevcut giysi görseli değiştirilmeden `img/` altına kopyalanmıştır; fotoğraflar artık linenshirt yoluna bağlı değildir.

Ücretler, sakin hikayeleri ve künye verileri korunur. Haftalık sahiplendirme iddiası yerine veriden hesaplanan toplam gösterilir. Önizleme uyarısı dosya penceresinin içinde de görünür. Filtre durumu ekran okuyucuya bildirilir. Henüz dosyası bulunmayan sakinlerin doğrudan bağlantısı eksik künye açmaz.

## Doğrulama

- Gerçek tarayıcı: 320, 390, 768, 1024, 1440 px; yatay taşma yok.
- Dresses filtresi iki sakin, Sets filtresi boş durum gösterir.
- Vitrinden dosya açma, `#no-003` ile yeniden yükleme, Escape ile kapatma çalışır.
- Adopt me, dosya içinde önizleme uyarısı gösterir; ödeme başlatmaz.
- Tarayıcı hata/uyarı kaydı temiz.
- `node --check nextkeeper/nk.js`
- `node tools/build-public-site.mjs /tmp/nk-public-final`
- `node --test tests/public-surface.mjs` (3/3)
- `git diff --check`

`noindex` korunur. Square ve ödeme bağlantısı bu tasarım çalışmasının kapsamında değildir. Canlı yayın yapılmamıştır.
