import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioCTA = () => {

    return (
        <section
            id="portfolio"
            className="relative py-32 overflow-hidden"
            style={{ backgroundColor: '#FFFDF4' }}
        >
            {/* Zig Zag Background Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="zigzag" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
                            <path
                                d="M0 40 L50 0 L100 40"
                                fill="none"
                                stroke="#5FC883"
                                strokeWidth="2"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#zigzag)" />
                </svg>
            </div>

            {/* Soft green / yellow orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30"
                style={{ backgroundColor: '#E5F4EC' }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-30"
                style={{ backgroundColor: '#FFFBE3' }}
            />

            <div className="container-custom relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-10 tracking-tight"
                    style={{ color: 'var(--text-primary)' }}
                >
                    Want to check out our portfolio
                    <span
                        className="inline-block animate-pulse ml-1"
                        style={{ color: '#5FC883' }}
                    >?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button
                        size="lg"
                        className="h-16 px-12 text-xl font-bold uppercase tracking-wider rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300 bg-[#5FC883] text-black"
                    >
                        <span className="skew-x-[10deg] group-hover:skew-x-0 inline-flex items-center gap-2">
                            Our Work <ArrowUpRight className="w-6 h-6" />
                        </span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
