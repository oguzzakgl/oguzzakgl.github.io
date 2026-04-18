import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Download, Loader2 } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, ContactShadows, Html } from '@react-three/drei';
import NewAvatar from './NewAvatar';

function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4 text-primary whitespace-nowrap bg-black/50 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-2xl">
        <Loader2 className="animate-spin" size={48} />
        <span className="font-medium animate-pulse text-sm">3D Model Hazırlanıyor...</span>
      </div>
    </Html>
  );
}

const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Abstract Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-dark-to/40 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Personal Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
                        Oğuz Kaan Akgül
                    </h1>

                    <p className="text-2xl md:text-3xl text-primary font-medium mb-8">
                        Junior AI App Developer & Bilgisayar Mühendisliği Öğrencisi
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

                    {/* Social Links Sub-row */}
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

                {/* Right: 3D Avatar Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                    <div className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing bg-transparent">
                        <Canvas 
                            shadows="soft" 
                            dpr={[1, 1.5]}
                            gl={{ antialias: false, powerPreference: "high-performance" }}
                            eventSource={document.body}
                            eventPrefix="client"
                        >
                            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                            <ambientLight intensity={1.5} />
                            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} shadow-mapSize={[1024, 1024]} castShadow />
                            <pointLight position={[-10, -10, -10]} intensity={1} />
                            
                            <Suspense fallback={<CanvasLoader />}>
                                <Environment preset="city" />
                                <NewAvatar />
                                <ContactShadows position={[0, -2.8, 0]} opacity={0.5} scale={10} blur={2} far={4} />
                            </Suspense>
                        </Canvas>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
