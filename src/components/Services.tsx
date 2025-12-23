import { motion } from 'framer-motion';
import { Search, Share2, Code, Megaphone, Smartphone, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "SEO Optimization",
        description: "Dominate search rankings with data-driven strategies that turn traffic into revenue.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Web Development",
        description: "Blazing fast, award-winning websites built for the modern web. Next.js, React, & more.",
        colSpan: "md:col-span-2",
    },
    {
        icon: <Share2 className="w-8 h-8" />,
        title: "Social Growth",
        description: "Viral content strategies that build cult-like followings for your brand.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <Megaphone className="w-8 h-8" />,
        title: "Performance Ads",
        description: "High-ROI campaigns that target your ideal customer with laser precision.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Experiences",
        description: "Native and cross-platform apps that users love to touch.",
        colSpan: "md:col-span-1",
    }
];

export const Services = () => {

    return (
        <section
            id="services"
            className="py-32 relative overflow-hidden"
            style={{ backgroundColor: '#ffffff' }}
        >
            {/* Soft yellow / green blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[140px] animate-blob opacity-30"
                    style={{ backgroundColor: '#FFFBE3' }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[130px] animate-blob opacity-30"
                    style={{ backgroundColor: '#E5F4EC' }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Heading */}
                    <div className="lg:w-1/3 bg-[#111827] p-10 rounded-3xl h-full">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-7xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8"
                            style={{ color: '#ffffff', fontFamily: 'var(--font-sans)' }}
                        >
                            What<br />
                            we<br />
                            do<span style={{ color: '#F7EA00' }}>?</span>
                        </motion.h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="w-24 h-2 mb-8 origin-left"
                            style={{ backgroundColor: '#5FC883' }}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl font-medium max-w-sm leading-relaxed mb-8"
                            style={{ color: '#9CA3AF' }}
                        >
                            We don't just build websites; we build digital empires using cutting-edge tech and raw creativity.
                        </motion.p>

                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-[#5FC883] group cursor-pointer"
                        >
                            View All Services
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </div>

                    {/* Right: Service Grid */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50"
                                style={{
                                    border: '1px solid transparent' // Clean look
                                }}
                            >
                                <div className="mb-6 flex items-start justify-between">
                                    <h3
                                        className="text-3xl font-bold relative inline-block"
                                        style={{ color: '#000000' }}
                                    >
                                        {service.title}
                                        <span className="absolute bottom-1 left-0 w-full h-3 bg-[#F7EA00]/20 -z-10 group-hover:bg-[#F7EA00]/50 transition-colors duration-300"></span>
                                    </h3>
                                    <ArrowUpRight className="w-6 h-6 text-[#5FC883] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section 2: Integrated Digital Solutions */}
            <div className="w-full mt-32">
                <div className="flex flex-col lg:flex-row h-auto lg:min-h-[600px]">
                    {/* Text Left */}
                    <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-black"
                        >
                            Integrated<br />
                            Digital<br />
                            Solutions
                        </motion.h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 mb-8 origin-left"
                            style={{ backgroundColor: '#F7EA00' }}
                        />

                        <h3 className="text-2xl font-serif italic mb-6 text-gray-800">
                            Insights, Metrics and Analytics - <br />
                            Everything is connected!
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                            In a digital world where everything's connected, we believe that the approach to digital communications has to be joined-up too. Our approach combines creativity & technology and blends a diverse range of digital marketing disciplines.
                        </p>
                    </div>
                    {/* Visual Right */}
                    <div className="lg:w-1/2 bg-gray-100 min-h-[400px] lg:min-h-full relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670"
                            alt="Integrated Digital Solutions"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>
            </div>

            {/* Section 3: Strategy, Creativity & Results */}
            <div className="w-full">
                <div className="flex flex-col-reverse lg:flex-row h-auto lg:min-h-[600px]">
                    {/* Visual Left */}
                    <div className="lg:w-1/2 bg-gray-100 min-h-[400px] lg:min-h-full relative overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2670"
                            alt="Strategy Creativity Results"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Text Right */}
                    <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-black"
                        >
                            Strategy,<br />
                            Creativity &<br />
                            Results!
                        </motion.h2>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-24 h-1 mb-8 origin-left"
                            style={{ backgroundColor: '#5FC883' }}
                        />

                        <h3 className="text-2xl font-serif italic mb-6 text-gray-800">
                            Our approach is backed by strategy, creativity and optimised for results.
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                            We understand that each client and each project we undertake is different and so we have developed a repeatable process that we know works. Our methodology puts the user at the heart of the experience from the start.
                        </p>

                        <div className="mt-8">
                            <a
                                href="/work"
                                className="inline-flex items-center justify-center w-12 h-12 rounded-none bg-[#F7EA00] text-black hover:bg-black hover:text-[#F7EA00] transition-colors duration-300"
                            >
                                <ArrowUpRight className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
