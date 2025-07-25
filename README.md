# review

- store kullanılmamış store kullanılacak
- componentler çok dağınık ve önerilen yapıya uygun değil
- componentler fetch işlemi barındırmamalıdır verileri çeken fonkisyonları barındırmak store dosyasının, fonksiyonu çağırıp çalıştırmak ise sayfanın görevidir
- eslint kurallarından no-undef kapatılabilir ve typescript: true yapılmalı
- nuxtın auto-import özelliğinden faydalanan dosyalar import edilmemeli
- nuxt/ui ın verimli kullanılması için app/ dosyası içerisinde app.config.ts eklenmeli
- film componentlerinin tıklanma alanı çok büyük UX e zarar veriyor
- eğer sayfalar arası yönlendirme slidover ile yapılacaksa bir sayfaya geçildiği zaman slideover otomatik kapatılmalı ve bu slideoverı açan buton header içerisinde bulunmalı

# En Önemliler
- store konusunu hızlıca hallet projende pinia var ama asla kullanılmamış.
- componentler çok dağınık ve yanlış kullanılmış
- bg-color değişiklikleri ve etrafta yazan text-colorlar gibi tasarıma çok fazla müdahale var. Bunlar olmamalı nuxt/ui kullanılmalı
