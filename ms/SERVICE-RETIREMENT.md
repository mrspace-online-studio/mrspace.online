# Ortak hizmet sonlandırma

`/service-unavailable/` beş dilde ortak uyarı ve `/start/` yeni başvuru bağlantısını gösterir. Bu ekran yeni kayıt veya ödeme oluşturmaz. Başvuru mevcut `/start/` sürecine gider; eski erişim kendiliğinden açılmaz.

## Bir hizmeti sonlandırmak

1. Yetkili yönetici `ms_retire_service(SLUG)` çağırır. İşlem üyelikleri kaldırır, özel bağlantı anahtarlarını döndürür, yayınlanmış taslağı ayırır, Square kimlik bilgilerini ve bildirimleri devre dışı bırakır. Eski anahtarların yalnız hash değerleri yönlendirme için tutulur. İşlem tekrar çalıştırıldığında erişim açılmaz.
2. `assets/ms-service-registry.json` içine slug, eski yollar, yönetilen alan adları ve eski varlık adları eklenir. `tools/service-retirement.mjs` bunu bütün yayınlara uygular. Müşteri kaynak arşivi yayınlanmaz; bilinen eski HTML yollarına yalnız ortak uyarı yazılır. Diğer eski dosyalar paket dışında kalır.
3. Yönetilen ayrı bir müşteri yayını varsa `sites/SLUG/site.json` içinde `retired:true` ve eski HTML yolları belirtilir. Yayın iş akışı eski sürümdeki takip edilen dosyaları temizleyip uyarıyı yayınlar; `.github/` ve CNAME korunur. Bu işlem yalnız açıkça sonlandırılan yayınlar içindir.
4. Eski tek müşteriye ait API URL’leri `closedServiceResponse` ile HTTP 410 döndürür. Ortak API’ler `retiredResponse` kontrolünü kimlik bilgileri veya harici servis çağrılarından önce uygular. Güncel olmayan tarayıcı kopyaları da yeni iş, üyelik, katalog veya içerik kaydı oluşturamaz; veritabanı tetikleyicileri engeller.

`ms_service_route` herkese açık, sınırlı bir eski bağlantı sorgusudur: yalnız `retired` ve ortak yönlendirme adreslerini döndürür. Kayıt tablosu RLS ile korunur; hash veya müşteri bilgisi anonime sunulmaz. `ms_retire_service` yalnız yönetici tarafından çağrılabilir. Bilinen işletme içi markalar yanlışlıkla sonlandırmaya karşı korunur.

Tarihsel muhasebe/faaliyet kayıtları ve Git geçmişi korunur; aktif panel, üyelik, bildirim ve yayın bağlantısından çıkarılır. Bu mekanizma geçmiş kayıtları geri dönüşsüz silme aracı değildir. Yeni müşteri için yeniden kullanımda ortak tablolardaki geçmiş kayıtlar yeni hesaba aktarılmaz.

## Rufcut uygulaması

Eski `/rufcut/`, `/panel/rufcut/`, `?site=rufcut`, `?self=rufcut`, `?preview=rufcut`, yönetilen `rufcutjeans.com` yolları ve önceki gizli bağlantılar kapanış ekranına gider. Panel ve editör örneklerinden eski marka kaldırıldı. Rufcut’a ait bilinen fotoğraf, font, PDF, ekran görüntüsü ve müşteri sözlükleri aktif yayın paketine alınmaz. Eski `ms-repair` ve `ms-content` URL’leri yalnız 410 uyarısı sunar.

Kapsam, Mr. Space’in yönettiği depo, uygulama ve servislerdir. Müşterinin bağımsız `rufcut.com` alan adı veya üçüncü taraf hesapları bu değişikliğe dahil değildir.

## Kontrol

- `node --test tests/service-retirement.mjs tests/public-surface.mjs tests/space-tailoring.mjs`
- Veritabanında sonlandırma, eski anahtarın yönlenmesi, üyelik iptali, anahtar döndürme ve yeni kayıt engeli önce rollback ile doğrulanır.
- Tarayıcıda beş dil, açık/koyu tema, mobil/masaüstü, eski site/panel/editör bağlantıları ve yeni başvuru düğmesi kontrol edilir.
- Güvenlik denetiminde yeni tablonun RLS’si ve bilinçli genel yönlendirme RPC’si kontrol edilir. Başvuru veya e-posta test amacıyla gerçek gönderilmez.
