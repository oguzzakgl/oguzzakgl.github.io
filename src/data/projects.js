import { Cpu, Building2 } from 'lucide-react';

export const projects = [
    {
        id: 'corporate-rag-langchain',
        title: 'Corporate AI Assistant (LangChain & RAG)',
        category: 'Generative AI & LLM Systems',
        description: 'LangChain, Google Gemini 2.5 Flash ve ChromaDB Vektör Veritabanı ile geliştirilmiş kurumsal döküman sohbet asistanı. PDF belgelerini anlamsal olarak parçalayarak kullanıcı sorularını döküman içi kaynak göstererek yanıtlar.\n\nÖne Çıkan Özellikler:\n• PyPDFLoader ve RecursiveCharacterTextSplitter ile akıllı döküman parçalama.\n• Google gemini-embedding-2 modeli ve ChromaDB vektör veritabanı ile yüksek hızlı anlamsal arama.\n• create_retrieval_chain ile otomatik bağlam birleştirme ve Gemini 2.5 Flash ile kurumsal yanıt üretimi.\n• FastAPI backend, Dark-Glass UI ve marked.js ile canlı Markdown render eden modern arayüz.',
        tags: ['LangChain', 'Gemini 2.5', 'ChromaDB', 'FastAPI', 'RAG', 'Python'],
        icon: Cpu,
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/corporate-rag-langchain-assistant',
        demoLink: '#',
        stats: []
    },
    {
        id: 'fabricore-erp',
        title: 'Fabricore ERP — AI Destekli Kurumsal Sistem',
        category: 'AI & Enterprise ERP System',
        description: 'Yapay Zeka entegrasyonu ile üretim, stok, sipariş ve finans süreçlerini yöneten kapsamlı kurumsal ERP yazılımı.\n\nÖne Çıkan Özellikler:\n• AI destekli stok tahminleme ve otomatik tedarik yönetimi.\n• Üretim ve sipariş süreçlerinde akıllı rol ve departman yönetimi.\n• Gerçek zamanlı grafikler ve performans analitiği.\n• FastAPI backend ve modern web mimarisi.',
        tags: ['FastAPI', 'React', 'PostgreSQL', 'Tailwind', 'AI Integration'],
        icon: Building2,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        githubLink: 'https://github.com/oguzzakgl/fabricore-erp',
        demoLink: '#',
        stats: []
    }
];
