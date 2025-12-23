import { motion } from 'framer-motion';

const services = [
    {
        title: "Digital Strategy",
        description: "We craft data-driven strategies that align with your business goals and drive measurable growth."
    },
    {
        title: "Brand Identity",
        description: "Creating memorable brand experiences through logo design, visual systems, and brand voice guidelines."
    },
    {
        title: "Web Development",
        description: "Building high-performance, scalable websites using modern technologies like React, Next.js, and Tailwind."
    },
    {
        title: "SEO Optimization",
        description: "Improving your search engine rankings to drive organic traffic and increase visibility."
    },
    {
        title: "Social Media Marketing",
        description: "Engaging your audience with compelling content and targeted campaigns across all social platforms."
    },
    {
        title: "Content Creation",
        description: "Producing high-quality visuals, copy, and multimedia assets to tell your brand story."
    }
];

export const ServicesPage = () => {

    return (
        <div
            className="flex flex-col lg:flex-row min-h-screen"
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
            {/* Fixed Left Sidebar */}
            <div
                className="lg:w-1/3 lg:fixed lg:top-0 lg:left-0 lg:h-screen p-12 flex flex-col justify-center items-center text-center z-10 pt-32"
                style={{
                    backgroundColor: '#282828ff',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
                    style={{ color: '#ffffff' }}
                >
                    Our <br /><span style={{ color: '#5FC883' }}>Services</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg max-w-sm"
                    style={{ color: '#9CA3AF' }}
                >
                    Comprehensive digital solutions designed to elevate your brand and accelerate growth in a competitive landscape.
                </motion.p>
            </div>

            {/* Scrollable Right Content */}
            <div
                className="lg:w-2/3 lg:ml-auto pt-20"
                style={{ backgroundColor: 'var(--bg-primary)' }}
            >
                <div className="grid md:grid-cols-2" style={{ borderLeft: '1px solid rgba(15, 23, 42, 0.06)' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-12 transition-colors duration-300 group hover:bg-[#F5F7FB]"
                            style={{
                                borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
                                borderRight: '1px solid rgba(15, 23, 42, 0.06)'
                            }}
                        >
                            <div
                                className="w-12 h-1 mb-8 group-hover:w-24 transition-all duration-300"
                                style={{ backgroundColor: '#5FC883' }}
                            ></div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>"{service.description}"</p>

                            <button
                                className="px-6 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                                style={{ backgroundColor: '#5FC883', color: '#000000' }}
                            >
                                Read More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
