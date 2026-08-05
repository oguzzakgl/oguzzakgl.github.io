import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Download, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Abstract Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-dark-to/40 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Personal Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>GenAI & LLM Architecture</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
                        Oğuz Kaan Akgül
                    </h1>

                    <p className="text-2xl md:text-3xl text-primary font-medium mb-8">
                        AI Engineer & Bilgisayar Mühendisi
                    </p>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                        Generative AI, LangChain, RAG mimarileri, LLM entegrasyonları ve ölçeklenebilir backend servisleri geliştiren Bilgisayar Mühendisi.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a href="#projects" className="group px-8 py-3 bg-primary hover:bg-primary-glow text-white rounded-full font-medium transition-all shadow-lg shadow-primary/25 flex items-center space-x-2">
                            <span>Projelerimi Gör</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/oguzCV.pdf"
                            download="Oguz_Kaan_Akgul_CV.pdf"
                            className="group px-8 py-3 bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 text-white rounded-full font-medium transition-all flex items-center space-x-2"
                        >
                            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                            <span>CV İndir</span>
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all flex items-center space-x-2">
                            <Mail size={18} />
                            <span>Bana Ulaş</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 flex items-center gap-6">
                        <a href="https://github.com/oguzzakgl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                            <Github size={20} />
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/oguzkaanakgul00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                            <Linkedin size={20} />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                    </div>
                </motion.div>

                {/* Right: Modern AI Code Card (Replaces 3D model) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full"
                >
                    <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden relative group hover:border-primary/40 transition-colors">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-gray-400 font-mono flex items-center gap-1">
                                    <Terminal size={12} /> ai_pipeline.py
                                </span>
                            </div>
                            <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-mono font-medium flex items-center gap-1">
                                <Cpu size={12} /> LangChain & Gemini
                            </span>
                        </div>

                        {/* Terminal Content */}
                        <div className="font-mono text-sm space-y-3 text-gray-300">
                            <p><span className="text-purple-400">from</span> langchain_google_genai <span className="text-purple-400">import</span> ChatGoogleGenerativeAI</p>
                            <p><span className="text-purple-400">from</span> langchain_chroma <span className="text-purple-400">import</span> Chroma</p>
                            <p><span className="text-purple-400">from</span> langchain_classic.chains <span className="text-purple-400">import</span> create_retrieval_chain</p>
                            
                            <div className="pt-2 text-gray-500"># Initializing RAG Pipeline</div>
                            <p><span className="text-blue-400">retriever</span> = vectorstore.<span className="text-yellow-400">as_retriever</span>(search_kwargs=&#123;<span className="text-green-400">"k"</span>: 3&#125;)</p>
                            <p><span className="text-blue-400">rag_chain</span> = <span className="text-yellow-400">create_retrieval_chain</span>(retriever, document_chain)</p>
                            
                            <div className="pt-2 text-gray-500"># Generating Accurate Corporate Response</div>
                            <p><span className="text-blue-400">response</span> = rag_chain.<span className="text-yellow-400">invoke</span>(&#123;<span className="text-green-400">"input"</span>: query&#125;)</p>
                            
                            <div className="pt-3 border-t border-white/5 text-emerald-400 flex items-center gap-2">
                                <Code2 size={16} />
                                <span>Status: RAG Pipeline Active & Verified</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
