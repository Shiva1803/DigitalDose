import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'About', href: '/about' },
        { name: 'Our Work', href: '/work' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'py-2 backdrop-blur-md border-b'
                : 'py-3'
                }`}
            style={{
                backgroundColor: isScrolled ? 'var(--glass-bg)' : 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
                borderBottom: '1px solid #000000'
            }}
        >
            <div className="container-custom flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group relative z-50">
                    <img
                        src="/logo.png"
                        alt="The Digital Dose"
                        className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        The Digital Dose<span style={{ color: '#F7EA00' }}>.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="font-medium transition-colors relative group text-sm uppercase tracking-wider"
                                style={{ color: 'var(--text-secondary)' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                    style={{ backgroundColor: '#5FC883' }}
                                />
                            </Link>
                        ))}
                    </div>

                    <Link to="/contact">
                        <Button variant="primary" size="md" className="gap-2 rounded-full px-6">
                            Contact Us <ArrowRight size={16} />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        className="p-2 relative z-50"
                        style={{ color: 'var(--text-primary)' }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
                        style={{ backgroundColor: 'var(--bg-primary)' }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-bold transition-colors"
                                    style={{ color: 'var(--text-primary)' }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="mt-8 text-xl px-12 py-6">
                                Start a Project
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
