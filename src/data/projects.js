import { BarChart3, Building, TrendingUp, Users, Package, Brain, Utensils, Cpu } from 'lucide-react';

export const projects = [
export const projects = [
    {
        id: 'hiresync-ai',
        title: 'HireSync AI (HR-Flow)',
        category: 'AI SaaS Platformu',
        description: 'Yapay Zeka (NLP & Semantik Analiz) ile İK süreçlerini dijitalleştiren profesyonel bir SaaS platformu. Adayları iş tanımıyla %100 isabetle eşleştirir ve detaylı analiz raporları sunar.\n\nÖne Çıkan Özellikler:\n• Semantik benzerlik ve teknik anahtar kelime eşleştirme ile hibrit skorlama.\n• Aday özgeçmişlerinden otomatik iletişim ve yetkinlik çıkarımı.\n• Radar grafikler ve AI destekli aday özetleri ile derinlemesine analiz.\n• Toplu mülakat daveti ve Excel raporlama özellikleri.',
        tags: ['FastAPI', 'React', 'NLP', 'Sentence Transformers', 'Tailwind'],
        icon: Brain,
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/hr_ai_ranker',
        demoLink: '#',
        stats: []
    },
    {
        id: 'zestapp',
        title: 'ZestApp: AI Mutfak Asistanı',
        category: 'Mobil Uygulama (AI Entegrasyonu)',
        description: 'Gemini AI entegrasyonu ile eldeki malzemelere göre profesyonel tarifler üreten, kullanıcı dostu mutfak asistanı.\n\nÖne Çıkan Özellikler:\n• Google Gemini API ile dinamik ve kişiselleştirilmiş tarif üretimi.\n• Sosyal akış (feed) yapısı ile yemek tariflerini paylaşma ve keşfetme.\n• Supabase auth ve veritabanı ile hızlı ve güvenli veri yönetimi.\n• Modern Flutter arayüzü ile akıcı kullanıcı deneyimi.',
        tags: ['Flutter', 'Dart', 'Gemini API', 'Supabase', 'Mobile AI'],
        icon: Utensils,
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/zestApp',
        demoLink: '#',
        stats: []
    },
    {
        id: 'zaman-tekstil',
        title: 'Zaman Tekstil Stok Takip',
        category: 'Full-Stack Web Uygulaması',
        description: 'Tekstil sektörü için özel olarak geliştirilmiş, gerçek zamanlı stok ve depo yönetim sistemi. (Demo Sürümü: Hassas ticari verilerden arındırılmış, genel kullanıma uygun mimari).\n\nÖne Çıkan Özellikler:\n• Firebase Realtime Database ile cihazlar arası anlık veri senkronizasyonu.\n• Alt birim (Renk/Beden) bazlı detaylı stok takibi ve otomatik miktar düşümü.\n• Satış geçmişi yönetimi ve hatalı işlemleri geri alma mekanizması.\n• Saha kullanımı için optimize edilmiş tam duyarlı (responsive) mobil arayüz.\n• Vanilla JS mimarisi ile yüksek performanslı ve bağımlılıksız çalışma.',
        tags: ['JavaScript', 'Firebase', 'CSS3', 'HTML5', 'Realtime DB'],
        icon: Package,
        image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/stockTrackingApp',
        demoLink: '#',
        stats: []
    },
    {
        id: 'stock-analysis',
        title: 'Borsa Analiz Platformu',
        category: 'Makine Öğrenmesi & Veri Bilimi',
        description: 'Finansal piyasaları analiz etmek ve gelecek öngörüleri oluşturmak için tasarlanmış profesyonel bir veri platformu. Sadece veri sunmakla kalmaz, teknik analiz ve AI modellerini birleştirerek yatırımcı kararlarına veri odaklı bir bütünlük katar.\n\nTeknik Derinlik:\n• Canlı API entegrasyonu ile 8 farklı varlık sınıfından veri madenciliği.\n• Pandas ve NumPy ile MA20, MA50 ve volatilite gibi kritik finansal metriklerin hesaplanması.\n• Random Forest Regressor ile geçmiş verilerden öğrenen fiyat tahminleme motoru.\n• Plotly tabanlı interaktif görselleştirme paneli ile karmaşık verilerin anlamlandırılması.',
        tags: ['Streamlit', 'Plotly', 'Scikit-learn', 'Pandas', 'REST API'],
        icon: TrendingUp,
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/stockAnalysisPlatform',
        demoLink: '#',
        stats: []
    },
    {
        id: 'real-estate',
        title: 'Emlak Danışmanı AI',
        category: 'Makine Öğrenmesi',
        description: 'Emlak piyasasının dinamiklerini simüle eden ve konut değerlemesi yapan akıllı bir analiz sistemi. Veri üretiminden model eğitimine kadar tüm aşamaları kapsayan bu proje, bir veri bilimcinin uçtan uca çalışma disiplini sergiler.\n\nÇözümün Bütünlüğü:\n• Faker ile oluşturulan 10,000+ satırlık gerçekçi sentetik veri seti üzerinde modelleme.\n• Lokasyon ve fiziksel özelliklere dayalı hassas fiyat tahminleme algoritması.\n• Keşifsel Veri Analizi (EDA) ile piyasa trendlerinin görsel olarak raporlanması.\n• Kullanıcı dostu Streamlit arayüzü ile modelin pratik kullanıma sunulması.',
        tags: ['Streamlit', 'Scikit-learn', 'Pandas', 'Numpy', 'Faker'],
        icon: Building,
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/EmlakVeriAnalizi',
        demoLink: '#',
        stats: []
    },
    {
        id: 'crypto-analysis',
        title: 'Kripto Para Analiz Paneli',
        category: 'Backend & Görselleştirme',
        description: 'Kripto para dünyasındaki volatiliteyi takip eden ve sunucu taraflı grafik üretimi yapan yüksek performanslı bir araç. Backend mimarisi ve API yönetimi konusundaki teknik hakimiyeti temsil eder.\n\nÖzellikler:\n• FastAPI ile asenkron veri işleme ve hızlı servis altyapısı.\n• CoinGecko API entegrasyonu ile gerçek zamanlı piyasa verisi takibi.\n• Sunucu tarafında (Server-side) oluşturulan dinamik Matplotlib grafikleri.\n• Finansal metriklerin Jinja2 şablon motoru ile temiz ve okunaklı sunumu.',
        tags: ['FastAPI', 'Matplotlib', 'Python', 'CoinGecko API', 'Jinja2'],
        icon: BarChart3,
        image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/CryptoAnalysis',
        demoLink: '#',
        stats: []
    },
    {
        id: 'hr-analytics',
        title: 'İK Analitiği & Performans',
        category: 'Veri Analizi',
        description: 'Kurumsal verimliliği artırmak için geliştirilen çalışan churn ve performans analiz sistemi. Ham verinin işlenerek stratejik kararlara nasıl dönüştürülebileceğinin somut bir örneğidir.\n\nAnalitik Kapsam:\n• Çalışan ayrılma (attrition) risklerinin istatistiksel metotlarla tespiti.\n• Departman bazlı performans ve memnuniyet korelasyonlarının analizi.\n• Seaborn ve Matplotlib ile hazırlanan profesyonel yönetim raporları.\n• Karar vericiler için aksiyon alınabilir (actionable insights) veri sunumu.',
        tags: ['Pandas', 'Seaborn', 'Matplotlib', 'Python', 'Veri Analizi'],
        icon: Users,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/HRAnalytics',
        demoLink: '#',
        stats: []
    }
];
