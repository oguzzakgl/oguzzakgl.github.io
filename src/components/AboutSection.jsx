import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const techs = [
        { name: 'Gemini API', color: 'bg-purple-600/10 text-purple-400 border-purple-600/20' },
        { name: 'Python', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
        { name: 'FastAPI', color: 'bg-green-600/10 text-green-400 border-green-600/20' },
        { name: 'Flutter', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
        { name: 'React', color: 'bg-blue-600/10 text-blue-400 border-blue-600/20' },
        { name: 'Prompt Engineering', color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
        { name: 'NLP', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
        { name: 'Supabase', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
        { name: 'Docker', color: 'bg-blue-600/10 text-blue-400 border-blue-600/20' },
        { name: 'PostgreSQL', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' },
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
                                Merhaba! Ben Oğuz Kaan Akgül. Bilgisayar Mühendisliği son sınıf öğrencisi ve **Junior AI App Developer** olarak, yapay zeka modellerini modern web ve mobil uygulamalara entegre etme konusuna odaklanıyorum.
                            </p>
                            <p>
                                Geleneksel yazılım süreçlerini **Gemini API** ve diğer LLM servisleriyle güçlendirerek, kullanıcı deneyimini dönüştüren akıllı çözümler üretiyorum. FastAPI, React ve Flutter ekosistemlerini kullanarak ölçeklenebilir, AI destekli SaaS platformları ve mobil uygulamalar geliştiriyorum.
                            </p>
                            <p>
                                Sürekli öğrenmeye ve AI ajanları, semantik arama ve otonom iş akışları gibi yeni teknolojileri keşfetmeye olan tutkumla, yenilikçi ürünler üretmeye odaklanıyorum.
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
                                    whileHover={{ scale: 1.05 }}
                                    className={`px-4 py-2 rounded-lg border ${tech.color} font-medium cursor-default backdrop-blur-sm`}
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
