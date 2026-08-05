import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const techs = [
        { name: 'LangChain', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
        { name: 'ChromaDB / pgvector', color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
        { name: 'LLM APIs', color: 'bg-purple-600/10 text-purple-400 border-purple-600/20' },
        { name: 'Python', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
        { name: 'FastAPI', color: 'bg-emerald-600/10 text-emerald-400 border-emerald-600/20' },
        { name: 'RAG Architecture', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
        { name: 'PostgreSQL', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
        { name: 'Docker', color: 'bg-blue-600/10 text-blue-400 border-blue-600/20' },
    ];

    return (
        <section id="about" className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left: About Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full" /> Hakkımda
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Merhaba! Ben Oğuz Kaan Akgül. <strong className="text-white font-semibold">Bilgisayar Mühendisi</strong> ve <strong className="text-white font-semibold">AI Engineer</strong> olarak, Generative AI, RAG mimarileri ve yapay zeka modellerini modern kurumsal yazılım sistemlerine entegre etme konusuna odaklanıyorum.
                            </p>
                            <p>
                                Geleneksel yazılım süreçlerini <strong className="text-white font-semibold">LangChain ve LLM APIs</strong> (OpenAI, Gemini, Anthropic) servisleriyle güçlendirerek, kullanıcı deneyimini dönüştüren akıllı çözümler üretiyorum. FastAPI ve PostgreSQL ekosistemlerini kullanarak ölçeklenebilir, AI destekli SaaS ve RAG platformları geliştiriyorum.
                            </p>
                            <p>
                                Sürekli öğrenmeye, AI ajanları (Agentic Workflows), vektör veritabanları ve otonom iş akışları gibi yeni nesil teknolojileri projelere uygulamaya odaklanıyorum.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Technologies */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2 md:justify-end">
                            Teknolojiler <span className="w-8 h-1 bg-primary rounded-full order-first md:order-last" />
                        </h2>
                        <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                            {techs.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium border ${tech.color}`}
                                >
                                    {tech.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
