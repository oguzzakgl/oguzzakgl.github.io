import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Hakkımda', href: '#about' },
        { name: 'Projeler', href: '#projects' },
        { name: 'İletişim', href: '#contact' }
    ];

    const handleNavigation = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.querySelector(href);
                if(el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.querySelector(href);
            if(el) el.scrollIntoView({ behavior: 'smooth' });
            else window.scrollTo(0,0);
        }
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-black/70 backdrop-blur-lg border-b border-white/10 py-4 shadow-xl' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2 group">
                    <Terminal size={28} className="text-primary group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">Oguz<span className="text-gray-500">.dev</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            onClick={(e) => handleNavigation(e, link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="/OguzkaanAkgulCV.pdf" 
                        download="OguzkaanAkgulCV.pdf"
                        className="px-5 py-2.5 bg-primary/10 border border-primary/30 hover:bg-primary hover:text-black text-primary rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(124,58,237,0.15)] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]"
                    >
                        CV İndir
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white hover:text-primary transition-colors focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    onClick={(e) => handleNavigation(e, link.href)}
                                    className="text-lg font-medium text-gray-300 hover:text-primary transition-colors w-full text-center py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a 
                                href="/OguzkaanAkgulCV.pdf" 
                                download="OguzkaanAkgulCV.pdf"
                                className="w-full text-center py-3 bg-primary/20 border border-primary/50 text-white rounded-xl font-medium mt-2"
                            >
                                CV İndir
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
