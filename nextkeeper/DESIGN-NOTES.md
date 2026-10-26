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

## Claude tasarımıyla birleştirme

Kullanıcının Claude sürümünü tercih etmesi üzerine, onun yerel `homepage-2026/nextkeeper` dosyalarındaki açık gri-yeşil palet, Instrument Serif / Geist tipografisi, üst üste giysi vitrini, yuvarlak kartlar, sıralama, yaklaşan sakinler ve çanta arayüzü temel alındı. Önceki sürümün yerel fotoğraf altyapısı, küçük arşiv etiketleri, iki marka cümlesi, düzenleyici kimlikleri ve erişilebilir durum bildirimleri taşındı. Logo Cormorant Garamond olarak kaldı. Yeni fontlar resmi Google Fonts kaynağından lisanslarıyla yerel sunulur.

Çanta native dialog kullanır: odak içeride tutulur, Escape ile kapanır. Giysi dosyasında ekleme bildirimi aynı pencerede görünür; çantaya geçerken dosya kapanır. Aynı parça iki kez eklenmez, kaldırılan parça toplamdan düşer. Çantadan kaldırma sonrası odak kalan kaldırma düğmesine veya kapatma düğmesine döner. Ödeme/rezervasyon yoktur; önizleme açıkça belirtilir.

Otomatik vitrin hareketi duraklatılabilir; reduced-motion tercihinde durur, klavye odağı vitrin içindeyken ve dialog açıkken ilerlemez. Üç veya daha az parça varsa sonsuz seçim döngüsüne girmez. Günlük geliş vaadi ve kesin geliş günü iddiaları yerine kayıt hazırlığı gösterilir. Sayılar gerçek örnek diziden hesaplanır.

Doğrulama: 320/390/768/1024/1440 px sayfa genişliği taşmıyor; küçük ekran filtreleri kendi satırında yatay kayıyor. Fiyat sırası 220/280/300/340/360/380. Shirts boş sonuç, Dresses iki parça gösterir. Dosyadan çantaya geçiş, tekrar ekleme, kaldırma, toplam ve önizleme mesajı gerçek tarayıcıda kontrol edildi.

## Son editoryal düzen

Claude'un Instrument Serif / Geist tipografisi korunarak büyük marka başlığı, sabit iki fotoğraflı vitrin, çerçevesiz üç sütun katalog ve taş / adaçayı / koyu mürekkep paletine geçildi. Otomatik kart döngüsü kaldırıldı. Kapsül düğmeler, iç içe kartlar ve gölgeler azaltıldı. İçerik, düzenleyici kimlikleri ve çanta davranışı korunur.

Gerçek tarayıcıda masaüstü ve 390 px görünüm incelendi; 320 ve 1440 px sayfa genişliğinde taşma yok. Vitrinden Lavandula dosyası açıldı, çantaya ekleme bildirimi doğrulandı, hata günlüğü temiz. JavaScript sözdizimi ve diff kontrolü başarılı. Önizleme ve ödeme kapsamı değişmedi.
