import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[var(--bg-primary)]">
            {/* Soft green & yellow glows on light background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-35"
                    style={{ backgroundColor: '#FFFBE3' }}
                />
                <div
                    className="absolute bottom-[-10%] right-0 w-[700px] h-[700px] rounded-full blur-[140px] opacity-30"
                    style={{ backgroundColor: '#FFEFC2' }}
                />
                <div
                    className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25"
                    style={{ backgroundColor: '#E5F4EC' }}
                />
            </div>

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(148, 163, 184, 0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(148, 163, 184, 0.08) 1px,transparent 1px)'
                }}
            />

            <div className="container-custom relative z-10 flex flex-col items-center text-center">

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] relative z-20 hover:scale-105 transition-transform duration-500"
                >
                    <span className="block" style={{ color: 'var(--text-primary)' }}>INJECTING</span>
                    <span className="block cursor-default selection:bg-black selection:text-white" style={{ color: '#5FC883' }}>
                        GROWTH
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    We prescribe the perfect digital strategy to elevate your business.
                    From SEO diagnosis to Social Media therapy, we are the cure for stagnation.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <Button size="lg" className="h-14 px-8 text-lg">
                        Get Your Prescription <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 px-8 text-lg"
                        style={{
                            borderColor: '#5FC883',
                            color: '#111827',
                            backgroundColor: '#ffffff'
                        }}
                    >
                        <Play className="mr-2 w-5 h-5" fill="currentColor" />Watch Showreel
                    </Button>
                </motion.div>



            </div>

            {/* Marquee at bottom */}
            <div
                className="absolute bottom-0 w-full py-4 overflow-hidden flex backdrop-blur-sm"
                style={{
                    backgroundColor: '#000000'
                }}
            >
                <div
                    className="flex whitespace-nowrap gap-12 font-bold uppercase tracking-widest text-sm animate-marquee hover-pause"
                    style={{ color: '#ffffff' }}
                >
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span>Strategy</span>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5FC883' }} />
                            <span>Branding</span>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F7EA00' }} />
                            <span>Development</span>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5FC883' }} />
                            <span>Marketing</span>
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F7EA00' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
